import { sleep, isPlainObject, isEmpty, isNil, or } from './lang';


test('sleep', async() => {
  const now = Date.now();
  await sleep(100);
  const diff = Date.now() - now;
  expect(diff >= 100).toBe(true);
});


test('isPlainObject', () => {
  expect(isPlainObject({})).toBe(true);
  expect(isPlainObject([])).toBe(false);
});


test('isEmpty', () => {
  expect(isEmpty(false)).toBe(true);

  expect(isEmpty('')).toBe(true);
  expect(isEmpty(' ')).toBe(false);

  expect(isEmpty(0)).toBe(true);
  expect(isEmpty(1)).toBe(false);

  expect(isEmpty([])).toBe(true);
  expect(isEmpty([1])).toBe(false);

  expect(isEmpty({})).toBe(true);
  expect(isEmpty({ name: 'foo' })).toBe(false);
});


test('isNil', () => {
  expect(isNil(null)).toBe(true);
  expect(isNil(undefined)).toBe(true);
  expect(isNil(false)).toBe(false);
  expect(isNil(0)).toBe(false);
});


test('or', () => {
  const def = {}
  expect(or(null, def)).toBe(def);
  expect(or(undefined, def)).toBe(def);
  expect(or(false, def)).toBe(false);
  expect(or(0, def)).toBe(0);
  expect(or(123, 456)).toBe(123);
});
