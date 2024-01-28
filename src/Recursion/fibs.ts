export function fibs(n: number): number[] {
  if (n <= 0) return [];
  if (n === 1) return [0];

  const result: number[] = [0, 1];

  for (let i = 2; i < n; i++) result.push(result[i - 1] + result[i - 2]);

  return result;
}
