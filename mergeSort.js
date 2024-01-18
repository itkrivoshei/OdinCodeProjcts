function mergeSort(arr) {
  if (arr.length < 2) return arr;

  const middle = Math.floor(arr.length / 2);

  return merge(mergeSort(arr.slice(0, middle)), mergeSort(arr.slice(middle)));
}

function merge(left, right) {
  const result = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    result.push(left[i] < right[j] ? left[i++] : right[j++]);
  }

  return result.concat(left.slice(i), right.slice(j));
}

console.log(mergeSort([3, 2, 1, 105, 79, 100, 110, 8, 5, 0, 1]));
