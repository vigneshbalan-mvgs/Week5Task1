// let variable 
let x = 1;
{   
  console.log(x); 
  x = 2;
}
console.log(x); 

// var variable 


var carName;
carName = "Volvo";
console.log(carName); 
function myFunction() {
    console.log(carName);
    var carName = "Volvo";
  }
myFunction();
  


// cosnt variable 
const PI = 3.14159;
// result will be error 
PI = 3.14; 