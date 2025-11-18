function sortVersions(versions) {
  function compare(a, b) {
    const arr1 = a.split(".");
    const arr2 = b.split(".");
    const maxLen = Math.max(arr1.length, arr2.length);

    for (let i = 0; i < maxLen; i++) {
      const num1 = Number(arr1[i] || "0"),
        num2 = Number(arr2[i] || "0");
      if (num1 !== num2) {
        return num1 - num2;
      }
    }
    return 0;
  }

  versions.sort((a, b) => compare(a, b));
  return versions;
}

const versions = ["1.45.0", "1.5", "6", "3.3.3.3.3.3.3"];
const sorted = ["1.5", "1.45.0", "3.3.3.3", "6"];

console.log(sortVersions(versions));
