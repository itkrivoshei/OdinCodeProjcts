export function fibsRec(n: number): number[] {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const arr = fibsRec(n - 1);

  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);

  return arr;
}
