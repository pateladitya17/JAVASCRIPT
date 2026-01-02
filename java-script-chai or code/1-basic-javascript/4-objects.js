// singleton
// object.create

// object literals

const mySym = Symbol("key1")

const user = {
    name: "aadii",
    "full name": "aditya patel",
    age:18,
    [mySym]: "mykey1",
    location: "mahesana",
    email: "aaddii@123gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}

console.log(user.email);
console.log(user["email"]);
console.log(user["full name"]);
console.log(user[mySym]);

// user.email = "aadi123@chatgpt.com"
// Object.freeze(user)
// user.email = "aadii123@microsoft.com"

// console.log(user);

user.greeting = function() {
    console.log("Hello user");
}

user.greeting2 = function() {
    console.log(`hello user, ${this["full name"]}`);
}

console.log(user.greeting());
console.log(user.greeting2());




// const tinderUser = new object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const instaUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "aadii",
            lastname: "patel"
        }
    }
}

console.log(instaUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = {obj1, obj2, obj3}
// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4);

users = [
    {
        id: 1,
        email: "a@gmail.com"

    },
    {
        id: 2,
        email: "a@gmail.com"

    },
    {
        id: 3,
        email: "a@gmail.com"

    }
]

console.log(users[1].id)
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // in form of array 

console.log(tinderUser.hasOwnProperty("isLogged"));  

const course = {
    coursename: "js course",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);  
console.log(instructor);  







