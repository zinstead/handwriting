var compareVersion = function (version1, version2) {
  let i = 0,
    j = 0;
  while (i < version1.length || j < version2.length) {
    let num1 = 0;
    while (i < version1.length && version1[i] !== ".") {
      num1 = num1 * 10 + (version1[i] - "0");
      i++;
    }
    let num2 = 0;
    while (j < version2.length && version2[j] !== ".") {
      num2 = num2 * 10 + (version2[j] - "0");
      j++;
    }
    if (num1 < num2) {
      return -1;
    } else if (num1 > num2) {
      return 1;
    } else {
      i++;
      j++;
    }
  }
  return 0;
};

const versions = ["1.45.0", "1.5", "6", "3.3.3.3.3.3.3"];
const sorted = ["1.5", "1.45.0", "3.3.3.3", "6"];
console.log(versions.sort(compareVersion));
