function seleccion(e){

	var valuer = document.formulario.listu.value;
	var valuer2 = document.formulario.listu2.value;	
	var valuer3 = document.formulario.listu3.value;
	var valuer4 = document.formulario.listu4.value;
	var valuer5 = document.formulario.listu5.value;

	document.formulario.r1.value = valuer;
	document.formulario.r2.value = valuer2;
	document.formulario.r3.value = valuer3;
	document.formulario.r4.value = valuer4;
	document.formulario.r5.value = valuer5;

	var desc = 0.15;

	if(valuer=="Cheetos = $7"){
		 var valuergolo = 7;
	}else if(valuer=="Gansito = $10"){
		var valuergolo = 10;
	}else if(valuer=="Submarinos = $12"){
		var valuergolo = 12;
	}else if(valuer=="Rancheritos = $6"){
		var valuergolo = 6;
	}else{
		var valuergolo = 0;
	}

	if (valuer2=="Coca de Piña = $50") {
		var valuerbeb = 50;
	}else if(valuer2=="7-Up = $10"){
		var valuerbeb = 10;
	}else if(valuer2=="Pepsi = $11"){
		var valuerbeb = 11;
	}else if(valuer2=="Awa = $9"){
		var valuerbeb = 9;
	}else{
		var valuerbeb = 0;
	}

	if (valuer3=="Papel Higienico = $20") {
		var valuerbas = 20;
	}else if (valuer3=="Jabon Zote = $13") {
		var valuerbas = 13;
	}else if (valuer3=="Suavitel = $16") {
		var valuerbas = 16;
	}else if (valuer3=="Jabon = $12") {
		var valuerbas = 12;
	}else{
		var valuerbas = 0;
	}

	if (valuer4=="1KG de Jamon = $100") {
		var valuerali = 100;
	}else if (valuer4=="Paquete de Salchicha = $26") {
		var valuerali = 26;
	}else if (valuer4=="1Kg de Huevo = $37") {
		var valuerali = 37;
	}else if (valuer4=="Bolsa de arroz = $25") {
		var valuerali = 25;
	}else{
		var valuerali = 0;
	}

	if (valuer5=="Paracetamol = $30") {
		var valuerfar = 30;
	}else if (valuer5=="Clonazepam = $50") {
		var valuerfar = 50;
	}else{
		var valuerfar = 0;
	}

	var subthot = valuergolo + valuerbeb + valuerbas + valuerali + valuerfar;
	var thot = desc*subthot;

	document.formulario.subtotal.value = "$" + subthot;
	document.formulario.descu.value = "$" + desc;
	document.formulario.total.value = "$" + thot;



}