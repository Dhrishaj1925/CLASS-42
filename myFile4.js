function addMe(){
   var val = document.myForm.fullname.value;
    var element = document.createElement("li") ;
    var v =  document.createTextNode(val)
    element.appendChild(v);
    document.getElementById("todo").appendChild(element)  
}