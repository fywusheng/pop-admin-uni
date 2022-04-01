/**
 * 工具类
 */
import login from './login'
import genLink from './gen-link'
import getImgFormat from './img-format'
import timeFormat from './time-format'
import bridge from './Bridge'
import Bus from './bus'
import o2s from './o2s'
function toYuan(val) {
  if (val == undefined) {
    return '';
  }
  val = val + '';
  if (val === '') {
    return '';
  }
  val = val.length < 2 ? ('00' + val).slice(-2) : val;
  val = val.replace(/\d{2}$/, '.$&').replace(/\.0+$/, '');
  return val - 0 + '';
}

function fenToYuan(val) {
  if (!parseInt(val) || isNaN(parseInt(val))) {
    return '';
  }
  val = val + '';
  val = val.length < 2 ? ('00' + val).slice(-2) : val;
  val = val.replace(/\d{2}$/, '.$&').replace(/\.0+$/, '');
  return val - 0 + '';
}

function cloneDeep(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function getQuery(opt) {
  let name = '',
    url = '',
    isHash = false;
  if (typeof opt === 'string') {
    name = opt;
  } else if (typeof opt === 'object') {
    name = opt.name;
    url = opt.url;
    isHash = opt.isHash;
  }
  var reg = new RegExp('(^|&|\\?)' + name + '=([^&#]*)(&|#|$)'),
    r = null;
  if (url) {
    if (isHash) {
      url = url.substring(url.indexOf('#') + 1);
      r = url.match(reg);
    } else {
      url = url.substring(url.indexOf('?') + 1);
      r = url.match(reg);
    }
  } else {
    if (isHash) {
      r = window.location.hash.substr(1).match(reg);
    } else {
      r = window.location.search.substr(1).match(reg);
    }
  }
  if (r) {
    return decodeURIComponent(r[ 2 ]);
  }
  return '';
}

export default {
  login,
  toYuan,
  fenToYuan,
  getQuery,
  cloneDeep,
  genLink,
  getImgFormat,
  timeFormat,
  Bus,
  o2s,
  bridge,
}
