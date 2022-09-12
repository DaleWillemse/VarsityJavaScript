// Function that filters marks that are greater than 49.

const marksArray = [67, 1, 'fifty', 50, 13, 'hundred'];

function filterMarks(arr) {
    var filteredMarks = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 49) {
            filteredMarks.push(arr[i]);
        }
    }
    return filteredMarks;
}

// console.log(filterMarks(marksArray));