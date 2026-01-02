function one() {
    const username = "hitesh"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);  this is not in the scope

    two()
    
}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);  this is out of scope
}
// console.log(username);    this is out of scope


// ++++++++++++++++++++++ interesting +++++++++++++++++++


console.log(addOne(6))
function addOne(num) {
    return num + 1
}

// here we store function in the veriable so we not call function before its veriable

// addTwo()
// const addTwo = function (num) {
//     return num + 2
// }



