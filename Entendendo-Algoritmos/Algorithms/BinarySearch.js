function binarySearch(vet, number) {
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

module.exports = binarySearch;