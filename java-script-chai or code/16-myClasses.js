// class USer {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword() {
//         return `${this.password}abc`
//     }

//     changeUsername() {
//         return `${this.username.toUpperCase()}`
//     }
// }

// const patel = new USer("patel", "patel@fb.com", "1234");

// console.log(patel.encryptPassword());
// console.log(patel.changeUsername());

// behind the scene

function User(username, email, password) {
    this.username = username;
        this.email = email;
        this.password = password;
}

User.prototype.encryptPassword = function() {
    return `${this.password}abc`
}

User.prototype.changeUsername = function() {
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea", "tea@email.com", "1234");

console.log(tea.encryptPassword());
console.log(tea.changeUsername());

 