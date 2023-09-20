// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(100 *1000); // 100000
console.log(Math.round(1000_00.1)); // 100000
console.log(Math.ceil(99999.5)); // 100000
console.log(Math.floor(100_000.4)); // 100000
console.log(parseInt("100000")); // 100000
console.log(Math.trunc(100000.1)); // 100000
console.log(Math.max(10,200,1e5,5)); // 100000
console.log(Math.min(1e5,1e6,1e8)); // 100000
console.log(Math.ceil(99999.567.toFixed(1))); // 100000
console.log(Math.floor(100_000.45.toFixed(1))); // 100000

console.log(- Number.MIN_SAFE_INTEGER); // 9007199254740991
// سرشت عنها وموصلتش الا انها 16 رقم, ف كدا انا محتاجة اجيب حاجة تعد الارقام اللي هنا عشان يطلع 16 ف 
// ن مثلاfor loop// 
// وتطلع الارقام اللي بتعدها بس هو قايل سطر واحد :) 
// فيه جاهزة بس مش عارفة استخدمها 
console.log((Number.MAX_SAFE_INTEGER).length); // 16 undefined leh? :)

let myVar = "100.56789 Views";
console.log(parseInt(myVar)); // 100
console.log(+ parseFloat(myVar).toFixed(2)); // 100.57

let num = 10;
console.log(Number.isInteger(num) + true ); // 2

let flt = 10.4;
console.log(Math.round(flt)); // 10
console.log(Number.parseInt(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.ceil(flt) - true); // 10
console.log(+ flt.toFixed(0)); // 10


console.log(Math.floor(Math.random() *4 )); // 0 || 1 || 2 || 3 || 4

// task2
let userName = "Elzero";
console.log(userName[0].toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.slice(0,1).toLowerCase()); // e
console.log(userName.substring(0,1).toLowerCase()); // e
console.log(userName.substr(0,1).toLowerCase()); // e
console.log(userName.slice(-6, -5).toLocaleLowerCase().repeat(3)); // eee

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE)); // True
console.log(word.endsWith(letterO)); // True