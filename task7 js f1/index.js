function sayHello(theName, theGender) {
    let result;
    if (theGender === "Male"){
       result = "Mr";
    }
    else if (theGender === "Female") {
    
        result = "Mrs";
    }
    // else {
    //     result = ""; 
    // }
    
    
   console.log(`hello ${result} ${theName}`)
  }
  
  // Needed Output
  sayHello("Osama", "Male"); // "Hello Mr Osama"
  sayHello("Eman", "Female"); // "Hello Miss Eman"
  sayHello("Sameh"); // "Hello Sameh"

  console.log("****************");

  function calculate(firstNum, secondNum = " Second Number Not Found", operation) {
    operation = operation || "add" ;
    let result=0;
    switch (operation){
        case "add":
            result= firstNum + secondNum;
            break;
         case "subtract":
            result= firstNum - secondNum;
            break;
        case "multiply":
            result= firstNum * secondNum;       
            break; 
    }
    console.log(result);
  }
  
  // Needed Output
   calculate(20); // Second Number Not Found
calculate(20, 30); // 50
  calculate(20, 30, 'add'); // 50
  calculate(20, 30, 'subtract'); // -10
  calculate(20, 30, 'multiply'); // 600

  console.log("****************");

  function ageInTime(theAge) {
   if (theAge >10 && theAge<100 ){
    day = theAge * 365;
    week = theAge * 7 ;
    month = theAge * 12;
    mun = theAge * 60;
    sec = theAge * 60 *60;
    console.log(`${day} day 
    ${week} week
    ${month} months
     ${mun} mun
     ${sec} sec `);
   } else {
    console.log("Age Out Of Range");
   }
  }
  
  // Needed Output
  ageInTime(110); // Age Out Of Range
  ageInTime(38); // Months Example => 456 Months

  console.log("****************");

// note: The challenge is in another file

  function createSelectBox(startYear, endYear) {
    var selectBox = `<select>`;
    for (var i = startYear; i <= endYear; i++) {
        selectBox += `<option value="${i}">${i}</option>`;
    }
    selectBox += `</select>`;
    document.write(selectBox);
}
createSelectBox(2000, 2021);

console.log("****************");


function multiply(...numbers) {
  var resultOfMultiply = 1;
  for (var i = 0; i < numbers.length; i++) {
      if (typeof numbers[i] === "string") {
          continue;
      } else if (typeof numbers[i] === "number") {
      resultOfMultiply *= Math.floor(numbers[i]);
      }
  }
  console.log(resultOfMultiply);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000