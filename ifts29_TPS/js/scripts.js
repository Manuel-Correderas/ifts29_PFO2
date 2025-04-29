// Validación del formulario
document.querySelector("form").addEventListener("submit", function(event) {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
  
    if (!nombre || !apellido || !email || !telefono) {
      alert("Por favor, completá todos los campos obligatorios.");
      event.preventDefault();
    } else {
      alert("Formulario enviado correctamente. ¡Gracias!");
    }
  });
  
  // Modo Oscuro/Claro
  const toggleModeBtn = document.getElementById('toggle-mode');
  toggleModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });
  
  // Cargar preferencia de modo
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }
  
  // Mostrar/Ocultar formulario
  const toggleFormBtn = document.getElementById('toggle-form');
  toggleFormBtn.addEventListener('click', () => {
    const form = document.querySelector('form');
    if (form.style.display === 'none') {
      form.style.display = 'inline-block';
    } else {
      form.style.display = 'none';
    }
  });
  
  // Contador de visitas
  let visitas = localStorage.getItem('visitas') || 0;
  visitas++;
  localStorage.setItem('visitas', visitas);
  document.getElementById('visit-count').innerText = `Esta página fue visitada ${visitas} veces.`;
  
  function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('active');
  }
  