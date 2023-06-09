const variacoes = require('./index');

test('Variações', () => {
  expect(variacoes(4, [1, 2])).toBe(3);
  expect(variacoes(10, [5, 2, 3])).toBe(4);
  expect(variacoes(11, [5, 7])).toBe(0);

  // Testes adicionais pessoais
  expect(variacoes(6, [1, 2])).toBe(4);
  expect(variacoes(6, [1, 2, 3])).toBe(7);
  expect(variacoes(8, [1, 2])).toBe(5);
  expect(variacoes(8, [1, 2, 3])).toBe(10);
});
