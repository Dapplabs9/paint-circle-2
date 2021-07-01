var canvas = document.getElementById("canvas1");
var ctx = canvas.getContext("2d");
var color = "black";
var line_width = 1;
var mouseEvent = null;

canvas.addEventListener("mousedown",mouse_down);
function mouse_down(e) {
    color = document.getElementById("colour").value;
    line_width = document.getElementById("penWidth").value;
    mouseEvent = "mousedown";
}

canvas.addEventListener("mousemove",mouse_move);
function mouse_move(e){
    var currentX = e.clientX - canvas.offsetLeft;
    var currentY = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = line_width;
        ctx.arc(currentX,currentY,40,0,2*Math.PI);
        ctx.stroke();
    }
}

canvas.addEventListener("mouseup",mouse_up)
function mouse_up(){
    mouseEvent = "mouseup"
}
