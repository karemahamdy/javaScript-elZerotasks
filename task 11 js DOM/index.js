let one = document.querySelector("#elzero");
let two = document.querySelector(".element");
let three = document.querySelector("[name = 'js']");
let four = document.querySelector("div");
let five = document.querySelectorAll("#elzero");
let six = document.querySelectorAll(".element");
let seven = document.querySelectorAll("[name = 'js']");
let eight = document.querySelectorAll("div");
let nine = document.getElementById("elzero");
let ten = document.getElementsByClassName("element");
let eleven = document.getElementsByTagName("div");
let twelve = document.getElementsByName("js");
let thirteen = document.body.firstElementChild;
let fourteen = document.body.children[0];
let fifteen = document.body.childNodes[1];
 
console.log(one);
console.log(two);
console.log(three);
console.log(four);
console.log(five[0]);
console.log(six[0]);
console.log(seven[0]);
console.log(eight[0]);
console.log(nine);
console.log(ten[0]);
console.log(eleven[0]);
console.log(twelve[0]);
console.log(thirteen);
console.log(fourteen);
console.log(fifteen);

/* ####################################### */

// let myLogo = document.images;

// for(i = 0; i < myLogo.length; i++){
//     myLogo[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
//     myLogo[i].alt = "Elzero Logo";

// }

/* ####################################### */

let input = document.querySelector("input");
let result = document.getElementsByClassName("result")[0];

input.oninput = function(){
    result.innerHTML = `${input.value} USD Dollar = ${(input.value * 15.6).toFixed(2)} Egyptian Pound`
}

/* ####################################### */

let One = document.querySelector(".one");
let Two = document.querySelector(".two");

One.title = One.className;
Two.title = Two.className;
One.textContent = One.className;
Two.textContent = `${Two.className} ${`2`}`;

/* ####################################### */

let image = document.querySelectorAll("img");

for(i = 0; i < image.length; i++){
    if(image[i].hasAttribute("alt")){
        image[i].alt = "old";
        
    }else{
        image[i].alt = "Elzero New";
    }
}





