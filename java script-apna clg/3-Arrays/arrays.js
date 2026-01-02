console.log(`jay ganesh deva`);

// let marks = [87, 56, 70, 67, 75];
// console.log(marks);
// console.log(marks.length);

let heroes = ["ironman", "hulk", "shaktiman", "spiderman", "batman", "thor"];

// for (let i = 0; i < heroes.length; i++) {
//     console.log(heroes[i]);
// }

// help of for of loop
for (let hero of heroes){
    console.log(hero);
}

let cities = ["mahesana", "ahmdabad", "surat", "patan"];

for (let city of cities) {
    console.log(city.toUpperCase());
}

// practice

let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;

for (let i of marks) {
    sum += i;
}
console.log(`avg marks of class = ${sum/marks.length}`);

// practice
let items = [250, 645, 300, 900, 50];

for (let i = 0; i < items.length; i++) {
    let offer = items[i] / 10;
    items[i] -=  offer;
}
console.log(items);

// Arrays method

let foodItems = ["potato", "apple", "banana", "tomato"];

console.log(foodItems);
foodItems.push("chips", "grapes", "coconut"); // change in orginal array.
console.log(foodItems); 

foodItems.pop();                // change in orginal array.
console.log(foodItems);

console.log(foodItems.toString()); // create new array.

let marvelHeroes = ["ironman", "thor", "hulk"];
let dcHeroes = ["superman", "batman"];
let indianHeroes = ["shaktiman", "krish"];

let herroes = marvelHeroes.concat(dcHeroes, indianHeroes);
console.log(herroes);

marvelHeroes.unshift("'antman");
console.log(marvelHeroes);

dcHeroes.shift();
console.log(dcHeroes);

console.log(marvelHeroes.slice(0,2));

let value = [1, 2, 3, 4, 5, 6, 7, 8];
value.splice(3, 2 ,101, 102, 103);
console.log(value);

// practice

let companies = ["Blomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

companies.shift(); //shift also return deleteed item
console.log(companies);

companies.splice(1, 1, "ola"); // change in original array
console.log(companies);

companies.push("Amazon");
console.log(companies);

let info = ["aditya patel", 19, 8.5, true];

console.log(info[0][0]);
console.log(info[0].length);

// arreay are mutable

let fa = ["apple", "banana", "cherry"];
fa[1] = "blueberry";
console.log(fa);
// ['apple', 'blueberry', 'cherry']

fa[10] = "kiwi";
console.log(fa);
// ['apple', 'blueberry', 'cherry', empty × 7, 'kiwi']

fa.indexOf("banana"); // -1

fa.includes("banana"); // false

fa.reverse(); // ['kiwi', empty × 7, 'cherry', 'blueberry', 'apple']

fa.slice(1, 3); // ['blueberry', 'cherry'] new array copy

// slice(-4) pachhad na chhela 4 elemetn aavi jay

// splice(3) to 3 index thi pachhd na badha delete kari de ane tene return kar

// array reference means address
// jo aapde be arrays ne comapre kariye to false aave kem ke banne na address compare thay
let C = ['a', 'b', 'c'];
let copy = C;
C == copy // true
// banne array in andar same value hase ane manipulate thase value to banne ma same j rese

// const arr = [],  we constant the array and we apply oparation on array but we not assign new arrray to that array

let N = [[1, 2], [3, 4], [5, 6]];

N[0][0] // 1


// arrays loops

let student = [["aadi", 87], ["bhuro", 83.4], ["dhanji", 91]];

for (let i=0; i<student.length; i++) {
    for (let j=0; j<student[i].length; j++) {
        console.log(student[i][j]);
    }
}


for(let stu of student) {
    for(let detail of stu) {
        console.log(detail);
    }
}