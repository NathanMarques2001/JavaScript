function dijkstra(graph, costs, parents) {
  let processed = [];
  let node = findLowestCostNode(costs, processed);

  while (node !== null) {
    const cost = costs[node];
    const neighbors = graph[node];
    Object.keys(neighbors).forEach(function (currentNeighbor) {
      const currentCost = cost + neighbors[currentNeighbor];
      if (costs[currentNeighbor] > currentCost) {
        costs[currentNeighbor] = currentCost;
        parents[currentNeighbor] = node;
      }
    });
    processed.push(node);

    node = findLowestCostNode(costs, processed);
  }

  return buildPath(parents);
}

function findLowestCostNode(costs, processed) {
  let lowestCost = Infinity;
  let lowestCostNode = null;

  for (let node in costs) {
    const cost = costs[node];
    if (cost < lowestCost && processed.indexOf(node) === -1) {
      lowestCost = cost;
      lowestCostNode = node;
    }
  }
  return lowestCostNode;
}

function buildPath(parents) {
  const path = ["fim"];
  let current = parents["fim"];
  while (current !== "inicio") {
    path.unshift(current);
    current = parents[current];
  }
  path.unshift("inicio");

  return path;
}

module.exports = dijkstra;