import storage from '@/utils/storage';


const key = 'workbench-preference';

function get(name, def) {
  return storage.get(key)?.[name] ?? def;
}

function set(name, value) {
  const next = {
    ...storage.get(key),
    [name]: value
  };
  storage.set(key, next);
}

export default { get, set };
