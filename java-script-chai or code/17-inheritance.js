class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);  
    }
}

const patel = new Teacher("patel", "patel@email.com", "1234");

patel.addCourse()
console.log(patel);

const tea = new User("tea");
tea.logMe();

console.log(patel === tea);

console.log(patel instanceof Teacher);
console.log(patel instanceof User);

