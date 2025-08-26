//get the element canvas and set its border to 2px
const canvas = document.getElementById("clock-canvas");
canvas.style.border = "2px solid black";
//get context 2d
const ctx = canvas.getContext('2d');

//define radius, center
const centerX = canvas.getAttribute("height") / 2;
const centerY = canvas.getAttribute("width") / 2;
const radius = 150;

//draw circle
function drawCircle(x, y, r, width, color) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.stroke();
}

// drawCircle(centerX, centerY, radius, 1, "black");
drawCircle(0, 100, 10, 1, "black");

//function to convert from Polar to Cartesian Coordinate

function polarToCartesian(r, theta) {
    // console.log(theta);
    // console.log(Math.sin(theta));
    // console.log(Math.cos(theta));
    const x = r * Math.sin(theta);
    const y = r * Math.cos(theta);
    return { x, y };
}

//draw second-hand
function drawSecondHand(deg = 0) {
    const secondHandLength = radius * 0.8;
    let { x, y } = polarToCartesian(secondHandLength, deg * (Math.PI / 180));
    console.log(x, y);
    x = x + centerX;
    y = - y + centerY;
    console.log(x, y);
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'blue';
    ctx.lineTo(x, y);
    ctx.stroke();
}

drawSecondHand(0);

//draw minute-hand
function drawMinuteHand() {
    const minuteHandLength = radius * 0.7;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 3;
    ctx.lineTo(centerX, (centerY - minuteHandLength));
    ctx.stroke();
}

//draw hour-hand
function drawHourHand() {
    const hourHandLength = radius * 0.6;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 5;
    ctx.lineTo(centerX, (centerY - hourHandLength));
    ctx.stroke();
}

//animate second-hand
// let start;
// function animateSecond(timeStamp) {

//     requestAnimationFrame(animateSecond);
// }
// requestAnimationFrame(animateSecond);