/*
Solution for HackerRank > Algorithms > Warmup > Mini-Max Sum
https://www.hackerrank.com/challenges/mini-max-sum/
*/

(function solve(arr) {
  const sums = arr.map((element, index) => {
    const option = arr.slice(); // clone array
    option.splice(index, 1); // everything except index
    return option.reduce((a, b) => a + b); // calculate the following sum
  });

  // Output
  console.log(`${Math.min(...sums)} ${Math.max(...sums)}`);
})([1, 2, 3, 4, 5]);
