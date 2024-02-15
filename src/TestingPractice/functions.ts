export function capitalize(str: string): string {
  if (!str) return str;

  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function reverseString(str: string): string {
  return str.split('').reverse().join('');
}

export const calculator = {
  add: (a: number, b: number): number => a + b,
  subtract: (a: number, b: number): number => a - b,
  multiply: (a: number, b: number): number => a * b,
  divide: (a: number, b: number): number => a / b,
};

export function caesarCipher(str: string, shift: number): string {
  const shiftChar = (char: string, shift: number): string => {
    const code = char.charCodeAt(0);

    if (code >= 65 && code <= 90)
      return String.fromCharCode(((code - 65 + shift) % 26) + 65);
    else if (code >= 97 && code <= 122)
      return String.fromCharCode(((code - 97 + shift) % 26) + 97);

    return char;
  };

  return str
    .split('')
    .map((char) => shiftChar(char, shift))
    .join('');
}

export function analyzeArray(arr: number[]): {
  average: number;
  min: number | undefined;
  max: number | undefined;
  length: number;
} {
  const average =
    arr.length > 0
      ? arr.reduce((acc, curr) => acc + curr, 0) / arr.length
      : NaN;
  const min = arr.length > 0 ? Math.min(...arr) : undefined;
  const max = arr.length > 0 ? Math.max(...arr) : undefined;
  const length = arr.length;

  return { average, min, max, length };
}
