function setUsername(username) {
    this.username = username;
    console.log("called"); 
}

function createUser(username, email, password) {
    setUsername.call(this, username);
    this.email = email;
    this.password = password;
}

const patel =  new createUser("patel", "patel@google.com", "1234");
console.log(patel);
