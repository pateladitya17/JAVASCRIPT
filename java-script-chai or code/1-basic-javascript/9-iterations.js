// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element === 5) {
        // console.log(" 5 is best Number");
        
    }
    // console.log(element);
     
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer value: ${i}`);

    for (let j = 1; j <= 10; j++) {
    //   console.log(`${i} * ${j} = ${i*j}`);   
    }                                   
}

let myArray = ["superman", "flash", "batman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);

}

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 11) {
//         console.log(`detected 11`);
//         break
        
//     }
//     console.log(`value of index is ${index}`);
     
// }

for (let index = 1; index <= 20; index++) {
    if (index == 11) {
        // console.log(`detected 11`);
        continue
        
    }
    // console.log(`value of index is ${index}`);
    
    
}


// while loop

// let index = 0
// while (index <= 10) {
//     console.log(`value is ${index}`);
//     index = index + 2
    
// }

// let myArray2 = ["flash", "superman", "batman"]

// let arr = 0
// while (arr < myArray2.length) {
//     console.log(`Value is ${myArray2[arr]}`);
//     arr = arr + 1
       
// }


// do while loop

let score = 11

do {
    console.log(`score is ${score}`);
    score++
    
} while (score <= 10);