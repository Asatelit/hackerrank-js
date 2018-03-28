/*
Solution for HackerRank > Algorithms > Strings > CamelCase
https://www.hackerrank.com/challenges/camelcase/
*/

(function solve(s) {
  const divider = ";";
  const formatted = s
    .split("")
    .reduce(
      (accumulator, currentValue) =>
        currentValue === currentValue.toUpperCase()
          ? accumulator + divider + currentValue
          : accumulator + currentValue
    );

  // Output
  console.log(formatted.split(divider).length); //  print the number of words
})("saveChangesInTheEditor");
