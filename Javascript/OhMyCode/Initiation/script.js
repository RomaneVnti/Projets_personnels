//Je selectionne et je stocke le cercle

const btnRed = document.getElementById('btn-red');
const btnBlue = document.getElementById('btn-blue');
let compteur = 0; //Commencer le compteur à zéro 
let titre = document.getElementById('titre');



//Fonction qui incrémente 1 au click
function add(){
    compteur = compteur + 2;
    titre.innerText = "compteur";
    console.log(compteur);
}

//Déclaration des boutons et leur fonction
btnRed.addEventListener('click', function(){
    add();
});

btnBlue.addEventListener('click', function(){
    add();
})

//Ajouter les résultats dans un compteur



//Chronomètre et enlever les les points à la fin 
setTimeout(function(){
    btnRed.remove();
    btnBlue.remove();
}, 10000);









//Je crée une variable compteur qui débute à 0

//J'ajoute un évènement au cercle


// Au clic sur le cercle le nombre doit augmenter de 1