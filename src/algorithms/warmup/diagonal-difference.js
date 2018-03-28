/*
Solution for HackerRank > Algorithms > Warmup > Diagonal Difference
https://www.hackerrank.com/challenges/simple-array-sum/diagonal-difference
See explanation in Russian at https://www.coursera.org/learn/algoritmizacija-vychislenij/lecture/zinYi/opriedielieniie-indieksov-eliemientov-matritsy-raspolozhiennykh-na-nad-i-pod
*/

(function solve(n, matrix) {
  const diagonals = [0, 0];

  for (let i = 1; i < n + 1; i += 1) {
    diagonals[0] += matrix[i - 1][i - 1]; // sum across the primary diagonal
    diagonals[1] += matrix[i - 1][n - i]; // sum across the secondary diagonal
  }

  return Math.abs(diagonals[1] - diagonals[0]); // difference (absolute value)
})(3, [[11, 2, 4], [4, 5, 6], [10, 8, -12]]);

/*
// convert array into square matrix (ECMAScript 6 style)
// (3, [11, 2, 4, 4, 5, 6, 10, 8, -12]) ==> (3, [[11, 2, 4], [4, 5, 6], [10, 8, -12]])
const matrix = ar.reduce(
  (rows, key, index) => (index % n === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows,
  []
);
*/
