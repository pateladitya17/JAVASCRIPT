// number => 2 to power 53
// bigint
// symbol => unique

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");


// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

// console.log("2" === 2);

//  primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; // undefined

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId); //false

// const bigNumber = 249368768483n

// reference (Non primitive)

// Array, Object, Fumctions

const heros = ["shakti", "flesh", "ironman"]
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function() {
    console.log("Hello world");
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive),  Heap (Non-Primitive)

let myname = " aadii";

 let otherName = myname;  //give only copy so not change in real one
 otherName = "aditya";

//  console.log(myname);
//  console.log(otherName);

 let userOne = {
    email: "user@email.com",
    upi: "user@123"
 }

 let userTwo = userOne;  // hear original change

 userTwo.email = "aadii@email.com";
 
//  console.log(userOne.email);
//  console.log(userTwo.email);


 const gameName = new String('patelsir');

//  console.log(gameName[0]);
//  console.log(gameName.__proto__);

//  console.log(gameName.length);
//  console.log(gameName.toUpperCase());
//  console.log(gameName.charAt(2));
//  console.log(gameName.indexOf('s'));

//  const newString = gameName.substring(0, 5)
//  console.log(newString);

//  const otherString = gameName.slice(0, 4);
//  console.log(otherString);
//  const name1 = gameName.slice(-7, 4);
//  console.log(name1);


const newName = "   %20aditya   ";
console.log(newName.trim());

console.log(newName.replace('%20', '-'));

console.log(newName.includes('adi'));

const a = 'patel-aadii-sir'
console.log(a.split('-'));





 
 
 
 
 
 









