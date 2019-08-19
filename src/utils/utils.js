
import { Platform } from 'react-native';
import moment from 'moment';

/**
 * redux缓存
 */
export const reduxStore = {
  dispatch: () => {},
  getState: () => {},
};

/**
 * 文本超出显示...
 * @param {*} text
 */
export const CheckText = (text) => {
  const len = text.length;
  if(len < 15) {
    return text;
  }
  return `${text.substring(0, 20)}...`;
}

/**
 * 数字转换
 * @param {*} num
 */
export const CheckNum = (num) => {
  if(num < 10000) {
    return num;
  }
  if(num < 100000000) {
    return `${Math.floor(num/10000)}万`;
  }
  return `${Math.floor(num/100000000)}亿`;
}

/**
 * 时间转hh:mm:ss
 * @param {毫秒} second
 */
export const formatTime = (second) => {
  second = second / 1000;
  let h = 0,
    i = 0,
    s = parseInt(second);
  if (s > 60) {
    i = parseInt(s / 60);
    s = parseInt(s % 60);
  }
  // 补零
  let zero = function(v) {
    return v >> 0 < 10 ? "0" + v : v;
  };
  console.log([zero(h), zero(i), zero(s)].join(":"));
  if(s === 60) {
    s = 0;
    i = i + 1;
  }
  if(second <= 3600) {
    return [zero(i), zero(s)].join(":");
  }
  if(i === 60) {
    i = 0;
    h = h + 1;
  }
  h = parseInt(s % 60 % 60);
  return [zero(h), zero(i), zero(s)].join(":");
}

export const isAndroid = () => Platform.OS === 'android';

export const isIOS = () => Platform.OS === 'ios';
