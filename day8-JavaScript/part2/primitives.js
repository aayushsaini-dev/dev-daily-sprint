// Number

let balance = 120;
let anotherBalance = new Number(120); // we can make any primitive data type to objects yet its not recommended

console.log(balance);
console.log(anotherBalance);

console.log(typeof balance);
console.log(typeof anotherBalance);

// null or undefined

let fname;
console.log(fname);
fname = null;
console.log(fname);

// string
let myString = "hello";
let myString1 = "Hola";
let oldGreet = myString + "aayush";
console.log(oldGreet);

let greetMessage = `Hello ${myString1} !`;
let demo1 = `value is ${2 * 2}`;
console.log(greetMessage);
console.log(demo1);

// symbol
let sm1 = Symbol()
let sm2 = Symbol()
console.log(sm1 == sm2) // not same 
console.log(sm1);

