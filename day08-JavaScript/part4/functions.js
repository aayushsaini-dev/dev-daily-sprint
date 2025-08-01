//1.
function makeTea(typeOfTea){
    return `making ${typeOfTea}`
}
let greet = makeTea("green tea");
// console.log(greet);

//2.
function orderTea(teaType){
    function confirmOrder(){
        return `order confirmed for chai`
    }
    return confirmOrder()
}
let ordeconfirmation = orderTea("chai")
console.log(ordeconfirmation);

//3. arrow function
const calculateTotal = (price, quantity) => {
    return price*quantity
}
let totalCost = calculateTotal(399,47650)
console.log(totalCost);

//4. a function taking another function as a parameter
function makeTea(typeofTea){
    console.log( `makeTea: ${typeofTea}`);
}
function processTeaOrder(fn){
    return fn('earl grey')
}

let order = processTeaOrder(makeTea)
// console.log(order);

//5.
function createTeaMaker(){
    return function(teaType){
        return `Making ${teaType}`;
    }
}
let teaMaker = createTeaMaker()
console.log(teaMaker("green tea"));





