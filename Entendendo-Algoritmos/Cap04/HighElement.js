function highElement(vet) {

  if (vet.length != 0) {
    const current = vet.shift();
    const next = highElement(vet);
    return current > next ? current : next;
  }

  return 0;
}

module.exports = highElement;