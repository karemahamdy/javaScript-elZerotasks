console.log(100 == "100"); // true
console.log(typeof (100) == typeof (1000)); // true
console.log(110 !== 100 !== 10 !== 20); // true
console.log(-10 == "-10"); // true
console.log(typeof -50 ==  typeof +"-40"); // true
console.log(!(10 >= -"-40")); // true
console.log(!("10" === 10)); // true
 console.log( 20 >= false); // true

 let num1 = 10;
let num2 = 20;

console.log(num1 !== num2); // true
console.log(num1 < num2); // true
console.log(num2 > num1); // true
console.log(num2 >= num1); // true
console.log(typeof num1 == typeof num2); // true
console.log(!(num1 == num2)); // true

let a = 20;
let b = 30;
let c = 10;

console.log(a < b && a > c || a != b); // true
console.log(a != b > a > c); // true
console.log(!(a == b) && !(a > b) && !(a < c) && !(a == c)); // true

// Test Case 1
//let num = 9;  "009"
let num = 110;
if (num < 10){
console.log(`00${num}`);
}
else if (num > 10 && num < 100){
    console.log(`0${num}`);
}
else{
    console.log(`${num}`);
}

console.log("****************");

let nUm = 9;
let str = "9";
let str2 = "20";

// Output
// "{num1} Is The Same Value As {str}"
// "{num1} Is The Same Value As {str} But Not The Same Type"
// "{num1} Is Not The Same Value Or The Same Type As {str2}"
// "{str} Is The Same Type As {str2} But Not The Same Value"
if (nUm == str){
 console.log("{num1} Is The Same Value As {str}");
}
if (nUm== str && nUm !== str){
    console.log("{num1} Is The Same Value As {str} But Not The Same Type");
}
if (nUm != str2 && nUm !== str2){
    console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
}
if(str != str2 && typeof str == typeof str2){
    console.log("{str} Is The Same Type As {str2} But Not The Same Value");
}
console.log("*****************");

let NUM = 10;
let NUM1= 30;
let NUM2= "30";

// Needed Output
"30 Is Larger Than 10 And Type string Not The Same Type As number"
"30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
"{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"

if (+NUM2 > NUM && typeof NUM2 !== typeof NUM){
    console.log("30 Is Larger Than 10 And Type string Not The Same Type As number");
}
else if(+NUM2 > NUM && NUM2 == NUM1){
    console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number");   
}
else if(NUM2 !== NUM && NUM2 !== NUM1 ){
    console.log("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}");   
}
else{
    console.log("not exist")
}

console.log("*****************");

// Edit What You Want Here

let numm1 = 30;
let numm2 = 9;
let num3 = 30;
let num4 = 72;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (numm1 > numm2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2


if (numm1 > numm2 && numm1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3


if (numm1 > numm2 && numm1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((numm1 + numm2) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((numm1 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((numm1 + numm2 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4 - (numm1 + num3) + numm2 === 21) {
  console.log("True");
} else {
  console.log("False");
}

console.log("*****************");

let day = "   friday   ";

switch(day.trim().charAt(0).toUpperCase() + day.trim().slice(1)){
case "Friday":
case "Saturday":
case "Sunday":
console.log("No Appointments Available");
break;
case "Monday":
case "Thursday":
console.log("From 10:00 AM To 5:00 PM");
break;
case "Tuesday" :
console.log("From 10:00 AM To 6:00 PM");
break;
case "Wednesday":
console.log("From 10:00 AM To 7:00 PM");
break;
default:
  console.log("Its Not A Valid Day");
}