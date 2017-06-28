function getColor() {
  return '#' + Math.random().toString(16).slice(2,8);
}

function getHex() {
  var colorHex = getColor().toString();
  var text = document.getElementById('colorName')
  text.innerText = colorHex; 
}

function bgColor() {
  backgroundColor = getColor();
  document.body.style.background = backgroundColor;
  hexValue = document.getElementById('colorName');
  hexValue.innerText = backgroundColor.toString();
}

document.body.onkeypress = function(e) {
  if(e.keyCode == 32) {
    bgColor();
  }
}