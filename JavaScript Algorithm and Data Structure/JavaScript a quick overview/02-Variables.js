
let num = 1; // {1}
num = 3; // {2}

let price = 1.5; // {3}
let myName = 'Packt'; // {4}
let trueValue = true; // {5}
let nullVar = null; // {6}
let und; // {7}

console.log('num: ' + num);
console.log('myName: ' + myName);
console.log('trueValue: ' + trueValue);
console.log('price: ' + price);
console.log('nullVar: ' + nullVar);
console.log('und: ' + und);

// ******* Variable Scope

let myVariable = 'global';
let myOtherVariable = 'global';

function myFunction() {
  return "local";
}

function myOtherFunction() {
  myOtherVariable = 'local';
  return myOtherVariable;
}

console.log(myVariable); //{1}
console.log(myFunction()); //{2}

console.log(myOtherVariable); //{3}
console.log(myOtherFunction()); //{4}
console.log(myOtherVariable); //{5}