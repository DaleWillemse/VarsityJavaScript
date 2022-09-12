// Function checks if the input value is odd or even.
function CheckNumber() {
    const input = document.getElementById("inputValue").value;
    if (input % 2 === 0) {
        // alert("Even");
        document.getElementById("right").style.backgroundColor = "green";
    } else {
        // alert("Odd");
        document.getElementById("left").style.backgroundColor = "orange";
    }
    // Waits a second before turning the background colors back to red.
    setTimeout(function () {
        document.getElementById("right").style.backgroundColor = "red";
        document.getElementById("left").style.backgroundColor = "red";
    }, 1000);
}