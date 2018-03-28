/*
Solution for HackerRank > Algorithms > Warmup > Simple Array Sum
https://www.hackerrank.com/challenges/simple-array-sum/
*/

(function solve(n, ar) {
  return ar.reduce((a, b) => a + b);
})(6, [1, 2, 3, 4, 10, 11]);
