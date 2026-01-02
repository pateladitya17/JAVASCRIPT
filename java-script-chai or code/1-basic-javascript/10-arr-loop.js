// for of loop

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
      
}

const greetings = "hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
     
}

// map are show only unique values
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India")

// console.log(map);

for (const [key, value] of map) {
    // console.log(`${key} is key of ${value}`); 
}

// const myObject = {
//     'game1': 'NFS',
//     'game2': 'GTA-5',
//     'game3': 'free-fire'
// }
// object is not iterable this way

// for (const [key, value] of myObject) {
//     console.log(`${key} is key of ${value}`);
    
// }


// for in loop

const myObject2 = {
    'js': 'javascript',
    'cpp': 'c++',
    'rb': 'ruby'
}

for (const key in myObject2) {
    // console.log(`${key} is shortcut of ${myObject2[key]}`);
    
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
    
}

// IN for in loop map not iterable


// for each loop

const coding = ["js", "ruby", "java", "phthon", "cpp"]

// coding.forEach( function (val) {
//     console.log(val);
// })

// coding.forEach( (item) => {
//     console.log(item); 
// })

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
    
// })

const myCoding = [
    {
        langName: "javascript",
        langFile: "js"
    },
    {
        langName: "java",
        langFile: "java"
    },
    {
        langName: "python",
        langFile: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.langName);
    
})