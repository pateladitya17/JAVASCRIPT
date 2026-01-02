// asynchronous programing
// console.log("one");
// console.log("two");

// const hello = () => {
//     console.log("hello");
// }
// setTimeout(hello, 3000);

// console.log("three");
// console.log("four");

// callback

function sum(a, b) {
    console.log(a+b);
}

function calculator(a, b, sumcallback) {
    sumcallback(a, b);
}
sum(2,3)
calculator(1, 2, sum);
// or
calculator(1, 2, (a, b) => {
    console.log(a+b);
})

// // callback hell

// function getData(dataId, getNextData) {

//     setTimeout(() => {
//         console.log("data", dataId);
//         if (getNextData) {
//         getNextData();
//         }
//     }, 2000);
// }

// // This is known as a callback hell.

// getData(1, () => {
//     console.log("getting data2 ...");
//     getData(2, () => {
//         console.log("getting data3 ...");
//         getData(3, () => {
//             console.log("getting data4 ...");
//             getData(4);
//         });
//     } );
// });


// // promise
// //This are used t0 solve callback hell problem.

// let promise = new Promise((resolve, reject) => {
//     console.log("I am promise");
//     resolve(123);
//     // reject("error");

// });

// // promise use in this

// function getData(dataId, getNextData) {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log("data", dataId);
//                 resolve("success");
//                 if (getNextData) {
//                 getNextData();
//                 }
//             }, 5000);
//         });
//     }

// // another one promise
// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//             console.log("I am promise");
//             resolve("success");
//             // reject("re");
//         });
// };

// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fulfilled",res);
// });

// promise.catch((err) => {
//     console.log("rejected");
// })


// // promise chaining.

// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success");
//         },4000);
//     });
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("success");
//         },4000);
//     });
// }

// console.log("fetching data1....");
// asyncFunc1().then((res) => {
//     console.log("fetching data2....");
//     asyncFunc2().then ((res) => {});
// });

// function getData(dataId) {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log("data", dataId);
//                 resolve("success");
//             }, 2000);
//         });
//     }

//     // one more promise chain

//     console.log("getting data1 ....");
//     getData(1)
//     .then((res) => {
//         console.log("getting data2 ....");
//         return getData(2);
//     })
//     .then((res) => {
//         console.log("getting data3 ....");
//         return getData(3);
//     })
//     .then((res) => {
//         console.log(res);
//     })


    // // async and await

    // function api() {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             console.log("weather data");
    //             resolve(200);
    //         }, 2000);
    //     });
    // }

    // async function getWeatherData() {
    //     await api(); //1st
    //     await api(); //2nd
    // }
    // getWeatherData();


    // async ans await with...

    function getData(dataId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("data", dataId);
                resolve("success");
            }, 2000);
        });
    }

    async function getAllData() {
        console.log("getting data1....");
        await getData(1);
        console.log("getting data2....");
        await getData(2);
        console.log("getting data3....");
        await getData(3);
        console.log("getting data4....");
        await getData(4);
        console.log("getting data5....");
        await getData(5);
    }


    // IIFE - in this we not need to call getAllData function 

    // means we not to need store async function in amother function and after that call it. 

    (async function () {
        console.log("getting data1....");
        await getData(1);
        console.log("getting data2....");
        await getData(2);
        console.log("getting data3....");
        await getData(3);
        console.log("getting data4....");
        await getData(4);
        console.log("getting data5....");
        await getData(5);
    }) ();


// call Stack 
function one() {
    return 1;
}
function two() {
    return one() + one();
}
function three() {
    let ans = two() + one();  
    console.log(ans);
}