let Circle = function (xPosition, yPosition, radius, color, canvasID) {
    this.radius = radius;
    this.color = color;
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.canvas = document.getElementById(canvasID);
    this.context = this.canvas.getContext('2d');

    this.render = function () {
        this.context.beginPath();
        this.context.arc(this.xPosition, this.yPosition, this.radius, 0,360);
        this.context.stroke();
        this.context.fillStyle = this.color;
        this.context.fill();
        this.closePath();
    }
};

function start () {
    let circle = new Circle(250,250, 100, "#000000","my-canvas");
    circle.render();
}

