function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
     
        return `${zName.slice(0, zName.indexOf(" "))}${zName.substr(zName.indexOf(" "), 2).toUpperCase()}.,`
      
    }
    function ageWithMessage(zAge) {
      return ` Your Age Is ${parseInt(zAge)}`
    }
    console.log(ageWithMessage());

    function countryTwoLetters(zCountry) { 
        return `You Live In ${zCountry}`
     
    }
    console.log(countryTwoLetters());

    function fullDetails() {
     return `Hello ${namePattern()} ${ageWithMessage()} ${countryTwoLetters()}`;
    
    }
    return fullDetails(); // Do Not Edit This
  }
  
  console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
  // Hello Osama M., Your Age Is 38, You Live In EG
  
  console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
  // Hello Ahmed A., Your Age Is 32, You Live In SY

  console.log("*".repeat(20));

  me = () => `Iam A Normal Function`;
  console.log(me());



 urlCreate = (protocol, web, tld) =>
   `${protocol}://www.${web}.${tld}`;
  
  console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

  console.log("*".repeat(20));