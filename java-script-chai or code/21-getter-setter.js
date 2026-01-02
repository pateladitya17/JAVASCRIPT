class User {
    constructor(email, password) {
        this.email = email;
        this.password = password
    }

    get email() {
        return this._email.toUpperCase();
    }
    
    set email(value) {
        this._email = value; 
    }

    get password() {
        return `${this._password}patel`;
    }

    set password(value) {
        this._password = value
    }
}

const patel = new User("patel@gmail.com", "abc");
console.log(patel.password);
console.log(patel.email);

