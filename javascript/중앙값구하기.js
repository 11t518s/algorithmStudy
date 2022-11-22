function solution(array) {
  const sortedArray = array.sort((prev, curr) => prev - curr);

  return sortedArray[(sortedArray.length - 1) / 2];
}
