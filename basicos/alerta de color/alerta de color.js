function changeColor() {
  var input = document.getElementById("option-color");
  var color = input.value;
  var label = document.getElementById("myLabel");
  if (color === "black") {
    label.style.color = "white";
    document.body.style.backgroundColor = color;
  } else {
    label.style.color = "black";
    document.body.style.backgroundColor = color;
  }
}
