/*
Solution for HackerRank > Algorithms > Strings > Super Reduced String
https://www.hackerrank.com/challenges/reduced-string/
*/

(function solve(s) {
  const arr = s.split(""); // convert a string to an array of characters
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i, 2);
      i = -1;
    }
  }

  // Output
  // If the final string is empty, print Empty String
  console.log(arr.length ? arr.join("") : "Empty String");
})("aaabccddd"); // try "baab"

/*
// Alternative solution
(function solve(s) {
  const arr = s.split(""); // convert a string to an array of characters
  const reducer = (accumulator, currentValue) => {
    const prevChar = accumulator.length < 2 ? accumulator : accumulator.substr(accumulator.length - 1); // get last char in string

    return prevChar === currentValue
      ? accumulator.slice(0, -1) // remove duplicate elements
      : accumulator + currentValue;
  };

  let result = "";
  let buffer = arr.reduce(reducer);

  do {
    buffer = result;
    result = arr.reduce(reducer);
  } while (buffer !== result);

  // Output
  console.log(result || "Empty String"); // if the final string is empty, print Empty String
})("aaabccddd"); // try "baab"
*/
