let computer ={cpu: 12};
let lenovo = {
    screen: "fhd",
    __proto__: computer
};
let tomHardware = {}


//console.log(`lenovo`, lenovo.__proto__ );

let genericCar ={tyre:4}

let tesla ={
    driver: "AI"
}
Object.setPrototypeOf(tesla, genericCar)

//console.log(`tesla`, tesla.tyre, tesla); // to get both shown own and  other object property

console.log(`tesla`, Object.getPrototypeOf(tesla));


