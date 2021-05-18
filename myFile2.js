function calculateArea(){
    var l = document.getElementById("length").value;
    var b = document.getElementById("breadth").value;
    var r = document.getElementById("radius").value;
    alert(l)
    l = parseInt(l);
    b = parseInt(b);
    r = parseFloat(r);
    var rect = l*b;
    var square = l*l;
    var circle = 3.14*r*r;
   document.write("Area Of the Rectangle = " + rect)
   document.write("Area Of the Square = " + square)
   document.write("Area Of the Circle = " + circle)
}