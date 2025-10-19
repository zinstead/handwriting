function toTree(objs) {
  const map = {};
  const res = [];
  for (const obj of objs) {
    map[obj.id] = obj;
  }
  for (const obj of objs) {
    if (obj.pid === 0) {
      res.push(obj);
    } else {
      const parent = map[obj.pid];
      if (!parent.children) {
        parent.children = [];
      }
      parent.children.push(obj);
    }
  }
  return res;
}
