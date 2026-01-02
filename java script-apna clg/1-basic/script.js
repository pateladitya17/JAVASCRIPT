// console.log("hello world");
// console.log("aditya patel");

// age = 24;
// console.log(age);

// a = "jay ganesh";
// console.log(a);
// isfollow = false;
// console.log(isfollow);
// a  = 23;
// console.log(a);

// let name =" aditya patel";
// console.log(name);

// let price = 245;
// console.log(price);

// price = 68;
// console.log(price);

// const PI = 3.14;
// console.log(PI);

// let b;
// console.log(b);


// {
//     let a = 12;
//     console.log(a);
// }
// {
//     let a = 24;
//     console.log(a);
// }


// let age = 25;

// let price = 104.55;

// let name = "jio mart";

// isLike = true;



// let x = BigInt("123");
// let y = Symbol("hello");


// create object
const student = {
    fullName : "aditya patel",
    age : 19,
    cgpa : 8.8,
    isPass : true,
};

console.log(student.age);

student.skills = "JavaScript"; // add skills property
 

student.age = 23;

student.fullName = "aadi";


const ballPan = {
    productName : "parker pen",
    rating : 4,
    isDeal : true,
    price : [270, 300, 350]
};

let a = 4;
let b = 3;

console.log("a =",a ,"& b =",b);
console.log("a - b =",a-b);
console.log("a + b =", a+b);
console.log("a**b =",a**b);

console.log(++a);

console.log(b+=4);
console.log("a == b", a==b);

console.log(a);
console.log(b);

console.log("a <= b", !(a<=b));

console.log(b==a || a<=b);


let mode = "dark";
let color;

if (mode === "dark") {
    color = "black";
}

else if(mode === "blue") {
    color = "blue";
}

else {
    color = "white";
}

console.log(color);

let age = 2;

let result = age >= 18 ? "adult" : "not adult";

console.log(result);

let marks = 67;

marks >= 33 ? console.log("pass") : console.log("fail");


// let num = prompt("enter the number");
// console.log(num);

// if(num % 5 === 0){
//     console.log(num, "is multiple of 5");
// }
// else{
//     console.log(num, "not multiple of 5");
// }


let per = prompt("enter your marks");
console.log(per);
let grade;

if(per<=100 && per >= 80){
    grade = "A";
}
else if(per<80 && per>=70){
    grade = "B";
}
else if(per<70 && per>=60){
    grade = "C";
}
else if(per<60 && per>=50){
    grade = "D";
}
else if(per<50 && per>=0){
    grade = "F";
}

console.log("your grade is ",grade);


// object of object
const users = {
    aditya : {
        fullName : "aditya patel",
        age : 19,
        skills : ["html", "css", "js"],
    },
    jay : {
        fullName : "jay ganesh",
        age : 20,
        skills : ["python", "java", "c++"],
    },
    ram : {
        fullName : "ram singh",
        age : 21,
        skills : ["c", "c#", "ruby"],
    },
};
      users.aditya.skills[2]  // access like this


    //   array of object
    const usersArray = [
        {
            fullName : "aditya patel",
            age : 19,
            skills : ["html", "css", "js"],
        },
        {
            fullName : "jay ganesh",
            age : 20,
            skills : ["python", "java", "c++"],
        },
        {
            fullName : "ram singh",
            age : 21,
            skills : ["c", "c#", "ruby"],
        },
    ];

    // access like this
    usersArray[0].skills[2];  // access like this

    // Math object

    Math.abs(-5);  // returns 5
    Math.ceil(4.2);  // returns 5
    Math.floor(4.7);  // returns 4
    Math.random();  // returns a random number between 0 and 1 but 1 is excluded

    let random = Math.floor(Math.random() * 100) + 1; // returns a random integer between 1 and 100

    let random2 = Math.floor(Math.random() * 5) + 1; // returns a random integer between 1 and 5

    let random3 = Math.floor(Math.random() * 5) + 21; // returns a random integer between 21 and 25