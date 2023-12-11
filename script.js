var imagen = document.getElementById('imagenPrincipal');
  var click = false;

  document.addEventListener('touchstart', function() {
    click = true;
    imagen.src = '/assets/boca-abierta.jpg';
    reproducirSonido('/assets/huh-sound.mp3');
  });

  document.addEventListener('touchend', function() {
    if (click) {
      click = false;
      imagen.src = '/assets/boca-cerrada.jpg';
    }
  });

  imagen.addEventListener('click', function() {
    reproducirSonido('/assets/huh-sound.mp3');
  });

  function reproducirSonido(url) {
    var sonido = new Audio(url);
    sonido.play();
  }