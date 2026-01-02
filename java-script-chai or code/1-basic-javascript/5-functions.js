// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2) {
    // let result = num1 + num2
    // return result
    return num1 + num2
}

const Result = addTwoNumbers(5, 6)

// console.log("Result: ", Result);

function loginUser(username) {
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUser('aadii'));


function loginUser2(username = "sam") {
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUser2());


function calculateCartPrice(...num1) {
    return num1
}
console.log(calculateCartPrice(200, 300, 400, 1000));

function calculateCartPrice2(val1, val2, ...num1) {
    return num1
}
console.log(calculateCartPrice2(200, 300, 400, 1000));

const user = {
    username: "aadii",
    price: 299
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`);
}

handleObject(user)
handleObject({
    username: "aayusha",
    price: 199
})

const myArray = [200, 700, 100, 300]

function returnArray(getArray) {
    return getArray[3]
}

console.log(returnArray(myArray));
console.log(returnArray([200, 375, 543, 3535]));


