var killProcess = function(pid, ppid, kill) {
  /*
      let hashmap = {}
      loop ppid and add key, array of indexes

      let outputArray = [kill]
      let nextKill = [kill] <--queue
      while(nextKill.length) {
          let next = queue.shift()
          if (hashMap[next]) hashmap[next].forEach(el => nextKill.push(pid[el]))
          outputArr.push(next)
      }
      return outputArray
  */

  let idsMap = {}
  let outputArray = []
  let nextKill = [kill]

  for (let i = 0; i < ppid.length; i++) {
      if (!idsMap[ppid[i]]) idsMap[ppid[i]] = []
      idsMap[ppid[i]].push(i)
  }


  while(nextKill.length) {
      let next = nextKill.shift()
      if (idsMap[next]) idsMap[next].forEach(el => nextKill.push(pid[el]))
      outputArray.push(next)
  }

  return outputArray
};
