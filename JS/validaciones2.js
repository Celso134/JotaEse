function validarnum(e){
    var teclado = (document.all)?e.keyCode:e.which;
    var prov=0;
    var patron = /[0-9\d .]/;
    var tec = String.fromCharCode(teclado);
    var tecleado = document.getElementById("sueldi");
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

function calculos(){
    if(document.formulario.suelo.value==0){
        alert("Por favor llene el campo de sueldo");
        formulario.suelo.focus();
    }else if(document.formulario.ven1.value==0){
    	alert("Por favor ingrese el total de la venta 1")
    	formulario.ven1.focus();
    }else if(document.formulario.ven2.value==0){
    	alert("Por favor ingrese el total de la venta 2")
    	formulario.ven2.focus();
    }else if(document.formulario.ven3.value==0){
    	alert("Por favor ingrese el total de la venta 3")
    	formulario.ven3.focus();
    }else if(document.formulario.ven4.value==0){
    	alert("Por favor ingrese el total de la venta 4")
    	formulario.ven4.focus();
    }else if(document.formulario.ven5.value==0){
    	alert("Por favor ingrese el total de la venta 5")
    	formulario.ven5.focus();
    }
    	var salario=parseFloat(document.formulario.suelo.value);
    	if(salario>70000){
    		alert("Eso es demasiado")
    	}else{
    		var vente1 = document.formulario.ven1.value;
    		var vente2 = document.formulario.ven2.value;
    		var vente3 = document.formulario.ven3.value;
    		var vente4 = document.formulario.ven4.value;
    		var vente5 = document.formulario.ven5.value;
    		var com1 = vente1*0.12;
    		var com2 = vente2*0.12;
    		var com3 = vente3*0.12;
    		var com4 = vente4*0.12;
    		var com5 = vente5*0.12;
    		var totalvente = com1+com2+com3+com4+com5;
    		var totmes = salario+totalvente;

    		document.formulario.sue.value = "$" + salario;
    		document.formulario.comi.value = "$" + totalvente;
    		document.formulario.total.value = "$" + totmes;

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