// Capitulo 4 - Recursividade

const Sum = require("../Cap04/Sum");
test("Sum - Deve somar os números de um array recursivamente", () => {
  const list = [2, 4, 6];

  expect(Sum(list)).toBe(12);
});

const ArraySize = require("../Cap04/ArraySize");
test("ArraySize - Deve contar a quantidade de itens do array recursivamente", () => {
  const list = [2, 4, 6];

  expect(ArraySize(list)).toBe(3);
});