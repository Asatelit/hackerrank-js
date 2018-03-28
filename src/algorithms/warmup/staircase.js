/*
Solution for HackerRank > Algorithms > Warmup > Staircase
https://www.hackerrank.com/challenges/staircase/
*/

(function solve(n) {
  const arr = Array.from({length: n}, (element, index) =>
    " ".repeat(n - (index + 1)) + "#".repeat(index + 1));

  // Output
  console.log(arr.join("\n"));
})(6);
