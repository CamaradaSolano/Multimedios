
//api
let url = "https://paginas-web-cr.com/Api/apis/";
let autenticar = "apis/AutenticarUsuario.php";


function iniciarSesion() {
  // Obtener elementos del formulario
  const inputCorreo = document.getElementById('floatingInput');
  const inputContraseña = document.getElementById('floatingPassword');
  const botonEnviar = document.querySelector('.btn-primary');

  // Validar correo electrónico y contraseña (opcional, mejorar según sus requisitos)
  if (!validarCorreoElectronico(inputCorreo.value)) {
    alert('Ingrese una dirección de correo electrónico válida.');
    return;
  }
  if (inputContraseña.value.length < 4) {
    alert('La contraseña debe tener al menos 6 caracteres.');
    return;
  }

  // Deshabilitar el botón de envío para evitar múltiples envíos
  botonEnviar.disabled = true;

  // Preparar datos de inicio de sesión
  const datosInicioSesion = {
    correo: inputCorreo.value,
    contrasena: inputContraseña.value,
  };

  // Enviar solicitud de inicio de sesión
  fetch(url + autenticar, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datosInicioSesion),
  })
  .then(respuesta => respuesta.json())
  .then(datos => {
    if (datos.success) {
      // Manejar el inicio de sesión exitoso (por ejemplo, redirigir a otra página, establecer el almacenamiento de sesión)
      console.log('Inicio de sesión exitoso:', datos.message);
      // Reemplace con su acción deseada después de un inicio de sesión exitoso
      window.location.href = 'your_success_page.html'; // Ejemplo de redirección
    } else {
      // Manejar el error de inicio de sesión
      console.error('Error de inicio de sesión:', datos.message);
      alert('Falló el inicio de sesión. Verifique sus credenciales e intente nuevamente.');
      botonEnviar.disabled = false; // Rehabilitar el botón de envío
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Ocurrió un error durante el inicio de sesión. Inténtelo de nuevo más tarde.');
    botonEnviar.disabled = false; // Rehabilitar el botón de envío
  });
}

// Función opcional de validación de correo electrónico (mejore según sus necesidades)
function validarCorreoElectronico(correo) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(correo).toLowerCase());
}

// Adjuntar un detector de eventos al botón de envío
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el envío predeterminado del formulario
  iniciarSesion();
});
