var c = document.getElementById("gameCanvas");
var addToCanvas = c.getContext("2d");
const keys = {
    w : true,
};
window.addEventListener('keydown', (e) => { keys[e.key] = true; });
window.addEventListener('keyup', (e) => { keys[e.key] = false; });

const gameEngine = {
    setUpCanvas : function(w,h){
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
    },
    fill : {
        hexcode : function(color){
            addToCanvas.fillStyle = color;
        },
        RGB : function(r,g,b){
            addToCanvas.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
        },
        name : function(color){
            addToCanvas.fillStyle = color;
        },
        clear : function(){
            addToCanvas.fillStyle = "black";
        }
    },
    detectKey : function(key){
        return keys[key];
    }
}

gameEngine.setUpCanvas("100%", "100%");
gameEngine.fill.name("red");
gameEngine.draw.circle(0,0,50,50);
gameEngine.fill.clear();
gameEngine.draw.rectangle(300,300,50,100);
