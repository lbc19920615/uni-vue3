import _JSON5 from 'json5';

import * as _time from './time';

export * as lodash from 'lodash';
export const JSON5 = _JSON5;

export {
  diff, addedDiff, deletedDiff, updatedDiff, detailedDiff,
} from 'deep-object-diff';

/**
 * Time类
 * @type {{formatDateTime?: function(Date, string=): *}}
 */
export const Time = _time;
