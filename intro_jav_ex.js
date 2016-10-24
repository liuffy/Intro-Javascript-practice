// Remove duplicates
//
// Array has a uniq method that removes duplicates from an array. It returns the unique elements in the order in which they first appeared:
//
// [1, 2, 1, 3, 3].uniq # => [1, 2, 3]
// Write your own uniq method, called my_uniq; it should take in an Array and return a new array.
//
// One special feature of Ruby classes is that they are open; we can add new methods to existing classes. Take the my_uniq method that you just wrote and modify it slightly so that it can be called directly on an array:
//
// class Array
//   def my_uniq
//     # ...
//   end
// end
//

"use strict"

Array.prototype.my_uniq = function (){
  let uniq_arr = [];

  this.forEach(function(el){
    if (!uniq_arr.includes(el)){
    uniq_arr.push(el);
    }
  });
  return uniq_arr;
};

// [3,4,4,5,7,9, 10, 9].my_uniq();

// Two sum
//
// Write a new Array#two_sum method that finds all pairs of positions where the elements at those positions sum to zero.
//
// NB: ordering matters. I want each of the pairs to be sorted smaller index before bigger index. I want the array of pairs to be sorted "dictionary-wise":
//
// [-1, 0, 2, -2, 1].two_sum # => [[0, 4], [2, 3]]

Array.prototype.two_sum = function(){
  let sum_pair_pos = [];

  for (var i = 0; i < this.length; i++){
    for (var j = i + 1; j < this.length; j++){
      if (this[i] + this[j] === 0){
      sum_pair_pos.push([i,j]);
      }
    }
  }
  return sum_pair_pos;
};

// [2,-2,1,-1,3,5,4,5,-4].two_sum();



}
// My Transpose
//
// To represent a matrix, or two-dimensional grid of numbers, we can write an array containing arrays which represent rows:
//
// rows = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8]
//   ]
//
// row1 = rows[0]
// row2 = rows[1]
// row3 = rows[2]
// We could equivalently have stored the matrix as an array of columns:
//
// cols = [
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8]
//   ]
// Write a method, my_transpose, which will convert between the row-oriented and column-oriented representations. You may assume square matrices for simplicity's sake. Usage will look like the following:
//
// my_transpose([
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8]
//   ])
//  # => [[0, 3, 6],
//  #    [1, 4, 7],
//  #    [2, 5, 8]]
