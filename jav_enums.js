"use strict"

// double_array

Array.prototype.doubleArray = function(){
  const doubleArray = [];
  this.forEach(function(el){
    double_array.push(el*2)
  });
  return double_array;
}
//
// [2,4,5].double_array();

const NUMS = [2,3,4];

// myEach
Array.prototype.myEach = function(func){
  for(let i = 0; i < this.length; i++){
    func(this[i]);
  }
  return this;
}

// NUMS.myEach((num) => {
//   console.log(`Someone's favorite number is ${num}`);
// });


//
// myMap
// => It must use your myEach function.
// => Use a closure.


Array.prototype.myMap = function(func){
  const newArray = [];
  this.myEach(el => newArray.push(func(el)) ); // fat arrow syntax
  return newArray;
}

// NUMS.myMap((num) => {
//   console.log(num*2);
// });

// myInject
// Your inject should take a function.
// As the exercise describes, start the accumulator variable with the first value. Iterate through the rest.
// It must also use your myEach function.
//
// Array.prototype.my_inject = function()


Array.prototype.myInject = function(func){
  let total = this[0]; // start the accumulator variable with the first value

  this.slice(1).myEach(el => total = func(total, el));
  return total;
}

console.log(NUMS.myInject((total, num) => total + num));
