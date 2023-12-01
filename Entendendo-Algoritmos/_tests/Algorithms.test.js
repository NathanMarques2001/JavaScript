const Algorithms = require("../Algorithms");

test("Busca Binaria - Deve encontrar as posicoes corretas", () => {
  const list = [1, 5, 8, 9, 11, 13, 17, 23, 33, 42];

  expect(Algorithms.BinarySearch(list, -1)).toBe(-1);
  expect(Algorithms.BinarySearch(list, 5)).toBe(1);
});

test("Ordenacao por Selecao - Deve deixar o array ordenado", () => {
  const list = [5, 17, 23, 8, 42, 13, 1, 9, 33, 11];

  expect(Algorithms.SelectionSort(list)).toEqual([1, 5, 8, 9, 11, 13, 17, 23, 33, 42]);
});

// test("Quick Sort - Deve deixar o array ordenado", () => {
//   const list = [5, 3, 6, 2, 10];

//   expect(Algorithms.QuickSort(list)).toEqual([2, 3, 5, 6, 10]);
// });