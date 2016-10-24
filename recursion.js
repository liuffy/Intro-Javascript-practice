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
