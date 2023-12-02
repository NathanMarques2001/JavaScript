function selectionSort(vet) {
  let auxVet = [];
  const vetSize = vet.length;
  let index = 0;

  for (let i = 0; i < vetSize; i++) {
    index = selectSmaller(vet);
    auxVet.push(vet[index]);
    vet.splice(index, 1);
  }

  return auxVet;
}

function selectSmaller(vet) {
  let aux = vet[0];
  let index = 0;

  for (let i = 0; i < vet.length; i++) {
    if (vet[i] < aux) {
      aux = vet[i];
      index = i;
    }
  }

  return index;
}

module.exports = selectionSort;