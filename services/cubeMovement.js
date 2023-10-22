const display = document.getElementById("display");
const cube = document.getElementById("cube");
let actualPositionX = 0;
let actualPositionY = 0;
let clickPositionX = 0;
let clickPositionY = 0;

function setClickPositon({ clientX, clientY }) {
  clickPositionX = clientX;
  clickPositionY = clientY;
}

function cubeRotation({ clientX, clientY }) {
  if (clickPositionX < clientX) {
    actualPositionX += 3;
  }
  if (clickPositionX > clientX) {
    actualPositionX -= 3;
  }
  if (clickPositionY < clientY) {
    actualPositionY -= 3;
  }
  if (clickPositionY > clientY) {
    actualPositionY += 3;
  }
  cube.style.transform = `rotateX(${actualPositionY}deg) rotateY(${actualPositionX}deg)`;
  clickPositionX = clientX;
  clickPositionY = clientY;
}

function move(event) {
  switch (event.type) {
    case "touchmove":
      return cubeRotation(event.changedTouches[0]);
    case "mousemove":
      return cubeRotation(event);
    default:
      break;
  }
}

function drag() {
  window.addEventListener("mousemove", move);
}

function touchDrag() {
  display.addEventListener("touchmove", move);
}

function remove() {
  window.removeEventListener("mousemove", move);
}

display.addEventListener("mousedown", drag);
display.addEventListener("touchstart", touchDrag);
display.addEventListener("mousedown", setClickPositon);
display.addEventListener("touchstart", setClickPositon);
display.addEventListener("mouseup", remove);
display.addEventListener("touchend", remove);
display.addEventListener("mouseleave", remove);
