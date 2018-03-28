/*
Solution for HackerRank > Algorithms > Strings > Two Character
https://www.hackerrank.com/challenges/two-characters/
*/

(function solve(n, s) {
  const getUnique = arr => [...new Set(arr)]; // return an array of unique values
  const arr = s.split(""); // convert a string to an array of characters
  const unique = getUnique(arr); // get unique chars
  let result = 0; // result, by default is 0

  for (let x of unique) {
    for (let y of unique) {
      if (x !== y) {
        const t = arr.filter(element => element === x || element === y); // get "t"
        if (
          getUnique(t).length === 2 &&
          t.every((element, index) => element !== t[index + 1])
        ) {
          // valid "t" contain only two distinct characters that alternating within the string
          result = t.length > result ? t.length : result;
        }
      }
    }
  }

  // Output
  console.log(result);
})(10, "beabeefeab");
