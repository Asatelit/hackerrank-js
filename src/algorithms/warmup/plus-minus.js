/*
Solution for HackerRank > Algorithms > Warmup > Plus Minus
https://www.hackerrank.com/challenges/plus-minus/
*/

(function solve(n, arr) {
  const result = { positive: 0, negative: 0, zeroes: 0 };
  const getFraction = key => key / n;

  arr.map(element => {
    const sign = Math.sign(element);
    if (sign === 0) return (result.zeroes += 1); // zero
    return sign > 0
      ? (result.positive += 1) // positive
      : (result.negative += 1); // negative
  });

  // Output
  Object.keys(result).forEach(key => console.log(getFraction(result[key])));
})(6, [-4, 3, -9, 0, 4, 1]);
