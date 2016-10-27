var nombres = new Array;

function guardarNombres(){
	var x= document.getElementById("textboxes");
	var i;
	for (i = 0; i < x.length; i++) {
		if (x.elements[i].type =="text")
		nombres.push(x.elements[i].value);
	}
	
	


function redNames(item, index){
	
	document.getElementById("text1").innerHTML += item + "<br>";
	document.getElementById("text1").style.color= "red";

}




