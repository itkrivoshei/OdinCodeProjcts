import { fibsRec } from '../fibsRec';

describe('fibsRec', () => {
  it('should return an empty array when n is 0', () => {
    expect(fibsRec(0)).toEqual([]);
  });

  it('should return [0] when n is 1', () => {
    expect(fibsRec(1)).toEqual([0]);
  });

  it('should return the first two Fibonacci numbers when n is 2', () => {
    expect(fibsRec(2)).toEqual([0, 1]);
  });

  it('should return the first five Fibonacci numbers when n is 5', () => {
    expect(fibsRec(5)).toEqual([0, 1, 1, 2, 3]);
  });

  it('should handle negative numbers by returning an empty array', () => {
    expect(fibsRec(-1)).toEqual([]);
  });

  it('should calculate the first 10 Fibonacci numbers correctly', () => {
    expect(fibsRec(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  });

  it('should calculate large Fibonacci numbers within reasonable time', () => {
    const start = performance.now();
    const result = fibsRec(50);
    const duration = performance.now() - start;

    expect(result.length).toBe(50);
    expect(duration).toBeLessThan(1000);
  });
});
