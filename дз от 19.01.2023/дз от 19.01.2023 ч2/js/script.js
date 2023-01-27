// Завершите функцию getYear, чтобы она возвращала
// параметр searchYear, если он найден в массиве. В противном случае
//  она должна вернуть undefined.
/**
 * @param {number[]} years
 * @param {number} searchYear
 */
const getYear = (years, searchYear) => {
  return years.includes(searchYear) ? searchYear : undefined;
};

// Sample usage - do not modify
getYear([2019, 2020, 2021], 2020); // 2020
getYear([2019, 2020, 2021], 1990); // undefined
