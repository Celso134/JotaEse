function validarnum(e){
    var teclado = (document.all)?e.keyCode:e.which;
    var prov=0;
    var patron = /[0-9\d .]/;
    var tec = String.fromCharCode(teclado);
    var tecleado = document.formulario.cantidad.value;
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


function interes() {

	var valor = document.formulario.cantidad.value;
	
	if(valor.length==0){
		alert("Ingresa una cantidad a invertir");
		formulario.cantidad.focus();
	}else{
		alert(valor);

		var operacion = parseInt(valor);
		var interes = operacion*0.077;
		var total = operacion + interes;

		document.formulario.ganancia.value = "$" + interes;
		document.formulario.sueldo.value = "$" + total;
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