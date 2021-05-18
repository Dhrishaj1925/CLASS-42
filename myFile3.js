function loop(){
    var l = document.getElementById("low").value;
    var h = document.getElementById("high").value;
    l = parseInt(l);
    h = parseInt(h);
    for(var i = l; i<h;i++){
        document.write(i + "<br>");
    }
}