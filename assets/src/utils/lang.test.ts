import { sleep, isPlainObject, isEmpty } from './lang';


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

