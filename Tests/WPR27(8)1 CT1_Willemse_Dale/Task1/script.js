// Grading a students result.

function Grading(num) {
    if (num >= 90) return "A";
    else if (num >= 80) return "B";
    else if (num >= 70) return "C";
    else if (num >= 60) return "D";
    else if (num >= 50) return "E";
    else return "F";
}

// let grade = Grading(50)
// console.log(grade);