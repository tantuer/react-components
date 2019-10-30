export const randomKey = () => {
  const s = [];
  const hexDigits = '0123456789abcdef';
  for (let i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 16), 1);
  }
  s[0] = 'x';
  s[14] = '4'; // bits 12-15 of the time_hi_and_version field to 0010
  s[8] = s[13] = s[18] = s[23] = '_';
  return s.join('');
};
/**
 * deepCopy 深拷贝
 * @source : 对象或者数组
 * @maxLevel: 最大拷贝的深度
 * @level:当前拷贝深度
 *  */
export const deepCopy = (source, maxLevel, level) => {
  const sourceCopy = source instanceof Array ? [] : {};
  for (let key in source) {
    if (level >= maxLevel) {
      sourceCopy[key] = source[key];
      return;
    }
    if (source[key] instanceof Object) {
      sourceCopy[key] = deepCopy(source[key], maxLevel, level++);
    } else {
      sourceCopy[key] = source[key];
    }
  }
  return sourceCopy;
};
