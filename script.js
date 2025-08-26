// Manejo del envío de formulario
function handleSubmit(e) {
  const form = document.getElementById('customForm');
  if (!form.checkValidity()) {
    return; // Navegador muestra mensajes de validación
  }

  const iframe = document.getElementById('hidden_iframe');
  iframe.addEventListener('load', function onLoad() {
    document.getElementById('successMsg').style.display = 'block';
    form.reset();
    iframe.removeEventListener('load', onLoad);
  });
}
