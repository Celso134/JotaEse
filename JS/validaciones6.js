function calcularEdad() {
    if(document.formulario.añoA.value==""){    
        alert("Por favor llene al campo de año");
    }else{
        var años = document.formulario.añoA.value;
        var cr7 = parseInt(años);
        var correcto=2020-cr7;
        if(correcto>116 || correcto<0){
            alert("Los años no concuerdan crack");
        }else{
            var dia = dimeDia();
            var mes =  dimeMes();
            var año = document.formulario.añoA.value;
            var fecha = mes+"/"+dia+"/"+año; 

            var hoy = new Date();
            var cumpleanos = new Date(fecha);
            var edad = hoy.getFullYear() - cumpleanos.getFullYear();
            var m = hoy.getMonth() - cumpleanos.getMonth();

            if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
                edad--;
            }
            return document.formulario.cantidad.value=edad;
        }
    }
}

function dimeDia(){ 
    var texto;
    texto = "El numero de opciones del select: " + document.formulario.DiaActual.length; 
    var indice = document.formulario.DiaActual.selectedIndex; 
    texto += "nIndice de la opcion escogida: " + indice; 
    var valor = document.formulario.DiaActual.options[indice].value; 
    texto += "nValor de la opcion escogida: " + valor; 
    var textoEscogido = document.formulario.DiaActual.options[indice].text; 
    texto += "nTexto de la opcion escogida: " + textoEscogido; 
    return textoEscogido;
}
function dimeMes(){ 
    var texto;
    texto = "El numero de opciones del select: " + document.formulario.MesActual.length; 
    var indice = document.formulario.MesActual.selectedIndex; 
    texto += "nIndice de la opcion escogida: " + indice; 
    var valor = document.formulario.MesActual.options[indice].value; 
    texto += "nValor de la opcion escogida: " + valor; 
    var textoEscogido = document.formulario.MesActual.options[indice].text; 
    texto += "nTexto de la opcion escogida: " + textoEscogido; 
    return indice+1;
}
function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    var prov=0;
    var patron = /[0-9\d]/;
    var tec = String.fromCharCode(teclado);
    var tecleado = document.formulario.añoA.value;
    for(i=0; i<tecleado.length; i++){
        prov=prov+1;
    }
    if(prov==4){
        var expreg = /^[A-Z]{1,2}\s\d{4}\s([B-D]|[F-H]|[J-N]|[P-T]|[V-Z]){3}$/;
        return expreg.test(tec);
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