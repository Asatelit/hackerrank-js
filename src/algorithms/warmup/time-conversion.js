/*
Solution for HackerRank > Algorithms > Warmup > Time Conversion
https://www.hackerrank.com/challenges/time-conversion/
*/

(function timeConversion(s) {
  const date = new Date(`1/1/2000 ${s.slice(0, -2)} ${s.substr(s.length - 2)}`); // convert to a date string
  const leadingZero = num => `0${num}`.slice(-2); // get values with leading zeros

  // Output
  console.log(
    [date.getHours(), date.getMinutes(), date.getSeconds()].map(leadingZero).join(":")
  );
})("07:05:45PM");
