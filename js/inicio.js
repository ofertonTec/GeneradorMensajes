var mensajeMostrar = document.getElementById('mensajeGenerado');
var codCliente = document.getElementById('codCliente');
var telf = document.getElementById('telf');
var fechaComp = document.getElementById('fechaComp');
var descrip = document.getElementById('descrip');
var tipoGestion = document.getElementById('tipoGestion');
var monto = document.getElementById('monto');

document.getElementById('formulario').addEventListener('submit',
    function (event) {

        event.preventDefault();//evita que el formulario se envie automaticamente


        var entidad = document.getElementById('entidad').value;
        var tipoMensaje = document.getElementById('tipoMensaje').value;
        var nombresCom = document.getElementById('cliente').value;
        var fecha = document.getElementById('fecha').value;
        var telefono = document.getElementById('telefono').value;
        var monto = document.getElementById('monto').value;
        var tipo = document.getElementById('tipo').value;
        var numero = document.getElementById('numero').value;

        var nombresMayus = nombresCom.toUpperCase();
        var tipoMayus = tipo.toUpperCase();

        var cliente = {
            entidad: entidad,
            tipoMensaje: tipoMensaje,
            nombres: nombresMayus,
            fechaPago: fecha,
            telefono: telefono,
            montoPago: monto,
            tipoProducto: tipoMayus,
            numeroProducto: numero

        };
        generarMensaje(cliente);
    });
function generarMensaje(cliente) {

    mostrarMensaje(cliente);

}
var mensaje = "";
function mostrarMensaje(cliente) {
    var iconoWhatsApp = document.getElementById('iconoWhatsApp');
    if (cliente.telefono != null) {
        iconoWhatsApp.style.display = "block";
    } 
    var linkWhatsapp = document.getElementById('linkWhatsApp');
    var link = 'http://api.whatsapp.com/send?phone=51' + cliente.telefono
    linkWhatsapp.href = link
    var promesaInterbank = "Sr(a) *" + cliente.nombres + "* Según lo acordado telefónicamente usted se compromete a efectuar el pago correspondiente de S/. *" + cliente.montoPago + "* el día *" + cliente.fechaPago + "* del producto *" + cliente.tipoProducto + "*  Número de cuenta *" + cliente.numeroProducto + "*.\n"
        + "\nRealice el pago en la agencia del *Banco BBVA* más cercana, donde se dirige a ventanilla indicando el *código pago legal* 248 (Soles) o 249 (Dólares) adicionando el número de su DNI o RUC del titular de la cuenta."
        + "\n\nQuedo a la espera del envió del voucher a través de este medio, gracias."
        + "\n\n\n*Cuenta bancaria*"
        + "\n001104024900000023 - (Soles)"
        + "\n01140200490000002359 (Soles)"
        + "\n\n\n*Cuenta interbancaria*"
        + "\n001104024900000031 - (Dolares)"
        + "\n01140200490000003152 (Dolares)";
    var promesaVentanilla = "Sr(a) *" + cliente.nombres + "* Según lo acordado telefónicamente usted se compromete a efectuar el pago correspondiente a S/. *" + cliente.montoPago + "* el día *" + cliente.fechaPago + "* del producto *" + cliente.tipoProducto + "*  Número de cuenta *" + cliente.numeroProducto + "*.\n"
        + "\nRealice el pago en la agencia del *Banco BBVA* más cercana, donde se dirige a ventanilla indicando el *código pago legal* 248 (Soles) o 249 (Dólares) adicionando el número de su DNI o RUC del titular de la cuenta."
        + "\n\nQuedo a la espera del envió del voucher a través de este medio, gracias.";
    var vencida = "Sr(a) *" + cliente.nombres + "* le recordamos que tiene una promesa incumplida con   " + cliente.entidad + " por el monto de S/. *" + cliente.montoPago + "* .\n\nPara que Ud. no pierda los beneficios y su deuda no genere mayor interés, confírmenos su reprogramación para el día de *HOY*. \n\nGracias."

    var recordatorio = "Que tal Sr(a) *" + cliente.nombres + "* , " + cliente.entidad + " le recuerda que tiene un compromiso pendiente para el *" + cliente.fechaPago + "* , por el importe de S/.*" + cliente.montoPago + "* , evite el recálculo de su deuda pagando en la fecha establecida. \n\nCualquier inconveniente con su pago me informa para poder ayudarle. \n\nQuedo a la espera de la foto de su comprobante para el ajuste de su pago. \nSaludos Cordiales.";

    var campaña = cliente.nombres + ', *' + cliente.entidad + '*, tiene un Dscto Especial *PRE_APROBADO*, cancela tu Producto *' + cliente.tipoProducto + '* con *S/.' +
        cliente.montoPago + '* , Previa evaluación, \n\n*ACTIVALO* comunicándote por este medio.\n\nTramite su *CONSTANCIA DE NO ADEUDO* y Evite seguir manteniendo un reporte negativo en las centrales de riesgo.\n\nDscto válido hasta: *' + cliente.fechaPago + '*'
    if (cliente.tipoMensaje == "promesa1") {
        mensaje = promesaVentanilla;
        mensajeMostrar.innerHTML = promesaVentanilla;
    } else if (cliente.tipoMensaje == "promesa2") {
        mensaje = promesaInterbank;
        mensajeMostrar.innerHTML = promesaInterbank;
    } else if (cliente.tipoMensaje == "campaña") {
        mensaje = campaña;
        mensajeMostrar.innerHTML = campaña;
    } else if (cliente.tipoMensaje == "recordatorio") {
        mensaje = recordatorio;
        mensajeMostrar.innerHTML = recordatorio;
    } else if (cliente.tipoMensaje == "vencida") {
        mensaje = vencida;
        mensajeMostrar.innerHTML = vencida;
    }
}
let btnCopiar = document.getElementById('copiarMensaje');
btnCopiar.addEventListener('click', function (e) {
    mensajeMostrar.select();
    try {
        var successful = document.execCommand('copy');

        if (successful) respuesta.innerHTML = 'Copiado!';
        else respuesta.innerHTML = 'Incapaz de copiar!';
    } catch (err) {
        rpta.innerHTML = 'Browser no soportado!';
    }
    let textArea = document.getElementById('mensaje')
    textArea.innerHTML = ""
});
document.getElementById('tipoMensaje').addEventListener('change', function (event) {
    var opcionSeleccionada = event.target.value;//obtiene el valor de la opcion seleccionada
    var fechaDiv = document.getElementById('fechaDiv');
    var telefonoDiv = document.getElementById('telefonoDiv');
    var tipoProductoDiv = document.getElementById('tipoProductoDiv');
    var numeroProductoDiv = document.getElementById('numeroProductoDiv');

    if (opcionSeleccionada == 'recordatorio') {
        fechaDiv.style.display = 'block';
        tipoProductoDiv.style.display = 'none';
        numeroProductoDiv.style.display = 'none';

    } else if (opcionSeleccionada == "campaña") {
        fechaDiv.style.display = 'block';
        numeroProductoDiv.style.display = "none";
        telefonoDiv.style.display = 'block';
        tipoProductoDiv.style.display = "none";
    } else if (opcionSeleccionada == "vencida") {
        fechaDiv.style.display = 'none';
        numeroProductoDiv.style.display = "none";
        telefonoDiv.style.display = 'block';
        tipoProductoDiv.style.display = "none";
    } else {
        fechaDiv.style.display = 'block';
        telefonoDiv.style.display = 'block';
        tipoProductoDiv.style.display = 'block';
        numeroProductoDiv.style.display = 'block';
    }
})
