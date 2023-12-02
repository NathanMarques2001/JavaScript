const binarySearch = require("../Algorithms/BinarySearch");
test("Busca Binaria - Deve encontrar as posicoes corretas", () => {

  const list = [1, 5, 8, 9, 11, 13, 17, 23, 33, 42];

  expect(binarySearch(list, -1)).toBe(-1);
  expect(binarySearch(list, 5)).toBe(1);
});

const selectionSort = require("../Algorithms/SelectionSort");
test("Ordenacao por Selecao - Deve deixar o array ordenado", () => {

  const list = [5, 17, 23, 8, 42, 13, 1, 9, 33, 11];

  expect(selectionSort(list)).toEqual([1, 5, 8, 9, 11, 13, 17, 23, 33, 42]);
});

// const selectionSort = require("../Algorithms/QuickSort");
// test("Quick Sort - Deve deixar o array ordenado", () => {
//   const list = [5, 3, 6, 2, 10];

//   expect(Algorithms.QuickSort(list)).toEqual([2, 3, 5, 6, 10]);
// });

const BFS = require("../Algorithms/BreadthFirstSearch");
test("Busca em Largura - Deve encontrar o vendedor de mangas na rede", () => {

  const graph = new Map();
  graph.set("Nathan", ["Yasmin", "Bryan"]);
  graph.set("Yasmin", ["Alice"]);
  graph.set("Bryan", ["Daniel"]);
  graph.set("Alice", ["Gabriel"]);
  graph.set("Daniel", ["Juliana -m"]);
  graph.set("Gabriel", []);
  graph.set("Juliana -m", []);

  expect(BFS(graph, "Nathan")).toBeTruthy();
});

test("Busca em Largura - Não deve ter vendedores de mangas na rede", () => {

  const graph = new Map();
  graph.set("Nathan", ["Yasmin", "Bryan"]);
  graph.set("Yasmin", ["Alice"]);
  graph.set("Bryan", ["Daniel"]);
  graph.set("Alice", ["Gabriel"]);
  graph.set("Daniel", ["Juliana"]);
  graph.set("Gabriel", []);
  graph.set("Juliana", []);

  expect(BFS(graph, "Nathan")).toBeFalsy();
});