const Algorithms = require("../Algorithms");

test("Busca Binaria - Deve encontrar as posicoes corretas", () => {
  const list = [1, 3, 5, 7, 9];

  expect(Algorithms.BinarySearch(list, -1)).toBe(-1);
  expect(Algorithms.BinarySearch(list, 3)).toBe(1);
});

test("Ordenacao por Selecao - Deve deixar o array ordenado", () => {
  const list = [5, 3, 6, 2, 10];

  expect(Algorithms.SelectionSort(list)).toEqual([2, 3, 5, 6, 10]);
});

// test("Quick Sort - Deve deixar o array ordenado", () => {
//   const list = [5, 3, 6, 2, 10];

//   expect(Algorithms.QuickSort(list)).toEqual([2, 3, 5, 6, 10]);
// });