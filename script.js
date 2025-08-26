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

// --- Playlist de fondos ---
const playlist = [
  "video/El Autocentro más Moderno PT.mp4",
  "video/VT 30 seg - XBRI - BREAK FUTEBOL.mp4",
  "video/XBRI_LUBRIFICANTES.mp4",
]; // pon tus rutas aquí

const video = document.getElementById("bg-video");
let i = Math.floor(Math.random() * playlist.length); // empieza aleatorio (opcional)

function playIndex(idx) {
  // cambiar la fuente y reproducir
  video.src = playlist[idx];
  video.load();
  const p = video.play();
  if (p && typeof p.catch === "function") p.catch(() => {}); // evita warnings de autoplay
}

// cuando termine, pasa al siguiente
video.addEventListener("ended", () => {
  i = (i + 1) % playlist.length;
  playIndex(i);
});

// iniciar al cargar la página
document.addEventListener("DOMContentLoaded", () => playIndex(i));