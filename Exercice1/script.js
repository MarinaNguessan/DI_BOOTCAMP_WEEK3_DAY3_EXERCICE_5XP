// EXERCICE 1

/* Partie I */
//@Description: appelons une fonction après de 2 secondes

window.load = setTimeout(function(){
    alert("Hello World")

}, 2000);

/*Partie II */
//@Description: Appelons une fonction après 2 secondes, elle ajoutera un nouveau paragraphe au fichier <div id="container">

let NewItem = document.getElementById('container');

window.load = setTimeout(function(){
    //newItem.appendChild('p: Hello World' )
    NewItem.innerHTML= "<p>Hello World!</p>"
}, 2000); 

/* Partie III */
//@Decription:Appelons une fonction toutes les 2 secondes, elle ajoutera un nouveau paragraphe au fichier <div id="container">
function CreateParagraph() {
    let NewBalise = document.createElement('p');
    let NewText = document.createTextNode("Hello World!");
    if(NewItem.children.length < 5){
        NewBalise.appendChild(NewText); // Stopper l'affichage des paragraphes à 5 paragraphes
        NewItem.appendChild(NewBalise);
    } else {
        Delete()
    }
    
}
let timer = setInterval(CreateParagraph, 2000);

function Delete(){
    clearInterval(timer) /*Creation du button clearInterval */
}




