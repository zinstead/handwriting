function arrToTree(objs) {
  const map = new Map();
  objs.forEach((obj) => {
    map.set(obj.id, obj);
  });
  const res = [];
  objs.forEach((obj) => {
    if (obj.pid === null) {
      res.push(obj);
    } else {
      const p = map.get(obj.pid);
      if (Array.isArray(p.children)) {
        p.children.push(obj);
      } else {
        p.children = [obj];
      }
    }
  });
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
