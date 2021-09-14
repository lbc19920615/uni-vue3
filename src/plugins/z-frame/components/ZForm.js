import { reactive, watch, toRaw } from 'vue';
import eval5 from 'eval5';
import { createFormModel } from '@/plugins/z-frame/formModel';
import { diff, JSON5, lodash } from '@/plugins/z-frame';

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

export function initPart(partDef) {
  const partName = partDef.name;
  const rowDef = partDef.def;
  const computedLinks = {
  };
  const reflectMap = new Map();
  const ret = {
  };
  const computed = {};
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
      // console.log('diffed', diffed);
      cachedModel = JSON5.stringify(newObj);
      console.log('watch', newObj, oldObj);
      reflectMap.forEach((arr, reflectMapKey) => {
        const hasDiffedChange = lodash.get(diffed, reflectMapKey);
        if (hasDiffedChange) {
          lodash.each(hasDiffedChange, (svalue, skey) => {
            if (typeof svalue !== 'undefined') {
              const fullPath = `${reflectMapKey}.${skey}`;
              console.log(`${fullPath} changed`, svalue);
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

  return {
    model: obj,
    detect,
  };
}