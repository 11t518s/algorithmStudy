'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  // Write your code here
  const plusArr = [];
  const minusArr = [];
  const zeroArr = [];
  arr.map((arrItem) => {
    if (arrItem > 0) {
      plusArr.push(arrItem);
    } else if (arrItem < 0) {
      minusArr.push(arrItem);
    } else {
      zeroArr.push(arrItem);
    }
  });
  console.log((plusArr.length / arr.length).toFixed(6));
  console.log((minusArr.length / arr.length).toFixed(6));
  console.log((zeroArr.length / arr.length).toFixed(6));
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map((arrTemp) => parseInt(arrTemp, 10));

  plusMinus(arr);
}
