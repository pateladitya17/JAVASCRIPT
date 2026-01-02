// console.log("jay ambe");

// function myFunction() {
//     console.log("jay ganesha");
// }

// myFunction();


// function myMessage(msg) {  // // parameter
//     console.log(msg);
// }

// myMessage("i love js");  // // argument


// function sum(x, y) {
//     console.log(x + y);
// }
// sum(34, 66);

// function diff(x, y) {
//     d = x - y;
//  return d;
// }

// let val = diff(3, 4);
// let val1 = diff(diff(3, 4), 5);    
// console.log(val);

// // Arrow function

// const arrowSum = (a, b) => {
//     console.log(a + b);
// }

// arrowSum(4, 5);

// const arrowMul = (a, b) => {
//     return a*b;
// }

// console.log(arrowMul(4, 5));

// // practice

function countVowels(str) {
    let count = 0;
    for (const i of str) {
        if (i == "a" || i == "e" || i == "i" || i == "o" || i== "u") {
            count++;
        }
    }
    console.log(count);
}

countVowels("adityaptel");

// // help of Arrow function

const countVow = (str) => {
    let count = 0;
    for (const i of str) {
        if (i == "a" || i == "e" || i == "i" || i == "o" || i== "u") {
            count++;
        }
    }
    console.log(count);
}

countVow("riyapatel");

// // for each loop

//  //this are higher order function/method in which another function are used as a parameter or return as a output.


// let arr = [1, 2, 3, 4, 5, 6, 7];

// arr.forEach((val) => {
//     console.log(val);
// })

// let cities = ["pune", "mumbai", "delhi"];

// cities.forEach((city, idx, cities) => {
//     console.log(city.toUpperCase(), idx, cities);
// })

// // practice

// let nums = [1, 2 ,3, 4, 5];

// nums.forEach((num) => {
//     console.log(num * num);
// })

// // another way of callback function

// let calsquare = (num) => {
//     console.log(num * num);
// }
// nums.forEach(calsquare);

// // more Array methods

// // map is create updated new array

// let number = [33,55,66,77];

// let newArr = number.map((value) => {
//     return value * value;
// })
// console.log(newArr);

// // filter method
// let ar = [1, 2, 3, 4, 5, 6];

// let evenArr = ar.filter((newval) => {
//     return newval % 2 === 0;
// })
// console.log(evenArr);

// every method  like AND
// [2,4,6].every((el) => el%2 == 0);  --- true return 
// [2,4,6,7].every((el) => el%2 == 0);  --- false return 

// some method like OR
// [2,3 ,5,7].some((el) => el%2 == 0);  --- true return 


// // reduce method
// const output = ar.reduce((res, curr) =>  res + curr);

// console.log(output);

// // find largest element in array
// const large = ar.reduce((prev, curr) => {
//     return prev > curr ? prev : curr;
// })
// console.log(large);

// // practice 1

// let marks = [97, 64, 32, 49, 99, 96, 86];

// let toppers = marks.filter((val) => {
//     return val > 90;
// })
// console.log(toppers);

// practice 2

let n = prompt("enter a number");

let arr = [];

for(let i=1; i<=n; i++) {
    arr[i-1] = i;
}

console.log(arr);

let sum = arr.reduce((prev, curr) => {
    return prev + curr;
})
console.log(sum);

let product = arr.reduce((prev, curr) => {
    return prev * curr;
})
console.log(product);

// higher order function
function multipleGreet(func, n) {
    for (let i=1; i<=n; i++) {
        func();
    }
}
let greet = function() {
    console.log("hello");
}

multipleGreet(greet, 2);  // 2 times hello

multipleGreet(function() {console.log("namaste")}, 3);  // 3 times namaste


function oddEvenTest (request) {
    if (request == "odd") {
        return function(n) {
            console.log(!(n%2 == 0));
        }
    }else if (request == "even") {
       return function(n) {
            console.log(n%2 == 0);
        }
    }else {
        console.log("wrong request")
    }
}

oddEvenTest("odd") // this is return odd function defination and we store this function in variable and use it

// methods- functions that are define in object

const calculator = {
    add: function(a, b) {
        return a + b;
    },
    sub: function(a, b) {
        return a - b;
    },
    mul: function(a, b) {
        return a * b;
    }
};

calculator.sum(1,2) // use like this

// another way to write
const calculator1 = {
    add(a, b) {
        return a + b;
    },
    sub(a, b) {
        return a - b;
    },
    mul(a, b) {
        return a * b;
    }
};


// this keyword

const student = {
    name: "aadi",
    age: 23,
    eng: 95,
    math: 93,
    phy: 97,
    getAvg() {
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
}
student.getAvg() // aadi got avg marks = 95


// try and catch

try {
    console.log(s)
} catch (error) {
    console.log("this is error", error);
}


// arrow function

const mum = (a, b) => {
    console.log(a+b); 
}
// if we have single  paramenter we write without ()

// arrow function implicit return

const mul = (a, b) => (
    a*b
);  
// in this we remove return keyword 

// we also write  const mul = (a, b) => a*b

// set timeout and set interval

setTimeout( () => {
    console.log("jay mataji");
}, 4000);

let id = setInterval( () => {
    console.log("jay mataji");
}, 2000);

clearInterval(id) // stop set interval


// this keyword with arrow function
// lexical scope hota hai. usme dekhate hai ki uske parent ka kya scope hai  uske parent ko kis object call lagai


const ss = {
    name: "aadi",
    marks: 95,
    prop: this,  // global scope, window object
    getName: function () {
        console.log(this); // student object
        return this.name  // aadi
    },
    getMarks: () => {
        console.log(this);  // parent's scope -> window
        return this.marks;  // undefined
    },
    getInfo1: function () {
        setTimeout(() => {
            console.log(this);  // student because it check function's object
        }, 2000);
    },
    getInfo2: function () {
        setTimeout(function () {
            console.log(this);  // window because it check settimeout's object
        }, 2000);
    },

};

// in function  if we have two parametter and we pass only one argument then function set second one as a undefined
// we also set default value in parametter so when argument not pass then that value use it
// function sum(a, b=3) {a+b} 
// first argument always assign on fist parameter so default value set for second one 
