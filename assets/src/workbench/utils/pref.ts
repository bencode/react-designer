import storage from '@/utils/storage';
import { or } from '@/utils/lang';

const key = 'workbench-preference';

function get(name: string, def: any) {
  const cache = storage.get(key) || {};
  return or(cache[name], def);
}

function set(name: string, value: any) {
  const next = {
    ...storage.get(key),
    [name]: value
  };
  storage.set(key, next);
}

export default { get, set };
