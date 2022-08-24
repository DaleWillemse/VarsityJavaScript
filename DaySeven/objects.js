// Objects.

let user = { // object literal syntax.
    // username is a key
    // "John" is a vlue.
    // username: "John" is an entry.
    username: "John",
    email: "John@gmail.com",
    marks: [4.0, 5.5, 6.2, 7.1],
    getName: function () {
        return this.username;
    },
    generatePercentage: function () {
        return this.marks.map((mark) => mark * 10);
    }
}; // Objects are used to explain what a stored value is.

console.log(user.generatePercentage());