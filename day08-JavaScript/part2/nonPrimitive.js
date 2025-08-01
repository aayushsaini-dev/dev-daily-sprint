// objects
let username = {
  firstname: "Aayush",
  isLoggedin: true,
  "last name": "saini"
};
console.log(username);
console.log(typeof username);

const fullname ={         // we can change the inner attributes(key) as now const is premitive but inner attribute act as object which we can change
    fname:"hitesh",
    isLoggedin: false,
}
fullname.fname ="Mr. H";
fullname.lastname ="choudhary";
console.log(fullname.fname);
console.log(fullname);
console.log(username['last name']); // way to access the attribute with space

let today = new Date();
console.log(today);
//console.log(today.getDate());

// array
let heroes = ["ironman","caption","thor"];
console.log(heroes);
let anotherUser = ["anjali",true];
console.log(anotherUser[0]);

//. type conversion
console.log(1+'1'); // don't relay on js implicit conversion
let isValue = true;
console.log(isValue + 1);
let a="2abc"
console.log(typeof Number(a));




