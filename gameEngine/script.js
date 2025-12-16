var c = document.getElementById("gameCanvas");
var addToCanvas = c.getContext("2d");
const gameEngine = {
    setUpCanvas : function(w,h) {
        c.width = window.innerWidth;
        c.height = window.innerHeight;
        c.style.width = w;
        c.style.height = h;
    },
    draw : {
        circle : function(x,y,rX,rY){
            addToCanvas.beginPath();
            addToCanvas.ellipse(x, y, rX, rY, Math.PI / 4, 0, 2 * Math.PI);
            addToCanvas.fill();
        },
        rectangle : function(x,y,l,h){
            addToCanvas.fillRect(x,y,l,h);
        }
    }
}
gameEngine.setUpCanvas("100%", "100%");
gameEngine.draw.circle(0,0,50,50)
gameEngine.draw.rectangle(300,300,50,100)