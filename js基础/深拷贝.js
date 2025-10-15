function cloneDeep(obj, map = new Map()) {
  // 只考虑基本类型、数组、普通对象，不考虑函数、map、set、Date、RegExp等特殊对象
  // 解决循环引用问题，避免一直递归下去
  // 这里使用WeakMap没有用；只有当WeakMap的生命周期长于它所引用的对象时，才能发挥作用，经典例子是缓存；
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  if (map.has(obj)) {
    return map.get(obj);
  }
  const newObj = Array.isArray(obj) ? [] : {};
  map.set(obj, newObj);
  Object.keys(obj).forEach((key) => {
    newObj[key] = cloneDeep(obj[key], map);
  });
  return newObj;
}

// weakmap发挥作用的例子
const cache = new WeakMap();

function getUserProfile(userId) {
  // 检查缓存
  const cachedProfile = cache.get(userId); // 假设 userId 是一个对象
  if (cachedProfile) {
    console.log("Cache hit!");
    return cachedProfile;
  }

  console.log("Cache miss! Fetching from database...");
  const profile = fetchFromDatabase(userId);

  // 缓存结果
  cache.set(userId, profile);
  return profile;
}

// --- 场景1：对象仍然存活 ---
let user1 = { id: 1, name: "Alice" };
const profile1 = getUserProfile(user1); // Cache miss (第一次)
const profile2 = getUserProfile(user1); // Cache hit! (第二次，命中缓存)

user1 = null; // 显式释放 user1 的引用

// --- 场景2：对象已被 GC ---
// 假设此时 GC 运行，回收了 user1 对象
// 现在，即使我们想再次用 user1 获取 profile，也做不到，因为 user1 已经没了

// 但我们可能会创建一个新用户
let user2 = { id: 1, name: "Alice" }; // 一个新的对象，内容相同但地址不同
const profile3 = getUserProfile(user2); // Cache miss! (缓存未命中)
