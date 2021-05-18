function add(){
    var x = prompt("Enter a");
    var y = prompt("Enter b");
    var sum = parseFloat(x) +parseFloat(y);
    document.write("Sum = " + sum);
}
function sub(){
    var x = prompt("Enter a");
    var y = prompt("Enter b");
    var difference = parseFloat(x)  - parseFloat(y);
    document.write("Difference = " + difference);
}
function loop(){
    var x = prompt("Enter a");
    x = parseInt(x);
    for(var i = 0; i<x; i++  ){
        document.write(i+"<br>");
    }

}
function loopEven(){
    var x = prompt("Enter a");
    x = parseInt(x);
    for(var i = 0; i<x; i++  ){
        if(i%2 == 0){
            document.write(i+"<br>");
        }
        
    }

}
function loopOdd(){
    var x = prompt("Enter a");
    x = parseInt(x);
    for(var i = 0; i<x; i++  ){
        if(i%2 == 1){
            document.write(i+"<br>");
        }
        
    }

}