function underlineToCamel(name) {
  return name.replace(/_(\w)/g, (c1, c2) => c2.toUpperCase());
}

function camelToUnderline(name) {
  return name.replace(/[A-Z]/g, (c) => "_" + c.toLowerCase());
}

console.log(underlineToCamel("is_my_name"));
console.log(camelToUnderline("isMyName"));
