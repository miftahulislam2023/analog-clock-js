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
ctx.beginPath();
ctx.strokeStyle = 'black';
ctx.lineWidth = 1;
ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
ctx.stroke();

//draw second-hand
const secondHandLength = radius * 0.8;
ctx.beginPath();
ctx.moveTo(centerX, centerY);
ctx.strokeStyle = 'blue';
ctx.lineTo(centerX, (centerY - secondHandLength));
ctx.stroke();

//draw minute-hand
const minuteHandLength = radius * 0.7;
ctx.beginPath();
ctx.moveTo(centerX, centerY);
ctx.strokeStyle = 'red';
ctx.lineWidth = 3;
ctx.lineTo(centerX, (centerY - minuteHandLength));
ctx.stroke();

//draw hour-hand
const hourHandLength = radius * 0.6;
ctx.beginPath();
ctx.moveTo(centerX, centerY);
ctx.strokeStyle = 'black';
ctx.lineWidth = 5;
ctx.lineTo(centerX, (centerY - hourHandLength));
ctx.stroke();


