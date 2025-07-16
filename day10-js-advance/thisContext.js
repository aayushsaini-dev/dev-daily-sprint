const person = {
    name: "Aayush",
    greet(){
        console.log(`Hi, I am ${this.name}`);
        
    },
};

person.greet();
const greetFunction = person.greet;
greetFunction();

// we need to bind the context
const boundGreet = person.greet.bind({name: "John"});
boundGreet();