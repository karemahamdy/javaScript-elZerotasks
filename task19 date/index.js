let datenow = new Date();
let birthdate =  new Date("oct 20 02");
let myday =  datenow - birthdate ;
console.log(datenow);
console.log(`${myday} seconds`);
console.log(myday/1000);




























function* gen(){
    let index=14;
    let num=140;
    let sum= num + index; 
    yield index;
    while(true){ 
    yield  sum;
     sum += num += 200 ;
    }
}

let generator = gen();

console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}

console.log("*".repeat(20));


function* genNumbers() {
    yield* [1, 2, 2, 2, 3, 4, 5];
  }
  function* genLetters() {
    yield* ["A", "B", "B", "B", "C", "D"];
  }
  
  // Write Your Generator Function Here
function* genAll(){
    yield* new Set(genNumbers());
    yield* new Set(genLetters());
}
  
  let generator1 = genAll();
  
  console.log(generator1.next()); // {value: 1, done: false}
  console.log(generator1.next()); // {value: 2, done: false}
  console.log(generator1.next()); // {value: 3, done: false}
  console.log(generator1.next()); // {value: 4, done: false}
  console.log(generator1.next()); // {value: 5, done: false}
  console.log(generator1.next()); // {value: "A", done: false}
  console.log(generator1.next()); // {value: "B", done: false}
  console.log(generator1.next()); // {value: "C", done: false}
  console.log(generator1.next()); // {value: "D", done: false}

  console.log("*".repeat(20));


  // main.js File
  import calc from "./mod-one.js";
import * as modOne from "./mod-two.js";
console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60
