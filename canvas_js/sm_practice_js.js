const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "blue";
ctx.fillRect(0, 0, 400, 400);

ctx.fillStyle = "white";
ctx.fillRect(0, 300, 400, 100);

function circle(x, y, r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
}

function snowman(x, y) {
    ctx.fillStyle = "white";
    circle(x, y, 25); // Head
    circle(x, y + 50, 40); // Middle
    circle(x, y + 110, 55); // Bottom
}

snowman(100, 100);
snowman(200, 150);

