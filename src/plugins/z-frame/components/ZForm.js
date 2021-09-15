import { computed, toRaw, watch } from 'vue';
import eval5 from 'eval5';
import App from '@/App.vue';
import { createFormModel } from '@/plugins/z-frame/formModel';
import { diff, JSON5, lodash } from '@/plugins/z-frame';
import { autoVal } from '@/plugins/z-frame/comHelper';

function formDefTravase(formDef = {}, computedLinks, ext = { path: '', reflectMap: {} }) {
  if (formDef.type === 'object') {
    Object.entries(formDef.properties)
      .forEach(([key, formDefProp]) => {
        const truePath = ext.path ? `${ext.path}.${key}` : key;

        if (formDefProp.type !== 'array') {
          if (formDefProp.type === 'object') {
            formDefTravase(formDefProp, computedLinks, {
              path: truePath,
              parentDef: formDef.properties[key],
              parentType: 'object',
              reflectMap: ext.reflectMap,
            });
          } else {
            if (formDefProp.computedProp) {
              const linked = formDefProp.computedProp;
              if (!computedLinks[linked]) {
                computedLinks[linked] = [];
              }
              computedLinks[linked].push({
                key,
                parentType: ext.parentType ?? '',
                parentKey: ext.path,
                parentDef: ext.parentDef ?? {},
                valTpl: formDefProp.computedTpl,
                reflectMap: ext.reflectMap,
              });
            }
            if (formDefProp.reflect) {
              let target = [];
              const spath = ext.path;
              const obj = {
                key,
                reflect: formDefProp.reflect,
                valTpl: formDefProp.reflectTpl,
              };
              if (ext.reflectMap.has(spath)) {
                target = ext.reflectMap.get(spath);
              }
              target.push(obj);
              ext.reflectMap.set(spath, target);
            }
          }
        } else {
          formDefTravase(formDefProp.items, computedLinks, {
            path: truePath,
            parentDef: formDef.properties[key].items,
            parentType: 'array',
            reflectMap: ext.reflectMap,
          });
        }
      });
  }
}

export function initPart(partDef, CONFIG) {
  // console.log('CONFIG', CONFIG)
  const partName = partDef.name;
  const rowDef = partDef.def;
  const computedLinks = {
  };
  const reflectMap = new Map();
  const computedModel = {};
  const computedProps = partDef.computed ? partDef.computed : {};
  const obj = createFormModel(rowDef);
  formDefTravase(rowDef, computedLinks, {
    path: '',
    reflectMap,
  });
  // console.log(obj, reflectMap)

  function detect(model) {
    let cachedModel = '';
    watch(model, (newVal, oldVal) => {
      const newObj = toRaw(newVal);
      if (!cachedModel) {
        cachedModel = '{}';
      } else {
        //
      }
      const oldObj = JSON5.parse(cachedModel);
      const diffed = diff(oldObj, newObj);
      // console.log('diffed', diffed, computedLinks, computedModel);
      cachedModel = JSON5.stringify(newObj);
      // console.log('watch', newObj, oldObj);

      lodash.each(computedLinks, (computedLinkRelatedPath, computedLinkKey) => {
        lodash.each(computedLinkRelatedPath, (findKeyItem) => {
          // console.log(computedLinkRelatedPathItem)

          autoVal({
            obj: model,
            key: findKeyItem.key,
            base: model,
            computedVal(key) {
              return computedModel[computedLinkKey](model);
            },
          });
        });
      });

      reflectMap.forEach((arr, reflectMapKey) => {
        const hasDiffedChange = lodash.get(diffed, reflectMapKey);
        if (hasDiffedChange) {
          lodash.each(hasDiffedChange, (svalue, skey) => {
            if (typeof svalue !== 'undefined') {
              const fullPath = `${reflectMapKey}.${skey}`;
              // console.log(`${fullPath} changed`, svalue);
              /**
               * modelTarget 是 object 或 array
               */
              const modelTarget = lodash.get(model, fullPath);
              arr.forEach((arrItem) => {
                const { key, reflect, valTpl } = arrItem;
                if (valTpl) {
                  modelTarget[key] = eval5(valTpl, {
                    $VAL: modelTarget[reflect],
                    $M: modelTarget,
                    L: lodash,
                  });
                } else {
                  modelTarget[key] = modelTarget[reflect];
                }
              });
            }
          });
        }
      });
    });
  }

  lodash.each(computedProps, (computedItem, computedkey) => {
    computedModel[computedkey] = (model) => eval5(computedItem, {
      MODEL(path, defaultVal) {
        return lodash.get(model, path, defaultVal);
      },
      ...lodash,
      A: App,
    });
  });

  return {
    model: obj,
    detect,
    computedModel,
  };
}

export function useModelHandler({ parts }) {
  function getPath(pathArr = []) {
    let path = '';
    pathArr.forEach((item, index) => {
      if (index < 1) {
        path = item;
      } else {
        path = `${path}[${item}]`;
      }
    });
    return path;
  }

  function onSetProp(pathArr, e) {
    const path = getPath(pathArr);
    // console.log('onSetProp', path, e);
    lodash.set(parts, path, e.detail);
  }

  function onAdd(pathArr, e) {
    const path = getPath(pathArr);
    const arr = lodash.get(parts, path);
    arr.push({});
  }

  function onDel(pathArr, index, e) {
    const path = getPath(pathArr);
    const arr = lodash.get(parts, path);
    arr.splice(index, 1);
  }

  return {
    onSetProp,
    onAdd,
    onDel,
  };
}
