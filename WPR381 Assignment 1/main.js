const readline = require("readline");
const shapes = require("./shapesModule.js");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Take input from user for shape choice.
rl.question(
  "\nPlease enter the shape you want to draw: \n1. Triangle\n2. Square\n3. Diamond\n4. Exit\n\nEnter your choice : ",
  (shape) => {
    shape = parseInt(shape);
    if (shape > 0 && shape < 4) {
      chooseShape(shape);
    } else if (shape == 4) {
      rl.close();
    } else {
      console.log("Invalid input");
      rl.setPrompt("Invalid input. Please enter a valid input : ");
      rl.prompt();
      rl.on("line", (shape) => {
        // Error handling for invalid input.
        shape = parseInt(shape);
        if (shape > 0 && shape < 4) {
          chooseShape(shape);
        } else if (shape == 4) {
          rl.close();
        } else {
          console.log("Invalid input");
          rl.setPrompt(
            "Invalid input. Please enter a valid input (1, 2, 3, or 4) : "
          );
          rl.prompt();
        }
      });
    }
  }
);

rl.on("close", () => {
  console.log("\nExiting...");
  process.exit(0);
});

// Function that takes shape choice as input and calls drawShape function.
function chooseShape(shape) {
  if (shape == 1) {
    drawShape("triangle", shape);
  } else if (shape == 2) {
    drawShape("square", shape);
  } else if (shape == 3) {
    drawShape("diamond", shape);
  } else if (shape == 4) {
    rl.close();
  } else {
    console.log("Invalid input");
  }
}

// Function that takes shape name and shape choice as input and draws the shape to the console.
function drawShape(shapeName, shape) {
  rl.question(`\nPlease enter the ${shapeName} dimension : `, (n) => {
    n = parseInt(n);
    if (shape == 1) {
      console.log("\nTriangle Pattern");
      shapes.drawTriangle(n);
    } else if (shape == 2) {
      console.log("\nSquare Pattern");
      shapes.drawSquare(n);
    } else if (shape == 3) {
      console.log("\nDiamond Pattern");
      shapes.drawDiamond(n);
    } else {
      console.log("Invalid input");
      rl.close();
    }
    rl.close();
  });
}
