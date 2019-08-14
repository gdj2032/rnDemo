
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
  if(len < 20) {
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
