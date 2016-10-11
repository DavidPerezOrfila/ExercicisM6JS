//******Exercici17_5*******

//5 – Realizar un programa que permita cargar una dirección de mail e implementar una función que verifique 
//si el String tiene cargado el caracter @. 

//Creamos una variable llamada mail pidiendo al usuario mediante un prompt que introduzca un mail
var mail =prompt ("Introduce tu e-mail: ");

//con la funcion buscarArroba comprobamos dentro del indice de mail si contiene el caracter '@'

function buscarArroba(mail) {

	var pos= mail.indexOf('@');
	if (pos!=-1){
		console.log("El correo: " + mail +" contiene @");
	}else{
		console.log("El correo: " + mail + " introducido no contiene @")
	}
}

//se llama a la funcion buscarArroba para que busque dentro de la variable mail si el usuario a introducido o no la '@' 
buscarArroba(mail);



***************************************************************



//1 - Crear un programa que permita cargar un entero en un text y al presionar un botón nos muestre dicho valor 
//elevado al cubo (emplear la función alert).

//2 - Cargar dos números en objetos de tipo text y al presionar un botón, mostrar el mayor.

//3 - Cargar un nombre y un apellido en sendos text. Al presionar un botón, concatenarlos y mostrarlos en 
un tercer text (Tener en cuenta que podemos modificar la propiedad value de un objeto TEXT cuando ocurre un evento).

