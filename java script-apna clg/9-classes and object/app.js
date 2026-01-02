console.log("jay mahakali");

// objects
const employee = {
    calcTax() {
        console.log("tax rate is 10%");
    }
}

const karan = {
    salary: 50000,
}

karan.__proto__ = employee;

// classes

class ToyotaCar {
constructor(brand, mileage) {
    console.log("creating new object");
    this.brand =brand;
    this.mileage = mileage;
}

    start () {
        console.log("start");
    }

    stop () {
        console.log("stop");
    }
}

// create object
let fortuner = new ToyotaCar("fortuner", 10);
console.log(fortuner);
let lexus = new ToyotaCar("lexus", 12);
console.log(lexus);

// Inheritance

class Person {
    constructor(name) {
        this.species = "home sapiens";
        this.name = name;
    }

    eat() {
        console.log("eat");
    }

    sleep() {
        console.log("sleep");
    }

    work() {
        console.log("do nothing");
    }
}

class Engineer extends Person {
constructor(name) {
    super(name);   //to invoke parent class constructor
    
}

    work() {
        super.eat();
        console.log(`solve problems, build something`);
    }
}

let engObj = new Engineer(`aditya`);

// practice

let DATA = `secret information`;

class User {
    constructor(name, email) {
    this.name = name;
    this.email = email;
    }

    viewData() {
        console.log("data = ", DATA);
    }
}

class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }
    editData() {
        DATA = "some new value";
    }
}

let student1 = new User("adi", "adi@email.com");
let student2 = new User("surya", "surya@email.com");

let admin1 = new Admin("admin", "admin@email.com");


// try and catch

let a = 12;
let b = 13;

console.log(`a+b = ${a+b}`);
console.log(`a+b = ${a+b}`);

try {
    console.log(`a+b = ${a+c}`);
} catch(err) {
    console.log(err);
}
console.log(`a+b = ${a+b}`);
console.log(`a+b = ${a+b}`);
console.log(`a+b = ${a+b}`);
console.log(`a+b = ${a+b}`);
console.log(`a+b = ${a+b}`);