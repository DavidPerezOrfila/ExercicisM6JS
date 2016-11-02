function OpenWindow()
{
    for(i=0; i < document.TaulaHoraris["Hora1"].length; i++){
      if(document.TaulaHoraris["Hora1"][i].checked){
    window.open(document.TaulaHoraris["Hora1"][i].value); 

   		}

	}	
}	

function multi(){
	generarTaula();
	mostrarData();
	insertTaula();
}



function generarTaula()
{
	//Obtenim la referència del element main
	var main = document.getElementsByTagName("main")[0];
	

	//Crea un element <table>, un element <thead>, un element <tbody> i un element <tfooter>

	var tabla 		= document.createElement("table");
	var tblhead		= document.createElement("thead");
	var trtblhead	= document.createElement("tr");
	var tblBody		= document.createElement("tbody");
	var tblfooter	= document.createElement("tfooter");

	tblhead.appendChild(trtblhead);
	tabla.appendChild(tblhead);	
		
	
	//Crea la capcelera de la taula
	
	for (var i =0; i < 6; i++) {

		var cols= document.createElement("th");

		trtblhead.appendChild(cols);
		trtblhead.style.backgroundColor="#9cafb7";
		
	}

		for (var j = 0; j < 14; j++) {
			var fila= document.createElement("tr");	
			if (j >= 0 && j < 6){
					fila.style.backgroundColor="#ead2ac";
				}else{
					fila.style.backgroundColor="#e6b89c";
				} 	
		
			for (var k = 0; k < 6; k++) {
				var celda= document.createElement("td");
				fila.appendChild(celda);
		
			}
			tblBody.appendChild(fila);
		}

		if (j > 0 && j <7){
					fila.style.backgroundColor="#ead2ac";
				} 
	

// posiciona el <tbody> <tfooter> debajo del elemento <table>
  tabla.appendChild(tblBody);
  tabla.appendChild(tblfooter);
  // appends <table> into <body>
  main.appendChild(tabla);
 
}


function insertTaula(){
	var capcelera= new Array("Hora/Dia", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres");
	var mati= new Array("09:00", "10:00", "11:00", "12:00", "13:00", "14:00");
	var tarda= new Array("15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00")
 	var th = new Array; 
 	var td = new Array;
 	th = document.getElementsByTagName("th");
 	td = document.getElementsByTagName("td");
 		 		
  			
		document.getElementsByTagName("th")[0].innerHTML=capcelera[0];
		document.getElementsByTagName("th")[1].innerHTML=capcelera[1];
		document.getElementsByTagName("th")[2].innerHTML=capcelera[2];
		document.getElementsByTagName("th")[3].innerHTML=capcelera[3];
		document.getElementsByTagName("th")[4].innerHTML=capcelera[4];
		document.getElementsByTagName("th")[5].innerHTML=capcelera[5];
		document.getElementsByTagName("td")[0].innerHTML=mati[0];
		document.getElementsByTagName("td")[6].innerHTML=mati[1];
		document.getElementsByTagName("td")[12].innerHTML=mati[2];
		document.getElementsByTagName("td")[18].innerHTML=mati[3];
		document.getElementsByTagName("td")[24].innerHTML=mati[4];
		document.getElementsByTagName("td")[30].innerHTML=mati[5];
		document.getElementsByTagName("td")[36].innerHTML=tarda[0];
		document.getElementsByTagName("td")[42].innerHTML=tarda[1];
		document.getElementsByTagName("td")[48].innerHTML=tarda[2];
		document.getElementsByTagName("td")[54].innerHTML=tarda[3];
		document.getElementsByTagName("td")[60].innerHTML=tarda[4];
		document.getElementsByTagName("td")[66].innerHTML=tarda[5];
		document.getElementsByTagName("td")[72].innerHTML=tarda[6];
		document.getElementsByTagName("td")[78].innerHTML=tarda[7];

	
}

function mostrarData(){
	var d = new Date();
	var dies = new Array("Diumenge","Dilluns","Dimarts","Dimecres","Dijous","Divendres","Dissabte");

	var mes = new Array ("Gener","Febrer","Març","Abril","Maig","Juny","Juliol","Agost","Septembre","Octubre","Novembre", "Decembre");
	var horas= d.getHours();
	var minutos= d.getMinutes();
	var segundos= d.getSeconds();

		if(horas < 10) { horas = '0' + horas; }
		if(minutos < 10) { minutos = '0' + minutos; }
		if(segundos < 10) { segundos = '0' + segundos; }
	
	document.getElementById("data").innerHTML= "Generat per Institut Ribera Baixa el " + 
	 	dies[d.getDay()] + " dia " +
		d.getDate() + " de " +
	 	mes[d.getMonth()] + " del " + d.getFullYear()+ " a les "+
	 	horas +':'+ minutos + ':'+ segundos;

}

function tornarMenu()
{
	window.location.assign("HorariDavidPerez.html")
}