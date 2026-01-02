const temperature = 41;

// if (temperature === 41) {
//     console.log("less than 50");
    
// } else {
//     console.log("temperature is greater than 50");
    
// }
// console.log("execute");

const balance = 1000
// this is not good approch
// if(balance > 500) console.log("test"), console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");

// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 1000) {
//     console.log("less than 1000");
    
// } else {
//     console.log("less than 1200");
    
// }

// const userLoggedIn = true
// const debitCard = true
// const googleLogin = true
// const emailLogin = true

// if (userLoggedIn && debitCard) {
//     console.log("Allow to buy course");
    
// }

// if (googleLogin || emailLogin) {
//     console.log("user logged in");
    
// }

// if we not use break, all code will execute afther that case accept default case
// const month = "march"

// switch (month) {
//     case "jan":
//         console.log("jan");
//         break;

//     case "feb":
//         console.log("feb");
//         break;

//     case "march":
//         console.log("march");
//         break;

//     case "april":
//         console.log("april");
//         break;

//     default:
//         console.log("enter valid month");
        
//         break;
// }


const userEmail = []

if (userEmail) {
    console.log("Got user email"); 
} else {
    console.log("Don't have user email"); 
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN  

// truthy values

// "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0) {
    console.log("Array is empty");    
     
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
    
}

// Nullish Coalescing Operator  (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

console.log(val1);

// Terniary Operator

//  condition ? true : false

const iceCreamPrice = 100
iceCreamPrice >=80 ? console.log("greater than 80") : console.log("less than 80");


