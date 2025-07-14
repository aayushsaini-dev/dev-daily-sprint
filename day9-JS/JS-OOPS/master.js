//Object
let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,

  start: function () {
    return `${this.make} car got started in ${this.year}`;
  },
};
//console.log(car);
console.log(car.start());

// Constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
}
let aayush = new Person("Aayush saini", 20);
console.log(aayush.age);

// prototypical chain
function Animal(type) {
  this.type = type;
}
Animal.prototype.speak = function () {
  return `${this.type} makes a sound`;
};

let lion = new Animal("Lion");
console.log(lion.speak());

Array.prototype.hitesh = function () {
  return ` custom method ${this}`;
};
let arr = [1, 2, 3];
console.log(arr.hitesh());
let Myarr = [1, 2, 3, 4, 5, 6, 7];
console.log(Myarr.hitesh());

// classes
class Vehical {
  constructor(make, model) {
    // AS soon as function move them in class we call them method
    this.make = make;
    this.model = model;
  }
  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}
// Inheritance
class Car extends Vehical {
  drive() {
    return `${this.make}: This is an inheritence's example`;
  }
}

let myCar = new Car("Mercedes", "S-Class");
console.log(myCar.start());
console.log(myCar.drive());

let veh1 = new Vehical("Toyota", "Corolla");
console.log(veh1);

// Encapsulation
class BankAccount {
  #balance = 0;
  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }
  getBalance() {
    return `$ ${this.#balance}`;
  }
}

let account = new BankAccount();
// console.log(account.#balance);  // can't access this beyond class as balance has private identifier
console.log(account.getBalance());

// Abstraction
class CoffeMachine {
  start() {
    // call DB
    // Filter value
    return `Starting the machine...`;
  }
  brewCoffe() {
    // complex calculation
    return `Brewing coffe`;
  }
  pressStartButton() {
    let msg2 = this.start();
    let msg1 = this.brewCoffe();

    return `${msg2} + ${msg1}`;
  }
}
let myMachine = new CoffeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffe());
console.log(myMachine.pressStartButton());

// Polymorphism
class Bird{
    fly(){
        return `Flying....`
    }
}
class Penguin extends Bird{
    fly(){
        return `Penguins can't fly`;
    }
}
let bird = new Bird();
let penguin = new Penguin();
console.log(bird.fly());
console.log(penguin.fly());

//Static method
 class Calculator{
    static add(a,b){ // static is a special type of method whichcan be called by its own class only no one other can call it
        return a+b
    }
 }
 console.log(Calculator.add(2,3));
 let minicalc = new Calculator();
//  console.log(minicalc.add(2,3));  // we can't as add is a static method

// Getters and setters
class Employee{
    #salary
    constructor(name, salary){
        if(salary < 0){
            throw new Error("Salary cannot be in negative");
        }
        this.name = name
        this._salary = salary
    }
    get salary(){
        return `you are not allowd to see salary`;
    }
    set salary(value){
        if(value<0){
            console.error("invalid salary")
        } else{
            this.#salary = value;
        }
    }
}
let emp = new Employee("Alice", 50000)
console.log(emp.salary);
emp.salary = 60000;

 
 
