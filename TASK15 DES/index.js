
let myNumbers = [1, 2, 3, 4, 5];

// Write Your Destructuring Assignment Here

[a, , , , e] = myNumbers;

console.log(a * e); // 5

console.log("*********************");

let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

// Write Your Destructuring Assignment Here
[a, b, c, [d, e, [f, g]]] = mySkills;

console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// // My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel

console.log("*********************");



let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

// Play With Arrays To Prepare For Destructuring
let arr4 = arr1.concat(arr2, arr3);
console.log(arr4);
let arr5 = arr4.reverse();
console.log(arr5);
// Write Your Destructuring Assignment Here
// ['Mahmoud', 'Shady', 'Haytham', 'Amir', 'Gamal', 'Mohamed', 'Sayed', 'Sameh', 'Ahmed']
 [B, A , , , , , , , C] = arr5;

 console.log(`My Best Friends: ${A}, ${B}, ${C}`);

// My Best Friends: Shady, Mahmoud, Ahmed

console.log("*********************");


const member = {
    age: 30,
    working: false,
    country: "Egypt",
    hobbies: ["Reading", "Swimming", "Programming"],
  };
  
  // Write Your Destructuring Assignment Here
    let  aA = member.age;
      w  = member.working;
      cc = member.country; 
      h1 = member.hobbies[0]; 
      h3 = member.hobbies[2]; 
          //  ({aA , w} = member);
  
  console.log(`My Age Is ${aA} And Iam ${w ? "" : "Not"} Working`);
  // My Age Is 30 And Iam Not Working
  
  console.log(`I Live in ${cc}`);
  // I Live in Egypt
  
  console.log(`My Hobbies: ${h1} And ${h3}`);
  // My Hobbies: Reading And Programming


  console.log("*********************");