/*
Solution for HackerRank > Algorithms > Warmup > Compare the Triplets
https://www.hackerrank.com/challenges/compare-the-triplets
*/

(function solve(a0, a1, a2, b0, b1, b2) {
  const aa = [a0, a1, a2];
  const bb = [b0, b1, b2];
  let a = 0;
  let b = 0;

  aa.forEach((element, index) => {
    const ax = aa[index];
    const bx = bb[index];
    if (ax === bx) return; // neither person receives a point
    return ax > bx ? (a += 1) : (b += 1);
  });

  return [a, b];
})(5, 6, 7, 3, 6, 10);
