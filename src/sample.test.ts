const add = (a: number, b: number): number => a + b;

describe('sample test', () => {
  test('sample test', () => {
    expect(add(1, 2)).toBe(3);
  });
});
