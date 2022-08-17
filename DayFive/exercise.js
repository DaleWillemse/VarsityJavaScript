// Fix array given:

function LoopArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        console.log(`Value number ${i + 1} is ${element}`);
    }
}

let x = [3, 6, 8, 9, 10];
LoopArray(x);