const readline = require("readline");
const shapes = require("./shapesModule.js");
const menu = require("./menuModule.js");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(menu.displayMenu(), (shape) => {
  shape = parseInt(shape);
  if (shape > 0 && shape < 4) {
    drawShape(shape);
  } else if (shape == 4) {
    rl.close();
  } else {
    menu.displayMenu();
    rl.setPrompt("Invalid input. Please enter a valid input : ");
    rl.prompt();
    rl.on("line", (shape) => {
      shape = parseInt(shape);
      if (shape > 0 && shape < 4) {
        drawShape(shape);
      } else if (shape == 4) {
        rl.close();
      } else {
        menu.displayMenu();
        rl.setPrompt(
          "Invalid input. Please enter a valid input (1, 2, 3, or 4) : "
        );
        rl.prompt();
      }
    });
  }
});

rl.on("close", () => {
  console.log("\nExiting...");
  process.exit(0);
});

// Function that takes shape name and shape choice as input and draws the shape to the console.
function drawShape(shape) {
  rl.question(`\nPlease enter the dimension : `, (n) => {
    n = parseInt(n);
    if (n > 0 && Number.isInteger(n)) {
      if (shape == 1) {
        console.log("\nTriangle Pattern");
        shapes.drawTriangle(n);
      } else if (shape == 2) {
        console.log("\nSquare Pattern");
        shapes.drawSquare(n);
      } else if (shape == 3) {
        console.log("\nDiamond Pattern");
        shapes.drawDiamond(n);
      }
    } else {
      rl.setPrompt("Invalid input. Please enter a valid input : ");
      rl.prompt();
      rl.on("line", (n) => {
        n = parseInt(n);
        if (n > 0 && Number.isInteger(n)) {
          if (shape == 1) {
            console.log("\nTriangle Pattern");
            shapes.drawTriangle(n);
          } else if (shape == 2) {
            console.log("\nSquare Pattern");
            shapes.drawSquare(n);
          } else if (shape == 3) {
            console.log("\nDiamond Pattern");
            shapes.drawDiamond(n);
          }
        } else {
          rl.setPrompt(
            "Invalid input. Please enter a valid input (a positive integer) : "
          );
          rl.prompt();
        }
      });
    }
  });
}
