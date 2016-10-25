// Recursion
//
// Warmup
//
// Write a recursive method, range, that takes a start and an end and returns an array of all numbers between.
// If end < start, you can return the empty array.

"use strict"

function range(start, end){
  if (end <= start){
    return [];
  }

  let r = range(start, end - 1);
  console.log(start)
  console.log(end-1)
  console.log('----------')
  r.push(end - 1);

  return r;
}

// console.log(range(3,8));

// Write both a recursive and iterative version of sum of an array.

// sumRec

function sumRec(array){
  if (array.length === 0){
    return 0;
  }

  let lastNum = array[array.length - 1] // last number in array

  return sumRec(array.slice(0, array.length-1)) + lastNum; // sum of array without the last number plus the last num
}

// console.log(sumRec([1,3,4,5]));


// sumIter

function sumIter(array){
  var sum = 0
  array.forEach(function(el){
    sum += el;
});
  return sum
}

// console.log(sumIter([1,2,3,4,5]));



// Exponentiation

// Write two versions of exponent that use two different recursions:

// # recursion 1
// exp(b, 0) = 1
// exp(b, n) = b * exp(b, n - 1)

function simpleExpo(base, exp){
  if (exp === 0){
    return 1;
  }
  return base * simpleExpo(base, exp - 1);
}
//
// console.log(simpleExpo(2,3));

//
// # recursion 2
// exp(b, 0) = 1
// exp(b, 1) = b
// exp(b, n) = exp(b, n / 2) ** 2             [for even n]
// exp(b, n) = b * (exp(b, (n - 1) / 2) ** 2) [for odd n]

// Note that for recursion 2, you will need to square the results of exp(b, n / 2)
// and (exp(b, (n - 1) / 2). Remember that you don't need to do anything special to
//  square a number, just calculate the value and multiply it by itself. So don't
//  cheat and use exponentiation in your solution.

function otherExpo(base, exp){
  if (exp === 0){
    return 1;
  }

  if (exp % 2 === 0){
    return Math.pow((otherExpo(base, exp/2)), 2);
  } else {
    return base * Math.pow((otherExpo(base, (exp-1)/2)), 2);
  }
}

// console.log(otherExpo(3,5));
// console.log(otherExpo(2,4));


// Fibonacci
//
// Write a recursive and an iterative Fibonacci method. The method should take in an integer n and return the first n Fibonacci numbers in an array.
//
// You shouldn't have to pass any arrays between methods; you should be able to do this just passing a single argument for the number of Fibonacci numbers requested.

//1,1,2,3,5,8,13,21

function iterFib(n){
  const fiboNums = [0, 1];
  while (fiboNums.length < n) {
    var nextNum = fiboNums[fiboNums.length -1 ] + fiboNums[fiboNums.length - 2];
    fiboNums.push(nextNum);
  }
  return fiboNums;
}
//
// console.log(iterFib(8));

function recurFib(n){

  if (n === 2){
    return [0,1];
  }

  let fibs = recurFib(n - 1);
  fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);  // adds the last two elements in the array
  return fibs;
}

// console.log(recurFib(8));



// Binary Search
//
// Write a recursive binary search: bsearch(array, target). Note that binary search
// only works on sorted arrays. Make sure to return the location of the found object
//  (or nil if not found!). Hint: you will probably want to use subarrays.
//
// This your first problem which is half a PITA to solve iteratively.


function recurBinary(array, target){

  if (array.length === 0){ // base case - if target is not found
    return -1;
  }
  const midPoint = Math.floor(array.length / 2); // needed otherwise result will be decimal 
;
  const candidate = array[midPoint];

  if (target === candidate){
    return midPoint;
  }
  else if (target < candidate){
    const left = array.slice(0, midPoint);
    return recurBinary(left, target);
  } else {
    const right = array.slice(midPoint + 1) // cuts off all elements before this position
    const result =  recurBinary(right, target);
    return result === -1 ?  -1 : result + (midPoint + 1); // need this line to add the indices
  }
}

console.log(recurBinary([2,3,4,5,6,7], 6));
console.log(recurBinary([2,3,4,5,6,7], 7));
console.log(recurBinary([2,3,4,5,6,7], 8));
console.log(recurBinary([0,1,4,5,6,7], 4));
