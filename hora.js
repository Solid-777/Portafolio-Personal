// Espera a que todo el documento HTML esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {

  // Mensaje de bienvenida
  // Muestra una alerta
  alert("¡Bienvenido/a a mi Portafolio.");


  //  Muestra Fecha y Hora Actual
  const nodeFechaHora = document.getElementById('fecha-hora');

  if (nodeFechaHora) {
    function actualizarReloj() {
      const ahora = new Date();
      
      
      const opciones = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
      };
      
      // se inserta el texto formateado en el HTML
      nodeFechaHora.textContent = ahora.toLocaleDateString('es-ES', opciones);
    }

    // se ejecuta el reloj al actualizar
    actualizarReloj();
    
    // actualiza el reloj en tiempo real
    setInterval(actualizarReloj, 1000);
  }

});