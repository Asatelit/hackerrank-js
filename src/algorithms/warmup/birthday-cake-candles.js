/*
Solution for HackerRank > Algorithms > Warmup > Birthday Cake Candles
https://www.hackerrank.com/challenges/mini-max-sum/
*/

(function solve(n, ar) {
  const target = Math.max(...ar); // get the height of tallest candle
  console.log(ar.filter(element => element === target).length); // Output
})(4, [3, 2, 1, 3]);
