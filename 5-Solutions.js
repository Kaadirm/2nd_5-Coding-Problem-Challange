/*
------   1   -------

Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

Examples:
1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5

SOLUTION

function isDivisible(n, x, y) {
   return ((n % x) === 0 && (n % y) === 0)
}

------   2   -------

In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.


SOLUTION

function makeNegative(num) {
  if (num <= 0){
    return num
  }
  {
    return num * -1
  }
}

------   3   -------

Find the smallest integer in the array

SOLUTION

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
    
  }
}

------   4   -------

Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

SOLUTION 

var summation = function (num) {
  return (num * (num + 1)) / 2
}

------   5   -------

It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.

SOLUTION

function getAverage(marks){
  let sum = 0
  for (let i = 0; i < marks.length; i++){
    sum += marks[i]
  }
  return Math.floor(sum / marks.length)
}

*/
