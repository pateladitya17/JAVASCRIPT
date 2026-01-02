const user = {
    username: "aditya",
    price: 999,

    welcomeMsg: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this)
        
    }
}

// user.welcomeMsg()  
// user.username = "aayusha"
// user.welcomeMsg()

// console.log(this);


// function chai() {
//     let username = "aadii"
//     console.log(this.username)  // output - undefined
// }

// chai() 

// +++++++++ Arrow function +++++++++++++++++

const chai = () => {
    let username = "aadii"
    console.log(this);
    
}

chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// implicit return
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)  
const addTwo = (num1, num2) => ({username: "hitesh"}) ;

console.log(addTwo(5, 6));

// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`); 
})("aditya")





