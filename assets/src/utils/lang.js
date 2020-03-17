export function sleep(timeout) {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

export function isEmpty(obj) {
  if (!obj) {
    return true;
  }
  if (Array.isArray(obj)) {
    return obj.length === 0;
  }
  if (isPlainObject(obj)) {
    return Object.keys(obj).length === 0;
  }
  return false;
}
