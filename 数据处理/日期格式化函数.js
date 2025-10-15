function formatDate(date, formatStr = "yyyy-MM-dd") {
  const map = {
    yyyy: date.getFullYear(),
    MM: date.getMonth() + 1,
    dd: date.getDate(),
  };

  return formatStr.replace(/yyyy|MM|dd/g, (key) => map[key]);
}
