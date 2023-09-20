/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/


function showDetails (a, b, c){
    for (i=0; i>= showDetails.length; i++){
        if ( typeof a === "string"){
            a = "string";
        }
        else if ( typeof b === "number"){
           b = "number";
    }
        else if (typeof c === "boolean"){
           if( c === true){
            console.log( "the age is available to hire");
           }
           else{
           console.log( "the age isnot available to hire");
           }
        }
  
    }
        console.log(`Hello ${a},Your Age Is ${b}, You Are ${c}`)
    }
showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
