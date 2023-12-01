// Capitulo 4 - Recursividade

const sum = require("../Cap04/Sum");
test("Sum - Deve somar os números de um array recursivamente", () => {
  const myNumbers = [5, 17, 23, 8, 42, 13, 1, 9, 33, 11];

  expect(sum(myNumbers)).toBe(162);
});

const arraySize = require("../Cap04/ArraySize");
test("ArraySize - Deve contar a quantidade de itens do array recursivamente", () => {
  const myNumbers = [5, 17, 23, 8, 42, 13, 1, 9, 33, 11];

  expect(arraySize(myNumbers)).toBe(10);
});

const highElement = require("../Cap04/HighElement");
test("HighElement - Deve buscar o maior item do array recursivamente", () => {
  const myNumbers = [5, 17, 23, 8, 42, 13, 1, 9, 33, 11];

  expect(highElement(myNumbers)).toBe(42);
});