function fibs(n) {
  if (n < 2) return n === 0 ? [] : [0];

  const rez = [0, 1];

  for (let i = 2; i < n; i++) rez.push(rez[i - 1] + rez[i - 2]);

  return rez;
}

console.log(fibs(21));
