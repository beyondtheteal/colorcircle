import document from "document";

var circle = document.getElementById("circle");

circle.onclick = function(e) {
  circle.style.fill = getRandomColor();
}

function getRandomColor() {
 var letters = '0123456789ABCDEF';
 var color = '#';
 for (var i = 0; i < 6; i++) {
   color += letters[Math.floor(Math.random() * 16)];
 }
 return color;
}