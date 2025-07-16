// closures are function 
// closure are special type of function which retains its memory
function outer(){
    let counter = 4
    return function(){
        counter++;
        return counter
    };
}

let increment = outer();
console.log(increment());
console.log(increment());
console.log(increment());
