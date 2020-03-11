import storage from './storage';

test('storage', () => {
  expect(storage.get('perf')).toBe(null);

  storage.set('pref', { width: 220 });
  expect(storage.get('pref')).toEqual({ width: 220 });

  storage.remove('pref');
  expect(storage.get('pref')).toBe(null);
});

test('parse error should return null', () => {
  window.localStorage.setItem('invalid', '{error');
  const fn = jest.spyOn(console, 'error')
    .mockImplementation(e => {
      expect(e).toBeInstanceOf(SyntaxError);
    });
  expect(storage.get('invalid')).toBe(null);
  expect(fn).toBeCalled();
  fn.mockRestore();
});
