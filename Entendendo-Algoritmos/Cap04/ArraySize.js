function arraySize(vet) {

  if (vet.length != 0) {
    vet.shift();
    return 1 + arraySize(vet);
  }

  return 0;
}

module.exports = arraySize;