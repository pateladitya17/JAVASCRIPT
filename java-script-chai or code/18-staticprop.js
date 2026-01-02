class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`USername: ${this.username}`);
    }

    // static not give access id to ant instence
    static createId() {
        return `123`;
    }
}

const patel = new User("patel");
// console.log(patel.createId());


class Teacher extends User {
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}

const sam = new Teacher("sam", "sam@email.com")
sam.logMe();
// sam.createId();




