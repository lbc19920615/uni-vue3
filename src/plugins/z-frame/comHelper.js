import get from 'lodash/get';

function findPathsToKey(options) {
  const results = [];

  (function findKey({
    key,
    obj,
    pathToKey,
  }) {
    const oldPath = `${pathToKey ? `${pathToKey}.` : ''}`;
    // eslint-disable-next-line no-prototype-builtins
    if (typeof obj === 'object' && obj.hasOwnProperty(key)) {
      results.push(`${oldPath}${key}`);
      // return;
    }

    if (obj !== null && typeof obj === 'object' && !Array.isArray(obj)) {
      // eslint-disable-next-line no-restricted-syntax
      for (const k in obj) {
        // eslint-disable-next-line no-prototype-builtins
        if (obj.hasOwnProperty(k)) {
          if (Array.isArray(obj[k])) {
            // eslint-disable-next-line no-plusplus
            for (let j = 0; j < obj[k].length; j++) {
              findKey({
                obj: obj[k][j],
                key,
                pathToKey: `${oldPath}${k}[${j}]`,
              });
            }
          }

          if (obj[k] !== null && typeof obj[k] === 'object') {
            findKey({
              key,
              pathToKey: `${oldPath}${k}`,
            });
          }
        }
      }
    }
  }(options));

  return results;
}

/**
 * 自动赋值
 * @param obj
 * @param key
 * @param base
 * @param computedVal
 */
export function autoVal({
  obj, key, base, computedVal = function () {},
} = {}) {
  const paths = findPathsToKey({ obj, key });
  // console.log(obj, key, paths);

  // eslint-disable-next-line no-plusplus
  for (let k = 0; k < paths.length; k++) {
    let target;
    let p = paths[k].replace(key, '');
    if (p.endsWith('.')) {
      p = p.slice(0, -1);
    }
    if (p.trim() === '') {
      target = base;
    } else {
      target = get(base, p);
    }
    target[key] = computedVal(key);
  }
}
