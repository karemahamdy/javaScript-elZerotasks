let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
// num , alph , 3or4 , :

let reg = /(\d+|\D+)+/g;
console.log(ip.match(reg));
console.log("*******************");



let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let specialreg = /\b(os)\d*o/ig;
console.log(specialNames.match(specialreg));

// Output
// ['Os10O', 'OsO', 'Os100O']

console.log("*******************");

let phone = "+(995)-123 (4567)";
let phonereg = /\+\(\d{3}\)-(\d{3}) \(\d{4}\)/g

console.log(phone.match(phonereg));
console.log("*******************");

let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

console.log("*******************");

let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re1 = /\d{2}\s?-?\s?\/?\d{2}\s?-?\s?\/?\d{2,}/g;

console.log(date1.match(re1)); // "25/10/1982"
console.log(date2.match(re1)); // "25 - 10 - 1982"
console.log(date3.match(re1)); // "25 10 1982"
console.log(date4.match(re1)); // "25 10 82"

console.log("*******************");

let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let re2 = //; // Write Your Pattern Here

console.log(url1.match(re2));
console.log(url2.match(re2));
console.log(url3.match(re2));
console.log(url4.match(re2));
console.log(url5.match(re2));