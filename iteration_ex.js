
// 1. factors
// Write a method factors that prints out all the factors of a given number.

function factors(num){
  factors = [];

  for (var factor = 1; factor <= num; factor ++)
  if (num % factor === 0){
    factors.push(factor);
  }
  return factors;
}

// console.log(factors(15));
//

// 2. bubbleSort
// Your version can modify the original array.

Array.prototype.bubbleSort = function (){
  let isSorted = false; // sorted variable equal to false; this is just to define the boolean variable

  while(!isSorted){ // until sorted variable is true, this code will run
    isSorted = true;

    for (var i = 0; i < this.length; i++){
      if (this[i] > this[i+1]){ // if it never enters this if statement, isSorted will stay true
        let earlierNum = this[i];
        this[i] = this[i + 1];
        this[i + 1] = earlierNum;

        isSorted = false; // sorted variable is now set to FALSE, so loop will run again.
      }
    }
  }
  return this;
}

// console.log([2,5,6,3,8].bubbleSort());

// 3. substrings

//Write a method substrings that will take a String and return an array containing each of its substrings.
// Don't repeat substrings. Example output: substrings("cat") => ["c", "ca", "cat", "a", "at", "t"].

String.prototype.subStrings = function(){
  const substringArray = [];

  for (var i = 0; i < this.length; i++){
    for (var j = i; j < this.length; j++){
      let substring = this.slice(i,j+1);
      if (!substringArray.includes(substring)){
        substringArray.push(substring);
      }
    }
  }
  return substringArray;
}

console.log("abc".subStrings());
