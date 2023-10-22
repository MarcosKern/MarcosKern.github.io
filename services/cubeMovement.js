const display = document.getElementById('display');
const cube = document.getElementById('cube');
let actualPositionX = 0;
let actualPositionY = 0;
let clickPositionX = 0;
let clickPositionY = 0;

function setClickPositon({ clientX, clientY }) {
    clickPositionX = clientX;
    clickPositionY = clientY;
}

function move({ clientX, clientY }) {
    if (clickPositionX < clientX) { actualPositionX += 3 }
    if (clickPositionX > clientX) { actualPositionX -= 3 }
    if (clickPositionY < clientY) { actualPositionY -= 3 }
    if (clickPositionY > clientY) { actualPositionY += 3 }
    cube.style.transform =
        `rotateX(${actualPositionY}deg) rotateY(${actualPositionX}deg)`
    clickPositionX = clientX
    clickPositionY = clientY
}

function drag() {
    window.addEventListener("mousemove", move)
}

function remove() {
    window.removeEventListener("mousemove", move)
}

display.addEventListener("mousedown", drag);
display.addEventListener("mousedown", setClickPositon);
display.addEventListener("mouseup", remove)
display.addEventListener("mouseleave", remove)