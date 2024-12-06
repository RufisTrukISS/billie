let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Función para manejar el evento de clic en el botón "Enviar Mensaje"
document.getElementById('enviar').addEventListener('click', function(event) {
    // Evitar que el formulario se envíe (por si es un formulario real)
    event.preventDefault();

    // Obtener los valores ingresados en el formulario
    const nombre = document.getElementById('nombre').value;
    const numero = document.getElementById('numero').value;
    const correo = document.getElementById('correo').value;
    const tema = document.getElementById('tema').value;
    const mensaje = document.getElementById('mensaje').value;

    // Validación básica: Verificar si todos los campos están llenos
    if (!nombre || !numero || !correo || !tema || !mensaje) {
        alert('Por favor, complete todos los campos antes de enviar.');
        return;
    }

    // Mostrar los datos del formulario en el aviso
    const datosFormulario = `
        <strong>Nombre:</strong> ${nombre} <br>
        <strong>Número telefónico:</strong> ${numero} <br>
        <strong>Correo electrónico:</strong> ${correo} <br>
        <strong>Tema:</strong> ${tema} <br>
        <strong>Mensaje:</strong> <br> ${mensaje}
    `;

    // Mostrar los datos en el div correspondiente
    const resultadoDatos = document.getElementById('resultadoDatos');
    resultadoDatos.innerHTML = datosFormulario;
    document.getElementById('datosFormulario').style.display = 'block'; // Mostrar el div de datos

    // Mostrar el mensaje de éxito en otro aviso
    const mensajeExito = document.getElementById('mensajeExito');
    mensajeExito.style.display = 'block'; // Mostrar el div del mensaje de éxito

    // Limpiar los campos del formulario después de mostrar los mensajes
    setTimeout(function() {
        // Limpiar campos
        document.getElementById('nombre').value = '';
        document.getElementById('numero').value = '';
        document.getElementById('correo').value = '';
        document.getElementById('tema').value = '';
        document.getElementById('mensaje').value = '';
        
        // Ocultar el mensaje de éxito después de 2 segundos
        mensajeExito.style.display = 'none';
    }, 4000);  // Limpiar después de 2 segundos para que el usuario vea los mensajes

});