function fibs(n: number): number[] {
  if (n < 2) return n === 0 ? [] : [0];

  const result: number[] = [0, 1];

  for (let i = 2; i < n; i++) result.push(result[i - 1] + result[i - 2]);

  return result;
}

console.log(fibs(21));
