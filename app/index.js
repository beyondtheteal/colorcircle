import document from "document";

var background = document.getElementById("background");
var circle = document.getElementById("circle");

// Change the color when the finger is pressed down
background.onmousedown = function(e) { changeColor() };
circle.onmousedown = function(e) { changeColor() };

// Change the color when the finger is moved
var count = 0;
background.onmousemove = function(e) { changeColorSlower() };
circle.onmousemove = function(e) { changeColorSlower() };

// Change the color when the top right or bottom right buttons are pressed
document.onkeypress = function(e) {
  if (e.key === "up") { // this is actually the "top" key on the right of the Fitbit Versa
    //console.log("Key pressed: up for sure");
    changeColor();
  }
  if (e.key === "down") { // this is actually the "bottom" key on the right of the Fitbit Versa
    //console.log("Key pressed: down for sure");
    changeColor();
  }
  //console.log("Key pressed: " + e.key);
}

// Only change the color every other time this function is activated. This is because the color flickers like crazy otherwise
function changeColorSlower() {
  if ((count % 10) == 0) {
    changeColor();
  }
  count++;
}

function changeColor() {
  circle.style.fill = getRandomColor();
};

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  //console.log("Changed color to: " + color);
  return color;
}