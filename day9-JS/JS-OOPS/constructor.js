function Person(name,age){
    this.name = name
    this.age = age
}

function Car(make,model){
    this.make = make
    this.model = model
}
let myCar = new Car("Toyota","Camry");
console.log(myCar);

function Animal(species){
    this.species = species
}
Animal.prototype.sound = function(){
    return `${this.species} makes a Sound`
}

let dog = new Animal("Dog");
console.log(dog.sound());

//
function Drink(name){
    if(!new.target){
        throw new Error("Drink must be called with new keyword");
    }
    this.name = name;
}
let tea = new Drink("chai");
// let coofe = Drink("cold coffe");  we need to call with new keyword a dev developed error for  check some exception
console.log(tea.name);
// console.log(coofe.name);

