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