class Algorithms {
  BinarySearch(vet, number) {
    let begin = 0;
    let end = vet.length;

    while (begin <= end) {
      let mid = ((end + begin) / 2).toFixed(0);
      let currentNumber = vet[mid]
      if (number == currentNumber) {
        return Number(mid);
      }

      if (currentNumber <= number) {
        begin = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return -1;
  }

  SelectionSort(vet) {

    return sort(vet);

    function sort(vet) {
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
  }

  QuickSort(vet) {

  }
}

module.exports = new Algorithms();