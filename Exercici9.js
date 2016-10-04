////9 ejercicio 2////

/* - En un banco se procesan datos de las cuentas corrientes de sus clientes. De cada cuenta corriente se conoce: número de cuenta, 
nombre del cliente y saldo actual. El ingreso de datos debe finalizar al ingresar un valor negativo en el número de cuenta.
Se pide confeccionar un programa que lea los datos de las cuentas corrientes e informe:
a) De cada cuenta: número de cuenta, nombre del cliente y estado de la cuenta según su saldo, sabiendo que:
Estado de la cuenta	'Acreedor' si el saldo es >0.
			'Deudor' si el saldo es <0.
			'Nulo' si el saldo es =0.
b) La suma total de los saldos acreedores. */



	var numCta= 0;
	var saldoActual= 0;
	var nombreCliente= "";
	var numCta= 0;
	var saldoActual= 0;
	var estado= "Nulo";
	var myArray = new Array(3); 
		for ( i = 0; i < 3; i++) {
			myArray[i]= new Array(3);
		}
	var nombres=new Array;
	var cuentas=new Array;
	var saldos=new Array;
	
	myArray[0]= cuentas;
	myArray[1]="";

	cuentas = [numCta, nombreCliente, saldoActual, estado];
	cuentas.push([numCta, nombreCliente, saldoActual, estado]);

	nombres.push(nombreCliente);
	saldos.push(saldoActual);

do{
	
	numCta= prompt("Introduce el numero de la cuenta: ");
	nombreCliente= prompt("Introduce el nombre del cliente: ");
	saldoActual= prompt("Introduce el saldo: ");
	numCta++; 
}while();



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


	

