var imagen = document.getElementById('imagenPrincipal');
  var click = false;

  document.addEventListener('mousedown', function() {
    click = true;
    imagen.src = '/assets/boca-abierta.jpg';
    
  });

  document.addEventListener('mouseup', function() {
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