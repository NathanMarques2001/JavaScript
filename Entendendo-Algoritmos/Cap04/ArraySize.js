function ArraySize(vet) {

  if (vet.length != 0) {
    vet.shift();
    return 1 + ArraySize(vet);
  }

  return 0;
}

module.exports = ArraySize;