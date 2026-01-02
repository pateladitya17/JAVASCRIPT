// spread

let arr = [1, 2, 3, 4, 5, 6, 7];

Math.min(...arr)  // 1
Math.max(...arr)  // 7

console.log(...arr);      // 1 2 3 4 5 6 7
console.log(..."aditya");   // a d i t y a

let newArr = [...arr];  // [1,2,3,4,5,6,7]
let chars = [..."hello"]; // ['h','e','l','l','o']

let mix = [...newArr, ...chars];

const data = {
    name: "aadi",
    age: 21,
};

const dataCopy = {...data, id: 123}  // same as a data object and added property

// we spred array and string in object in this case index is become its key
let obj1 = {..."hello"}


// rest -> in this given multiple arguments are become collection and act as array

function sum(...args) {
    return args.reduce((add, el) => add + el);
}
sum(1,2,3);  // 6

// we pass msg also in argument but before ...args
function min(msg, ...args) {
    console.log(msg);
    return args.reduce((min, el) =>{
        if(min > el ) {
           return el;
        } else {
            return min;
        }
    });
}
min(10, 1, 3, 5, 6, 6)   // msg = 10 and min = 1


// Destructuring
  
let names = ["tony", "bruce", "petter", "steve"];
let [winner, runnerup, ...others] = names;
// winner = tony , runnersup = bruce, others is array with rest of names

// destructuring in object
 
const student = {
    name : "aadi",
    age: 21,
    class : 11,
    username: "aadi@123",
    password: "abcd",
};

let {username, password} = student;
// we have username's value in username variable and password's value in password variable

let {age: old, class: std, city = "mehsana"} = student;
// we have age's value in old variable and class's value in std variable

// we also add value which are not in object like city
// but city is exits then value is which in in object