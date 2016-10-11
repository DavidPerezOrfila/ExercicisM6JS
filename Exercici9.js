////9 ejercicio 2////

/* - En un banco se procesan datos de las cuentas corrientes de sus clientes. De cada cuenta corriente se conoce: número de cuenta, 
nombre del cliente y saldo actual. El ingreso de datos debe finalizar al ingresar un valor negativo en el número de cuenta.
Se pide confeccionar un programa que lea los datos de las cuentas corrientes e informe:
a) De cada cuenta: número de cuenta, nombre del cliente y estado de la cuenta según su saldo, sabiendo que:
Estado de la cuenta	'Acreedor' si el saldo es >0.
			'Deudor' si el saldo es <0.
			'Nulo' si el saldo es =0.
b) La suma total de los saldos acreedores. */
/* pseudocodigo ejercicio 9-2
cuenta


cliente num cuenta
		nombre
		saldo saldoActual	acreedor saldo >0
							Deudor		saldo <0
							Nulo		saldo = 0

definir datos cuentas
i= 0
introducir cuentas [i]
		introducir numero numCta
		introducir nombre
		definir estado
i++
hasta numcta < 0

for para sumar los saldos*/



	var numCta= 0;
	var saldoActual= 0;
	var nombreCliente= prompt("Introduce el nombre del cliente: ");
	var numCta= prompt("Introduce el numero de la cuenta: ");
	var saldoActual= prompt("Introduce el saldo: ")
	if (saldoActual < 0){
		console.log("Estado de la cuenta: Deudor");
		
	}ifelse(saldoActual = 0){
		console.log("Estado de la cuenta: Nulo");
	}else{
		console.log("Estado de la cuenta: Acreedor")
	}
}

var nombres=new Array;
var cuentas=new Array;
var saldos=new Array;

do{
	nombreCliente= prompt("Introduce el nombre del cliente: ");
	numCta= prompt("Introduce el numero de la cuenta: ");
	saldoActual= prompt("Introduce el saldo: ");
	cuentas.push(cuentas);
	nombres.push(nombreCliente);
	saldos.push(saldoActual);
}while(saldoActual < 0);
nombres.pop();
cuentas.pop();
saldos.pop();

for (var i= 0; i < nombres.length; i++) {
		document.write(nombres[i]+"<br>");
	}
for (var i= 0; i < cuentas.length; i++) {
		document.write(cuentas[i]+"<br>");
	}
for (var i= 0; i < saldos.length; i++) {
	if (saldoActual < 0){
		console.log("Estado de la cuenta: Deudor");
		
	}ifelse(saldoActual = 0){
		console.log("Estado de la cuenta: Nulo");
	}else{
		console.log("Estado de la cuenta: Acreedor")
	}
		document.write(saldos[i]+"<br>");
	}

 
******************************************************************************************

//Funcion que coja un array de palabras que encuentre e imprima la mas larga



var palabras2 =["prOgrAmA", "AcreedoreS", "bAncO", "cOja", "delTA"];

function buscarPalabraLarga(palabras){
	var masLarga="";

for (var i= 0; i < palabras.length; i++) {
		if (palabras[i].length > masLarga.length){
		masLarga= palabras[i];
		
		}
	}
		console.log(masLarga);
}

buscarPalabraLarga(palabras2);

***********************************************************************************************
Funcion llamada codificarPalabra, recibe un String, retorna la version codificada 
7 en lugar de T
4 en lugar de A
5 en lugar de S
0 en lugar de O
var palabras3= "ESTO eS unA pruebA pArA cOmprObAr lA cOdificAcIOn de TOdA lA STring"

function codificarPalabra(palabra){
	for (var i = palabra.length - 1; i >= 0; i--) {
		
		switch(i){
			case 0:
				if (x =="T"){
					x ==7;
			case 1:
				if (x =="A"){
					x ==4;

			case 2:
				if (x =="S"){
					x ==5;
				}
		}
	}
}

codificarPalabra(palabras3);



***********************************************************************************************

function saludoPersonal(nombre)
{

	var hola ="Hola";
	function saludo()
	{
		return hola + nombre;
	}
		return saludo;
}
var diHola =saludoPersonal("Don ");

diHola;


************************************************************************************************

var heroe=
{ raza:'Tortuga', trabajo:'Ninja'};



var perro =
{ nombre:'Benji', ladrar:function(){
		alert("GUAU");
	}

}
