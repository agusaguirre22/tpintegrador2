console.log("DocOk")

const InputNombre = document.getElementById("Nombre");

const InputEmail = document.getElementById("Email");

const InputApellido = document.getElementById("Apellido");

const pMensajeNombre = document.getElementById("MensajeNombre");

const pMensajeApellido = document.getElementById("MensajeApellido");

const pMensajeEmail = document.getElementById("MensajeEmail");

const botonResumen=document.getElementById("Resumen");

const expRegular =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const pMensajeCantidad = document.getElementById("MensajeCantidad")

const cantidad = document.getElementById("cantidad");
const categoria = document.getElementById("categoria");
const precioFinal = document.getElementById("precioFinal");


function validarNombre() {
    if(InputNombre.value ==="" ){
        alert("Complete Nombre");
    }
    else{
        pMensajeNombre.innerHTML= "Nombre valido";
    }
}

function validarApellido(){
    if(InputApellido.value===""){
        alert("Complete Apellido");
    }
    else{
        pMensajeApellido.innerHTML="Apellido valido";
    }
}
 
function validarEmail(){
    if(!expRegular.test(InputEmail.value)){
        alert("Correo Electronico invalido");
    }
    else{
        pMensajeEmail.innerHTML="Email valido";
    }
}


function validarCantidad(){
    if(cantidad.value ==="" ){
        alert("Ingrese una cantidad validad");
    }
    else{
        pMensajeCantidad.innerHTML= "Cantidad correcta";
    }
}

botonResumen.addEventListener("click" , validarNombre);

botonResumen.addEventListener("click" , validarApellido);

botonResumen.addEventListener("click", validarEmail);

botonResumen.addEventListener("click", validarCantidad);


function calcularResultado(){

    precioFinal.innerHTML = "Total a pagar: $ " + categoria.value * cantidad.value;
}

botonResumen.addEventListener("click", calcularResultado);



  function limpiarFormulario() {
    document.getElementById("myForm").reset();
    document.getElementById("borrarCartel").reset();
  }
