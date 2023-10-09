// objects

const person = {
    name: "Vignesh Balan M",
    age: 20,
    occupation: "FrontEnd Devloper"
  };  
console.log(person.name); 
console.log(person.age); 
console.log(person.occupation); 
  
person.hobby = "Anime";
console.log(person.hobby); 
delete person.occupation;
console.log(person.occupation); 
  


// prototype 
function Person(name, age) {
   this.name = name;
   this.age = age;
}
  
Person.prototype.greet = function() {
   console.log(`Hello, my name is ${this.name} and  i'am ${this.age} years old.`);
};
const johnDoe = new Person("Vignesh balan M", 20); 
johnDoe.greet(); 