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

        var tipoMensaje = document.getElementById('tipoMensaje').value;
        var nombresCom = document.getElementById('cliente').value;
        var fecha = document.getElementById('fecha').value;
        var telefono = document.getElementById('telefono').value;
        var monto = document.getElementById('monto').value;
        var tipo = document.getElementById('tipo').value;
        var numero = document.getElementById('numero').value;
        var idCliente = document.getElementById('idCliente').value;

        var nombresMayus = nombresCom.toUpperCase();
        var tipoMayus = tipo.toUpperCase();

        var cliente = {
            clienteId: idCliente,
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
    limpiarCampos();
    mostrarMensaje(cliente);

}

function limpiarCampos() {
    mensajeMostrar.innerHTML = "";
}

function limpiarCamposTabla() {
    codCliente.innerHTML = "";
    telf.innerHTML = "";
    fechaComp.innerHTML = "";
    descrip.innerHTML = "";
    tipoGestion.innerHTML = "";
    monto.innerHTML = "";
}
function llenarTabla(cliente) {
    limpiarCamposTabla();
    codCliente.innerHTML = cliente.clienteId;
    telf.innerHTML = cliente.telefono;
    fechaComp.innerHTML = cliente.fechaPago;
    monto.innerHTML = cliente.montoPago;
    let whatsapp = document.getElementById('whatsapp')
    let link = 'http://wa.me/51' + cliente.telefono
    whatsapp.href = link
    whatsapp.innerHTML = "Enviar WhatsApp"
}
var mensaje = "";
function mostrarMensaje(cliente) {
    llenarTabla(cliente);
    var promesaInterbank = "Sr.(a) *" + cliente.nombres + "* Según lo acordado telefónicamente usted se compromete a efectuar el pago correspondiente de S/. *" + cliente.montoPago + "* el día *" + cliente.fechaPago + "* del producto *" + cliente.tipoProducto + "*  Número de cuenta *" + cliente.numeroProducto + "*.\n"
        + "\nRealice el pago en la agencia del *Banco BBVA* más cercana, donde se dirige a ventanilla indicando el *código pago legal* 248 (Soles) o 249 (Dólares) adicionando el número de su DNI o RUC del titular de la cuenta."
        + "\n\nQuedo a la espera del envió del voucher a través de este medio, gracias."
        + "\n\n\nCuenta bancaria"
        + "\n001104024900000023 - (Soles)"
        + "\n01140200490000002359 (Soles)"
        + "\n\n\nCuenta interbancaria"
        + "\n001104024900000031 - (Dolares)"
        + "\n01140200490000003152 (Dolares)";
    var promesaVentanilla = "Sr.(a) *" + cliente.nombres + "* Según lo acordado telefónicamente usted se compromete a efectuar el pago correspondiente a S/. *" + cliente.montoPago + "* el día *" + cliente.fechaPago + "* del producto *" + cliente.tipoProducto + "*  Número de cuenta *" + cliente.numeroProducto + "*.\n"
        + "\nRealice el pago en la agencia del *Banco BBVA* más cercana, donde se dirige a ventanilla indicando el *código pago legal* 248 (Soles) o 249 (Dólares) adicionando el número de su DNI o RUC del titular de la cuenta."
        + "\n\nQuedo a la espera del envió del voucher a través de este medio, gracias.";
    var recordatorio = "Sr.(a) *" + cliente.nombres + "* le recordamos que tiene una promesa incumplida con el *Banco BBVA* por el monto de S/. *" + cliente.montoPago + "* .Para que Ud. no pierda la campaña y su deuda no genere mayor interés, confírmenos su reprogramación para el día de HOY. Gracias."


    var campaña = cliente.nombres + ', *Banco BBVA* tiene un Dscto Especial *PRE_APROBADO*, cancela tu Producto *' + cliente.tipoProducto + '* con *S/.' +
        cliente.montoPago + '* , Previa evaluación, \n*ACTIVALO* comunicándote por este medio.\n\n Tramite su *CONSTANCIA DE NO ADEUDO* y Evite seguir mantendiendo un reporte negativo en las centrales de riesgo.<br><br>Dscto válido hasta: *' + cliente.fechaPago + '*'
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
    }
}

document.getElementById('tipoMensaje').addEventListener('change', function (event) {
    var opcionSeleccionada = event.target.value;//obtiene el valor de la opcion seleccionada

    var fechaDiv = document.getElementById('fechaDiv');
    var telefonoDiv = document.getElementById('telefonoDiv');
    var tipoProductoDiv = document.getElementById('tipoProductoDiv');
    var numeroProductoDiv = document.getElementById('numeroProductoDiv');
    var codClienteDiv = document.getElementById('idClienteDiv');

    if (opcionSeleccionada == 'recordatorio') {
        fechaDiv.style.display = 'none';
        telefonoDiv.style.display = 'none';
        tipoProductoDiv.style.display = 'none';
        numeroProductoDiv.style.display = 'none';

    } else if(opcionSeleccionada=="campaña"){
        codClienteDiv.style.display = 'none';
        numeroProductoDiv.style.display="none";
    }else{
        fechaDiv.style.display = 'block';
        telefonoDiv.style.display = 'block';
        tipoProductoDiv.style.display = 'block';
        numeroProductoDiv.style.display = 'block';
    }
})
