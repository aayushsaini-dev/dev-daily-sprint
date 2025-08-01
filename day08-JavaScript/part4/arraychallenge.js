// 1st challenge

let teaFlavours = ["green tea", "black tea", "oolong tea"];
let firsttea = teaFlavours[0];
//console.log(firsttea);

// 2nd challenge
let cities = new Array("London", "Tokyo", "Paris", "New York");
let favouriteCity = cities[2];

// 3rd challenge
let teaTypes = ["herbal tea", "white tea", "masala chai"];
teaTypes[1] = "jasmine tea";
//console.log(teaTypes);

//4th challenge
let citiesVisited = ["Mumbai", "Sydney"];
citiesVisited.push("Berlin");
//console.log(citiesVisited);

//5th challenge
let teaOrders = ["chai", "iced tea", "earl grey"];
let lastOrder = teaOrders.pop();
//console.log(lastOrder);

//6th challenge
let popularTeas = ["green tea", "oolong tea", "chai"];
let softcopyTeas = popularTeas
//console.log(softcopyTeas);
popularTeas.pop();
//console.log(softcopyTeas);

//7th challenge
let topCities = ["Berlin", "Singapore","New York"];
let hardCopyCities = [...topCities];
topCities.pop()
console.log(hardCopyCities);

// 8th challenge
let europeanCities = ["paris","Rome"]
let asianCities = ["Tokyo", "Bangkok"]
//let worldCities = europeanCities + asianCities; it gives us string
let worldCities = europeanCities.concat(asianCities)
console.log(worldCities);

// 9th challenge
let teaMenu = ["masala chai","oolong tea","green tea","earl tea"]
let menuLength = teaMenu.length
console.log(menuLength);

// 10th challenge
let cityBucketList =["Kyoto","London","Cape Town","Vancouver"]
// for loop doesnt work here as expected
let islondonInList = cityBucketList.includes("London");
console.log(islondonInList);

