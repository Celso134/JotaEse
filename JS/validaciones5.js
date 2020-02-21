function calculos(e){
	
	if(alum == "" || onv == "" || fem == ""){
		alert("Favor de llenar todos los campos");
	}

	var nelpunt = "."

	var alum = document.formulario.total.value;
	var onv = document.formulario.onvrez.value;
	var fem = document.formulario.feminaz.value;

	var alumn = parseInt(alum);
	var onvr = parseInt(onv);
	var femi = parseInt(fem);

	var onvfem = onvr + femi;


	if(onvfem != alum){
		alert("No profe, los datos no concuerdan, chequelos bien");
	}else if(onvfem == alum){
		var alump = 100;
		var femp = (fem*alump)/alum;
		var onvp = (onv*alump)/alum; 

		document.formulario.perh.value = onvp + "%";
		document.formulario.perm.value = femp + "%";

	}	
}

function validaralum(e){
	var teclado = (document.all)?e.keyCode:e.which;
    var prov=0;
    var patron = /[0-9\d .]/;
    var tec = String.fromCharCode(teclado);
    var tecleado = document.formulario.total.value;
    for(i=0; i<tecleado.length; i++){
        if(tecleado.charAt(i)!='.'){
            prov=prov+1;
        }
    }
    if(prov==tecleado.length-1){
        var otra=/[0-9\d]/;
        return otra.test(tec);
    }else{
        return patron.test(tec);
    }
}




function copiarPegar(e){
    e.preventDefault();
    alert("Esa accion no esta permitida");
}
document.oncontextmenu = function(evt){
    return false;
}
document.onkeydown=function() { 
    if (window.event) {
    if((window.event.keyCode == 16) ||
    ((window.event.keyCode >= 113) && (window.event.keyCode <= 123)))
    {
    //Bloquear Backspace
    //Bloquear Teclas Fxx (excepto F1)
    window.event.cancelBubble = true;
    window.event.keyCode = 8;
    window.event.returnValue = false;
    return false;
    }
    }
    
    if(event.altLeft) {
    if((window.event.keyCode == 37) || (window.event.keyCode == 39)) {
    //Bloquear Alt + Cursor Izq/Der.
    return false;
    }
    }
    
    if(event.ctrlKey) {
    //Bloquear Ctrl
    return false;
    }
    
    //alert(window.event.keyCode);
    return true;
    
    }