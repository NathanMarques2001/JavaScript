function BFS(graph, me) {
  let queue = [];
  let visited = [];
  queue.push(...graph.get(me));

  while (queue.length !== 0) {
    const current = queue.shift();
    if (!visited.includes(current)) {
      if (current.includes("-m")) {
        return true;
      }
      queue.push(...graph.get(current));
      visited.push(current);
    }
  }
  return false;
}

module.exports = BFS;