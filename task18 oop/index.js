class Car {
    constructor(name, model, price){
    this.n = name;
    this.m = model;
    this.p = price;
    }
    run(){
        return `Car Is running`;
    }
    static stop = function(){
        return `Car Is Stopped`;
    };
  }

let name1 = new Car("jeep","2020","120000");
let name2 = new Car("hunday","2021","150000");
let name3 = new Car("bmw","2023","1800000");
  // Needed Output
  
 console.log(`Car One Name Is ${name1.n} And Model Is ${name1.m } And Price Is ${name1.p}`);
 console.log(name1.run());


 console.log("*************");

 class Phone {
    constructor(name, serial, price) {
      this.name = name;
      this.serial = serial;
      this.price = price;
    }
    
  }
  class Tablet extends Phone{
    constructor(name, serial, price, size){
    super(name, serial, price) ;
    this.size = size || "unknown";
    }
    fullDetails(){
        return ` ${this.name} Serial is ${this.serial} And Size Is ${this.size}`;
    }
    }

  
  
  // Write Tablet Class Here
  
  let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
  let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
  let TabletThree = new Tablet("LG", 250450650, 650);
  
  console.log(`${TabletOne.fullDetails()}`);
  // iPad Serial is 100200300 And Size Is 12.9
  
  console.log(`${TabletTwo.fullDetails()}`);
  // Nokia Serial is 350450650 And Size Is 10.5
  
  console.log(`${TabletThree.fullDetails()}`);
  // LG Serial is 250450650 And Size Is Unknown


  console.log("*************");

// Edit The Class
class User {
    #c;
    constructor(username, card) {
      this.u = username;
      this.#c = card;
    }
    getcard(){
     return this.#c.toString().match(/\d{4}/g).join("-");
    }
    get showData(){
        return `Hello ${this.u} Your Credit Card Number Is ${this.getcard()}`;
    }
}
  let userOne = new User("Osama", "1234-5678-1234-5678");
  let userTwo = new User("Ahmed", "1234567812345678");
  let userThree = new User("Ghareeb", 1234567812345678);
  
  console.log(userOne.showData);
  // Hello Osama Your Credit Card Number Is 1234-5678-1234-5678
  
  console.log(userTwo.showData);
  // Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678
  
  console.log(userThree.showData);
  // Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678
  
  console.log(userOne.c); // Prevent Accessing To Card Property Here
  // Undefined

  console.log("*************");

  String.prototype.addLove = function() {
    return `I Love ${myStr} Web School`;
  }


// Do Not Edit Below
let myStr = "Elzero";
console.log(myStr.addLove()); // I Love Elzero Web School

console.log("*************");


const myObj = {
    username: "Elzero",
    id: 100,
    score: 1000,
    country: "Egypt",
  };
  
  Object.defineProperty( myObj, "score" , {
    writable: false,
    enumereable: true,
    configurable: true,

  });

  Object.defineProperty( myObj, "id" , {
    writable: true,
    enumerable: false,
    configurable: true,
  });
   
  delete myObj.country
  
  myObj.score = 500;
  
  for (let prop in myObj) {
    console.log(`${prop} => ${myObj[prop]}`);
  }
 
  console.log(myObj);
  

