export function sleep(timeout: number) {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export function isPlainObject(obj: any) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

export function isEmpty(obj: any) {
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

export function isNil(value: any) {
  return value === undefined || value === null;
}

export function or(value, def) {
  return isNil(value) ? def : value;
}
