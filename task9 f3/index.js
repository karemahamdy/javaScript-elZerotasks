let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let ele = mix.map(function(n){
  return  !(parseInt(n)) ? n : "" ;
    
}).reduce(function(acc, index){
    return acc+index;
})
console.log(ele);
// Elzero

console.log("***************************");

let myString = "EElllzzzzzzzeroo";

let myarr = myString.split("").filter(function(ele, index){
    return ele != myString[++index];
}).join("");
console.log(myarr)

// Elzero

console.log("***************************");

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let el = numsAndStrings.map(function(e){
    return  (parseInt(e)) ? e : "" ;
  }).filter(function(acc){
    return  (parseInt(acc)) ? acc : "" ;
  }).map(function(l){
    return -l;
  })
console.log(el);
// [-1, -10, 10, 20, -5, -3]

console.log("***************************");

 let myArray = ["E", "l", "z", ["e", "r"], "o"];

// Elzero
let array = myArray.reduce(function(acc,current){
    return acc + current ;
}).split("").map(function(la){
    return la != "," ? la : "";
}).join("")
console.log(array);

console.log("***************************");

let nums = [2, 12, 11, 5, 10, 1, 99];

let newNum = nums.reduce(function(acc, current){
    return current % 2 === 0 ? acc * current : acc + current;
}, 1)

console.log(newNum);

// 500