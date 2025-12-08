function arrToTree(objs) {
  const map = new Map();
  for (let obj of objs) {
    map.set(obj.id, obj);
  }
  const res = [];
  for (let obj of objs) {
    if (obj.pid === null) {
      res.push(obj);
    } else {
      const pObj = map.get(obj.pid);
      if (!pObj.children) {
        pObj.children = [];
      }
      pObj.children.push(obj);
    }
  }
  return res;
}

const objs = [
  { id: 1, pid: null },
  { id: 2, pid: 1 },
  { id: 3, pid: 1 },
  { id: 4, pid: 2 },
  { id: 5, pid: 4 },
  { id: 6, pid: 5 },
  { id: 7, pid: 3 },
  { id: 8, pid: 7 },
];
const res = arrToTree(objs);
console.log(res);
