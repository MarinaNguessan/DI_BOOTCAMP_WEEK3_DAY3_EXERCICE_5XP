
/**
 * @Auteur: N'GUESSAN MARINA
 */
/*  ajoutons la fonctionnalité qui nous permettra de faire glisser le fichier box et de le déposer dans le fichier target*/

let DivBox = document.getElementById("box")
DivBox.setAttribute('draggable','true');

DivBox.addEventListener("dragstart", function(event) {
  event.target.style.backgroundColor = "lightred";
});

DivBox.addEventListener("dragend", function(event) {
    event.target.style.backgroundColor = "lightgreen";
    let _x = event.clientX;
    let _y = event.clientY;
    console.log(event)
    event.target.style.left = _x + "px";
    event.target.style.top = _y + "px";
    event.target.style.position = "absolute"; 
  });