// Menu module for choosing which shape to draw.

function displayMenu() {
  console.clear();
  console.log(
    "Draw some shapes!\n--------------\n1. Triangle\n2. Square\n3. Diamond\n4. Exit\n"
  );

  return "Which shape do you want to draw: ";
}

function shapeName(choice) {
  if (choice == 1) {
    shapeName = "Triangle";
  } else if (choice == 2) {
    shapeName = "Square";
  } else if (choice == 3) {
    shapeName = "Diamond";
  }
  return shapeName;
}

module.exports = {
  displayMenu: displayMenu,
  shapeName: shapeName,
};
