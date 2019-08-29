
import { Platform } from 'react-native';
import moment from 'moment';

/**
 * redux缓存
 */
export const reduxStore = {
  dispatch: () => {},
  getState: () => {},
  navigation: () => {},
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

Array.prototype.indexOf = function(val) {
	for (var i = 0; i < this.length; i++) {
		if (this[i] == val) return i;
	}
	return -1;
};

Array.prototype.remove = function(val) {
	var index = this.indexOf(val);
	if (index > -1) {
		this.splice(index, 1);
	}
};

export const isAndroid = () => Platform.OS === 'android';

export const isIOS = () => Platform.OS === 'ios';

/**
 * 获取随机数数组
 * @param {*} max 随机最大数
 * @param {*} needNum 需要随机的数量
 */
export const randomArr = (max, needNum) => {
  let arr = [];//随机数数组
  for(let i = 0; i <= max; i++) {
    if(arr.length === needNum){
      break;
    }
    let nums = parseInt(Math.random()*max);
    if(arr.indexOf(nums) === -1) {
      arr.push(nums);
    } else {
      continue;
    }
  }
  return arr;
};
