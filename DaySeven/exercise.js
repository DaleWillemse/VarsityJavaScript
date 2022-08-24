// What is the hgihest mark in the array called marks? Create a function called highestMark
// which returns the answer.

let user = {
    username: "John",
    email: "John@gmail.com",
    marks: [5.2, 2.3, 8.2, 5],
    getPercentage: function () {
        return this.marks.map((mark) => mark * 10);
    },
    getHighestMark: function () {
        let highest = 0
        this.marks.map((mark) => {
            if(mark > highest){
                highest = mark;
            }
        })
        return highest * 10 + "%";
    }
}

console.log(user.getHighestMark());