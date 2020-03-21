function get(name: string) {
  const v = window.localStorage.getItem(name);
  try {
    return v ? JSON.parse(v) : null;
  } catch (e) {
    window.console.error(e);
    return null;
  }
}

function set(name: string, value: any) {
  window.localStorage.setItem(name, JSON.stringify(value));
}

function remove(name: string) {
  window.localStorage.removeItem(name);
}

export default { get, set, remove };
