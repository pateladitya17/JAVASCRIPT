// // array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "nagraj"]

// const myArr2 = new Array(1, 2, 3)
// console.log(myArr[1]);

// // Array methods

// myArr.push(6)
// myArr.pop()
// console.log(myArr);

// myHeros.unshift("krish") // add in start
// myHeros.shift("krish") // remove from start
// console.log(myHeros);

// console.log(myArr.includes(7)); // false
// console.log(myArr.indexOf(19)); // -1

const newArr = myArr.join()

console.log(myArr);
console.log(newArr); // string

// // slice, splice

// console.log("A", myArr);

// // In slice end point not include and main arr not change
// const myn1 = myArr.slice(1, 3)
// console.log(myn1);
// console.log("B", myArr);

// // In splice end point is include and and and main arr is change
// const myn2 = myArr.splice(1, 3)
// console.log(myn2);
// console.log("C", myArr);

const marvelHeros = ["ironman", "thor", "spidderman"]
const dcHeros = ["superman", "flash", "batman"]

// marvelHeros.push(dcHeros)
// console.log(marvelHeros);

allHeros = marvelHeros.concat(dcHeros)
console.log(allHeros);

// spred method
allHeros2 = [...marvelHeros, ...dcHeros]
console.log(allHeros2);

const anotherArray = [1, 2, 3, [4, 5, 6, [7, 4, 8]]]

const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray);


// Is array or not and convert into array

console.log(Array.isArray("aadii"));
console.log(Array.from("aadii"));
console.log(Array.from({name: "aadii"})); // interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2,score3));


















