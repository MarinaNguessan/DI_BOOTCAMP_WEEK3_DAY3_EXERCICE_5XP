//@Auteur: N'GUESSAN MARINA

/* Utilisation de setInterval pour déplacer le <div id="animate">vers la droite du <div id="container">, lorsque le bouton est cliqué */


function myMove() {
    let DivAnimate = document.getElementById("animate");   
    let pos = 0;
    let id = setInterval(frame, 1);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++; 
        DivAnimate.style.left = pos + 'px'; 
      }
    }
  }