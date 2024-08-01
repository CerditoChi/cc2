var canvas = document.getElementById("mc");
var d = canvas.getContext("2d");
var color = "pink";
var ancho = 4;
var widthscreen = screen.width;
var newwidth = screen.width - 100;
var newheight = screen.height - 300;

if (widthscreen < 992) {
    canvas.width = newwidth;
    canvas.height = newheight;
    document.body.style.overflow = "hidden";
}
canvas.addEventListener("touchstart", dibujar);

function dibujar(e) {
    console.log("A echo touch en la bellisima pantalla");
    color = document.getElementById("color").value;
    ancho = document.getElementById("ancho").value;
    lastX = e.touches[0].clientX - canvas.offsetLeft;
    lastY = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", mover);

function mover(e) {
    currentX = e.clientX - canvas.offsetLeft;
    currentY = e.clientY - canvas.offsetTop;

    d.beginPath();
    d.strokeStyle = color;
    d.lineWidth = ancho;
    d.moveTo(lastX, lastY);
    d.lineTo(currentX, currentY);
    d.stroke();

    lastX = currentX;
    lastY = currentY;
}

function l() {
    d.clearRect(0, 0, canvas.width, canvas.height);
}
