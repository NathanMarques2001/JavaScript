function Sum(vet) {
  if (vet.length != 0) {
    return vet.shift() + Sum(vet);
  }

  return 0;
}

module.exports = Sum;