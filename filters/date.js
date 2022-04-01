/**
 * Created by wangjianbing on 2017/7/25.
 */

import timeFormat from 'utils/time-format';

export default function (time) {
  return timeFormat.fetch(time, '{YYYY}-{MM}-{DD}')
}
