
let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getspiderPower: function() {
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.aadii = function() {
    console.log(`aadii is present in all objects`);
}

Array.prototype.heyAadii = function() {
    console.log(`Aadii says hello`);  
}

heroPower.aadii();
myHeros.aadii();
myHeros.heyAadii();
// heroPower.heyAadii();


// inheritance

const User = {
    name: "patel",
    email: "patel@oogle.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntex
Object.setPrototypeOf(TeachingSupport, Teacher);
console.log(Teacher);                                                




let anotherUsername = "PatelAadii     "

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength();
"aayusha".trueLength();
"love".trueLength();

