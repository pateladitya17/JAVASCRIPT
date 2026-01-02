// console.log("Har Har Mahadev!");
// const accountId = 12345
// let accountName = "aadii"
// accountCity = "mehsana"

// console.table([accountId, accountName, accountCity]);


// let a = 9

// console.log(typeof(a));
// console.log(++a);
// console.log(a);

// let inString = String(a)
// console.log(inString);
// console.log(typeof inString);

// let isLoged = false
// console.log(Number(isLoged));  // 0

// let b = null
// console.log(typeof b);   // object
// console.log(Number(b));  // 0

// let c = undefined
// console.log(typeof c);   // undefined
// console.log(Number(c));  // NaN

// let str1 = "aadi"
// let str2 = "weds"
// let str3 = "aayusha"

// let str4 = str1 + " "+ str2 +" " + str3

// console.log(str4);

// console.log(+true); // 1
// console.log(+"");   // 0


// ++++++++++++++++++++ NUMBERS +++++++++++++++++++++++++

// const score = 400
// console.log(score);


// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString()); //converted into string
// console.log(balance.toFixed(2));

// const otherNumber = 23.46323
// console.log(otherNumber.toPrecision(3));

// const hundreds = 1000000
// console.log(hundreds.toLocaleString());


// +++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-3));
// console.log(Math.round(3.7));
// console.log(Math.ceil(3.7));
// console.log(Math.floor(3.7));
// console.log(Math.min(3, 7, 5, 8, 11));
// console.log(Math.max(3, 7, 5, 8, 11));

// console.log(Math.random());
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);

// const min = 10
// const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1)) + min) 


// ++++++++++++++++++++++++ Dates ++++++++++++++++++++++++++

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2006, 2, 3)
// let myCreatedDate = new Date(2006, 2, 3, 5, 3)
// let myCreatedDate = new Date("2025-01-17")
let myCreatedDate = new Date("01-17-2025")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// time in seconds or minutes or hours or days or years
// console.log(Math.floor(((((Date.now()/1000)/60)/60)/24)/365));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

console.log(newDate.toLocaleString('default', {
    weekday: "long"
}));
