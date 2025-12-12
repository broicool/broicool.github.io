const button1 = {
    id : "button1",
    y : 150,
    x : 150,
    click : "",
    text : "Button Test",
}
function button(buttonObject){
    return '<button id="'+buttonObject.id+'" class = "objectMoveable" style="top:'+buttonObject.y+'px; left:'+buttonObject.x+'px;" onClick="'+buttonObject.click+'">'+buttonObject.text+'</button>'
}
function addToCanvas(object){
    document.getElementById("canvas").innerHTML += object;
}

addToCanvas(button(button1));