// assign 1
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;
//  myFriends.length = num;
// Method 1
// console.log( myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];


// assign 2
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.shift();
friends.pop();
console.log(friends); // ["Eman", "Osama"]


// assign 3
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr= arrOne.concat(arrTwo).sort().reverse();
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]


// assign 4
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log( +! Array.isArray(words)); // ZERO


// assign 5
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

if (haystack.includes(needle)) {
    console.log("Found");
}
if (haystack.indexOf(needle)) {
    console.log("Found");
}
if (haystack.lastIndexOf(needle)) {
    console.log("Found");
}

// assign 6
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs = arr1 .concat(arr2).sort().slice(4)
console.log(allArrs.join("").toLowerCase()); // fxy  lowercase


console.log("***********************************");

// let start = 10;
// let end = 100;
// let exclude = 40;

// for(let i=start; i<=end; i+=start){
//     if(i == exclude){
//         continue;
//     }
//     console.log(i);
// }

// let start = 10;
// let end = 0;
// let stop = 3;

// // Output
// for(let i=start; i>=stop; i--){
//     if(i == start){
//         console.log(start);
//     }
//     else
// console.log(`${end}${i}`);
// }

let start = 1;
let end = 6;
let breaker = 2;

// Output
1
-- 2
-- 4
2
-- 2
-- 4
3
-- 2
-- 4
4
-- 2
-- 4
5
-- 2
-- 4
6
-- 2
-- 4