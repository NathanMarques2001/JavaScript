function sum(vet) {
  if (vet.length != 0) {
    return vet.shift() + sum(vet);
  }

  return 0;
}

module.exports = sum;