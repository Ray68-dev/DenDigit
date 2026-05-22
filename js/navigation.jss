import {
  GRAPH_NODES,
  GRAPH_EDGES
} from './graph.js';

function distance(a, b) {

  const dx = a.lat - b.lat;
  const dy = a.lng - b.lng;

  return Math.sqrt(dx * dx + dy * dy);
}

export function findNearestNode(lat, lng) {

  let nearest = null;
  let minDist = Infinity;

  GRAPH_NODES.forEach(node => {

    const d = distance(
      { lat, lng },
      node
    );

    if(d < minDist) {
      minDist = d;
      nearest = node;
    }

  });

  return nearest;
}

export function buildAdjacencyList() {

  const graph = {};

  GRAPH_NODES.forEach(node => {
    graph[node.id] = [];
  });

  GRAPH_EDGES.forEach(edge => {

    const [a, b] = edge;

    graph[a].push(b);
    graph[b].push(a);

  });

  return graph;
}

export function bfs(startId, endId) {

  const graph = buildAdjacencyList();

  const queue = [[startId]];

  const visited = new Set();

  while(queue.length > 0) {

    const path = queue.shift();

    const node = path[path.length - 1];

    if(node === endId) {
      return path;
    }

    if(!visited.has(node)) {

      visited.add(node);

      graph[node].forEach(neighbor => {

        const newPath = [...path, neighbor];

        queue.push(newPath);

      });

    }

  }

  return null;
}