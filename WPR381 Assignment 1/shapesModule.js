// Module that contains all the shapes functions.

// Drawing a triangle
drawTriangle = function (n) {
  for (var i = 0; i < n; i++) {
    var str = "";
    for (var j = 0; j < n; j++) {
      if (j < n - i - 1) {
        str += "  ";
      } else {
        str += " *";
      }
    }
    console.log(str);
  }
};

// Drawing a square
drawSquare = function (n) {
  for (var i = 0; i < n; i++) {
    var str = "";
    for (var j = 0; j < n; j++) {
      str += " *";
    }
    console.log(str);
  }
};

// Drawing a diamond
drawDiamond = function (n) {
  var mid = Math.floor(n / 2);
  var str = "";
  for (var i = 0; i < n; i++) {
    str = "";
    for (var j = 0; j < n; j++) {
      if (i <= mid) {
        if (j >= mid - i && j <= mid + i) {
          str += " *";
        } else {
          str += "  ";
        }
      } else {
        if (j >= mid + i - n + 1 && j <= mid - i + n - 1) {
          str += " *";
        } else {
          str += "  ";
        }
      }
    }
    console.log(str);
  }
};

// Exporting the functions.
module.exports = {
  drawTriangle: drawTriangle,
  drawSquare: drawSquare,
  drawDiamond: drawDiamond,
};
