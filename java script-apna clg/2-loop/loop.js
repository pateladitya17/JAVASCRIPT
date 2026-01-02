// console.log("jay mataji");

// for(let i = 1; i<=5; i++){
//     console.log("jay ganesha")
// }

// calculate sum of 1 to 5
// let sum = 0;
// let num = prompt("enter any number");
// console.log(num);
// for(let i=1; i<=num; i++){
//     sum+=i;
// }
// console.log("sum = ",sum);

// for(let i=1; i<=5; i++){
//     console.log("i = ",i);
// }

// while loop

// let i = 1;
// while(i <= 10){
// console.log("Har Har Mahadev");
// i++;
// }

// do while loop

// let i = 20;
// do{
//     console.log("i = ",i);
//     i++;
// }while(i<=10);

// for of loop

// let str = "aditya patel"
// let size = 0;
// for(let val of str){
//     console.log("val = ",val);
//     size++;
// }
// console.log("string size = ",size);

// for in loop

// let student = {
//     name : "aditya patel",
//     age : 19,
//     cgpa : 8.5,
//     ispas : true,
// };

// for(let key in student){
//     console.log("key = ",key, "value =", student[key]);
// }

// prectice

// print all even numbers from 0 to 100.
// let i = 0;
// while(i <= 100){
//     if(i%2 === 0){
//         console.log("even number = ",i);

//     }
//     i++;
// }

// create a random game number. ask the user to keep guessing the number until the user enters correct value.
// let gameNum = 25;

// let userNum = prompt("guess the game number");
// console.log(userNum);

// while(userNum != gameNum){
//     userNum = prompt("you entered wrong number. guess again : ")
// }
// console.log("congratulations, you entered the right number");

// strings
// let str = "ganeshdeva";

// console.log(str.length);
// console.log(str[3]);

// Template literals
// let specialString = `this is template literal ${1+2+3}`;
// console.log(specialString);

// let obj = {
//     item: "pen",
//     price: 10,
// };

// let output = `the cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);

// console.log("the cost of", obj.item, "is", obj.price, "rupees");

// string method

// let str = "aditya patel   "
// str = str.toUpperCase();
// console.log(str);

// let newStr = str.toLowerCase();
// console.log(newStr);

// let secStr = str.trim();
// console.log(secStr);

// let firstStr = str.slice(5 , 9);
// console.log(firstStr);

// let str1 = "patel";
// let str2 = "aditya";

// console.log(str1.concat(str2));
// console.log(str1 +" "+ str2);

// console.log(str2.replace("a", "k"));
// console.log(str2.replaceAll("a", "k"));
// console.log(str1.charAt(3));

// practice
// we add @ in starting and name length in ending of name which one given by user.

let fullName = prompt("enter your name");
console.log(fullName);

let userName ="@" + fullName + fullName.length;
console.log("your userNAme is ",userName);


let A = "i love coding";
let New = "";
let value = A.indexOf("love");
console.log(value);
if (value !== -1) {
   New =  A.slice(value, A.lastIndexOf("love"));
    console.log(New);
}

let B ="apple"
 console.log(B.repeat(3));  // appleappleapple

