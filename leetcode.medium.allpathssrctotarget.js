var allPathsSourceTarget = function(graph) {
  /*
      let paths = []
      buildPaths(graph, 0, paths, graph.length - 1)
      return paths

      buildPaths(graph, idx, paths, target, currPath = [])
          if (graph[idx][graph[idx].length - 1] === "*") return
          currPath.push(idx)
          if (idx === target) {
              paths.push(currPath)
              return
          }
          graph[idx].push("*")
          graph[idx].forEach(el => buildPaths(graph, el, paths, target, currPath))
          graph[idx].pop()
  */
  let paths = []
  buildPaths(graph, 0, paths, graph.length - 1)
  return paths
};

var buildPaths = function(graph, idx, paths, target, currPath = []) {
  currPath.push(idx)
  if (idx === target) {
      paths.push(currPath)
      return
  }
  let lastNode = graph[idx].length - 1
  if (graph[idx][lastNode] && graph[idx][lastNode] === "*") return

  let nodes = [...graph[idx]]
  graph[idx].push("*")
  nodes.forEach(el => buildPaths(graph, el, paths, target, [...currPath]))
  graph[idx].pop()
}
