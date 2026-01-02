// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach((item) => {
//     // console.log(item);
//     return item
    
// })
// console.log(values);


// filter

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4)
// console.log(newNums);

// const newNums = myNums.filter( (num) => {
//    return num > 4
// })

// console.log(newNums);

// In for each how this is work
// const newNums = []

// myNums.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums);

  
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNumbers = myNumbers.map( (num) => num + 10)
// const newNumbers = myNumbers.map( (num) => { return num + 10 })

const newNumbers = myNumbers
                        .map( (num) => num * 10)
                        .map( (num) => num + 1)
                        .filter( (num) => num >= 40)

// console.log(newNumbers);  


// reduce

const myArray = [1, 2, 3]

// const myTotal = myArray.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myArray.reduce( (acc, curr) => acc + curr, 0)
// console.log(myTotal);


const shoppingCart = [
     {
        itemName: "js course",
        price: 2999
     },
     {
        itemName: "java course",
        price: 1250
     },
     {
        itemName: "py course",
        price: 4999
     },
     {
        itemName: "data science course",
        price: 12890
     },
]

const totalBill = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(totalBill);
