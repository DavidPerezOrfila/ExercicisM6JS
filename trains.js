//comparar si un numero esta entre otros dos y mostrarlo por consola

var result='';
a=10;
if (a>2 && a<8){
	result='a es mayor';
}else{
	result='a es menor';
}
	console.log(result);



//introducir varTrain=1;
//hasta que varTrain <=8 imprimir la frase

var varTrain=1;
while(varTrain<=8){
	console.log("Tren #" + varTrain + " esta corriendo.");
	varTrain++;
}

var trenesFuncionando=8;
var trenesTotales=12;

for (var trenesParados= trenesFuncionando + 1; trenesParados <= trenesTotales; trenesParados++){
	console.log("Tren #" + trenesParados + " no esta operativo.");
}

alert("Tenemos " + trenesTotales + " trenes");

var al;
al=confirm("Do you want to take the train?");

if (al){
	console.log("Go to the tix");
}else{
	console.log("Go home");
}

var nombre=prompt("Como se llama?");
console.log("Hola " + nombre);