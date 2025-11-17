function fn1() {
  const nums = readLine()
    .split(" ")
    .map((item) => Number(item));
  const chars = [];
  for (let i = 0; i < nums.length; i++) {
    const str = String.fromCharCode("a".charCodeAt() + i).repeat(nums[i]);
    chars.push(...str.split(""));
  }
  let small = -1;
  for (let i = chars.length - 1; i > 0; i--) {
    if (chars[i] > chars[i - 1]) {
      small = i - 1;
      break;
    }
  }
  if (small === -1) {
    return "None";
  }
  const temp = chars[small];
  chars[small] = chars[small + 1];
  chars[small + 1] = temp;
  return chars.join("");
}
console.log(fn1());

function fn2() {
  const n = readInt(),
    m = readInt();
  const arr = readLine().split(" ");
  const deps = [];
  for (let i = 0; i < m; i++) {
    deps.push([arr[2 * i], arr[2 * i + 1]]);
  }

  const noPreQueue = [];
  const preCount = new Array(n + 1).fill(0);
  const postMap = new Map();
  for (let [pre, post] of deps) {
    preCount[post]++;
    if (postMap.has(pre)) {
      postMap.get(pre).push(post);
    } else {
      postMap.set(pre, [post]);
    }
  }
  for (let i = 1; i <= n; i++) {
    if (preCount[i] === 0) {
      noPreQueue.push(i);
    }
  }
  let res = 0;
  while (noPreQueue.length) {
    let len = noPreQueue.length;
    while (len--) {
      const pre = noPreQueue.shift();
      const posts = postMap.get(pre) || [];
      for (let post of posts) {
        preCount[post]--;
        if (preCount[post] === 0) {
          noPreQueue.push(post);
        }
      }
    }
    res++;
  }
  return res;
}
console.log(fn2());

function fn3() {
  //   const groupCount = readInt();
  //   const groups = new Array(groupCount);
  //   for (let i = 0; i < groupCount; i++) {
  //     const n = readInt(),
  //       q = readInt();
  //     const water = [];
  //     for (let i = 0; i < n; i++) {
  //       water.push(readInt());
  //     }
  //     const stone = [];
  //     for (let i = 0; i < q; i++) {
  //       stone.push([readInt(), readInt()]);
  //     }
  //     groups[i] = {
  //       n,
  //       q,
  //       water,
  //       stone,
  //     };
  //   }
  const groups = [
    {
      n: 5,
      q: 3,
      water: [-4, -2, 5, 7, 9],
      stone: [
        [7, 3],
        [0, 2],
        [1, 5],
      ],
    },
  ];

  const res = [];
  for (let i = 0; i < groups.length; i++) {
    const { n, water, stone } = groups[i];
    for (let j = 0; j < stone.length; j++) {
      const [val, k] = stone[j];
      const diff = new Array(n).fill(0).map((_, index) => {
        return Math.abs(val - water[index]);
      });
      diff.sort((a, b) => a - b);
      res.push(diff[k - 1]);
    }
  }
  console.log(res);
}

fn3();
