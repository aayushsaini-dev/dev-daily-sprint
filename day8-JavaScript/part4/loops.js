// 1. while loop to write sum of number from 1 to5
let sum = 0;
let i = 0;

while (i <= 5) {
  sum = sum + i;
  i++;
}
//console.log(sum);

// 2.
let countdown = [];
let a = 5;
while (a > 0) {
  countdown.push(a);
  a--;
}
//console.log(countdown);

//3. do while loop in browser due to prompt in it
// let teaCollection =[]
// let tea;
// do{
//     tea = prompt("Enter your favourite tea (type 'stop' to finish)")
//     if(tea != 'stop'){
//         teaCollection.push(tea)
//     }
// } while(tea != 'stop');

//4.
let total = 0;
let b = 1;
do {
  total += b;
  b++;
} while (b <= 3);
console.log(total);

//5. for loop
let array = [2, 4, 6];
let multipledArray = [];
for (let i = 0; i < array.length; i++) {
  multipledArray[i] = 2 * array[i];
}
//console.log(multipledArray);

//6
let arr = ["green tea", "black tea", "chai", "oolong tea"];
let selected = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] != "chai") {
    selected.push(arr[i]);
  } else {
    break; // use break instead of return as return kills all the script of code block space
  }
}
//console.log(selected);
//7
let arr2 = ["londn", "new york", "paris", "berlin"];
let visited = [];
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] === "paris") {
    i++; // we can use continue keyword also
  } 
  visited.push(arr2[i]);
}
//console.log(visited);

//8 for of loop
let teaTypes = ["chai", "green tea", "herbal tea", "black tea"];
let selectedTeas = [];
for (const tea of teaTypes) {
  if (tea === "herbal tea") {
    continue;
  }
  selectedTeas.push(tea);
}
//console.log(selectedTeas)

// 9th how to loop on objects go through it again in 48 min video at 15min
let citiesPopulations = {
  london: 10000,
  paris: 5000,
  berlin: 40000,
  tokyo: 200000,
};
let cityNewpopulation = {};
for (const city in citiesPopulations) {
  // key = value
  if (city === "berlin") {
    break;
  }
  cityNewpopulation[city] = citiesPopulations[city];
}
// console.log(cityNewpopulation);

// 10th for each loop  revise again at 37min in 48 min video
let teas = ["oolong tea", "grren tea", "black tea", "earl grey", "chai"];
let availableTea = [];

teas.forEach((tea) => {
  if (tea === "chai") {
    return; // break and continue doesnt work in functions
  }
  availableTea.push(tea);
});
console.log(availableTea);

//11
let numbers =[2,5,7,9]
let doublenumbers =[]
for(let i=0; i<numbers.length;i++){
    if(numbers[i] == 7){
        i++;
    }
    doublenumbers.push(2*numbers[i])
}
console.log(doublenumbers);

//12
let myteas = ["black tea", "lemon tea","earl grayyyyyyy","chai"]
let shortTeas =[]

for(const tea of myteas){
    if(tea.length > 10){ //.length gives length forstring also same as array
        break;
    }
    shortTeas.push(tea)
}
console.log(shortTeas);

