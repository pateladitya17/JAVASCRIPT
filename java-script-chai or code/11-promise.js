const promiseOne = new Promise(function(resolve, reject) {
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function() {
        console.log('Async task is complete');
        resolve()  
    }, 1000)
})

promiseOne.then(function() {
    console.log('promise consumed');
})


new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('Async task 2');
        resolve()
    }, 1000);
}).then(() => {
    console.log('Async 2 resolved');
    
})

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve({username: "chai", email: "chai@example.com"})
    }, 1000);
})

promiseThree.then((user) => {
    console.log(user);
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(function() {
        let error = true;
        if (!error) {
            resolve({username: "'hitesh", passwoed: "1234"})
        } else {
            reject('ERROR: sothing went wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username;

}).then((username) => {
    console.log(username);
    
}).catch(function(error) {
    console.log(error);
    
}).finally(() => console.log('The promise is either resolved or rejected'))



const promiseFive = new Promise(function(resolve,reject) {
    setTimeout(function() {
        let error = true;
        if (!error) {
            resolve({username: "javascript", passwoed: "1234"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

async function consumePromiseFive() {
    try { 
        const response = await promiseFive;
        console.log(response);  
    } catch (error) {
        console.log(error);     
    }
}

consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary');
//         const data =  await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log(error);  
//     }
// }

// getAllUsers();


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))