function promedio(){
	var pri = document.formulario.primer.value;
	var seg = document.formulario.segundo.value;
	var ter = document.formulario.tercer.value;
	var exa = document.formulario.exfi.value;
	var tra = document.formulario.trafi.value;

	var paru = parseFloat(pri);
	var pard = parseFloat(seg);
	var part = parseFloat(ter);
	var exam = parseFloat(exa);
	var trab = parseFloat(tra);

	if (pri=="" || seg=="" || ter=="" || exa=="" || tra=="") {
		alert("Llene todos los cmapos, por favor");
	}else if(paru>10 || pard>10 || part>10 || exam>10 || trab>10){
		alert("Las calificaciones no pueden pasar de 10 cruck");
	}else{
		var promedio = (paru+pard+part)/3;
		promedio = promedio*0.55;
		exam=exam*0.30;
		trab=trab*0.15;
		promedio=promedio+exam+trab;
		return document.formulario.finalillo.value = promedio.toFixed(2);
		
	}
}

function validar1(e){
	var teclado = (document.all)?e.keyCode:e.which;
    var prov=0;
    var patron = /[0-9\d .]/;
    var tec = String.fromCharCode(teclado);
    var tecleado = document.formulario.primer.value;
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

function validar2(e){
    var teclado = (document.all)?e.keyCode:e.which;
    var prov=0;
    var patron = /[0-9\d .]/;
    var tec = String.fromCharCode(teclado);
    var tecleado = document.formulario.segundo.value;
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
function validar3(e){
    var teclado = (document.all)?e.keyCode:e.which;
    var prov=0;
    var patron = /[0-9\d .]/;
    var tec = String.fromCharCode(teclado);
    var tecleado = document.formulario.tercer.value;
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
function validar4(e){
    var teclado = (document.all)?e.keyCode:e.which;
    var prov=0;
    var patron = /[0-9\d .]/;
    var tec = String.fromCharCode(teclado);
    var tecleado = document.formulario.exfi.value;
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
function validar5(e){
    var teclado = (document.all)?e.keyCode:e.which;
    var prov=0;
    var patron = /[0-9\d .]/;
    var tec = String.fromCharCode(teclado);
    var tecleado = document.formulario.trafi.value;
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