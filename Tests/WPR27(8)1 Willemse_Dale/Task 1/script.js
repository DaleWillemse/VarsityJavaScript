// Loops

// a) Fucntion that populates an array using loops.

function populateArray() {
    var arr = [];
    for (var i = 10; i <= 50; i++) {
        arr.push(i);
    }
    return arr;
}

// b)  Function that doubles every value in an array of three numbers.
function doubleArray(arr) {
    if (arr.length != 3) {
        return "Array must only contain 3 elements";
    }
    else {
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i] * 2;
        }
        return arr;
    }
}
