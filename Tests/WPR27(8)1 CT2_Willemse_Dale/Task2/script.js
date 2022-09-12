var answer = document.getElementById("answer");
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");

function Addition() {
    if (num1.value == "" || num2.value == "") {
        answer.style.color = "red";
        answer.innerHTML = "Please enter two numbers";
    }
    else if (isNaN(num1.value) || isNaN(num2.value)) {
        answer.style.color = "red";
        answer.innerHTML = "Please enter numbers";
    }
    else {
        answer.style.color = "green";
        answer.innerHTML = `${num1.value} + ${num2.value} = ${parseFloat(num1.value) + parseFloat(num2.value)}`;
    }

}

function Subtraction() {
    if (num1.value == "" || num2.value == "") {
        answer.style.color = "red";
        answer.innerHTML = "Please enter two numbers";
    }
    else if (isNaN(num1.value) || isNaN(num2.value)) {
        answer.style.color = "red";
        answer.innerHTML = "Please enter numbers";
    }
    else {
        answer.style.color = "green";
        answer.innerHTML = `${num1.value} - ${num2.value} = ${parseFloat(num1.value) - parseFloat(num2.value)}`;
    }

}

function Multiplication() {
    if (num1.value == "" || num2.value == "") {
        answer.style.color = "red";
        answer.innerHTML = "Please enter two numbers";
    }
    else if (isNaN(num1.value) || isNaN(num2.value)) {
        answer.style.color = "red";
        answer.innerHTML = "Please enter numbers";
    }
    else {
        answer.style.color = "green";
        answer.innerHTML = `${num1.value} * ${num2.value} = ${parseFloat(num1.value) * parseFloat(num2.value)}`;
    }
}

function Division() {
    if (num1.value == "" || num2.value == "") {
        answer.style.color = "red";
        answer.innerHTML = "Please enter two numbers";
    }
    else if (isNaN(num1.value) || isNaN(num2.value)) {
        answer.style.color = "red";
        answer.innerHTML = "Please enter numbers";
    }
    else if (num2.value == 0) {
        answer.style.color = "red";
        answer.innerHTML = "Cannot divide by zero";
    }
    else {
        answer.style.color = "green";
        answer.innerHTML = `${num1.value} / ${num2.value} = ${parseFloat(num1.value) / parseFloat(num2.value)}`;
    }
}