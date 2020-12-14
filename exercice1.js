let monTexte = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";

// Completer le code suivant pour afficher la longueur de la variable monTexte

alert(monTexte.length);


//Ajouter du code ci dessous pour réaliser la suite de l'exercice

let i = 0
while (monTexte[i] !== "i"){
    i++;
}
document.getElementById("position").innerHTML += i;

let chaineMaj = monTexte.toUpperCase();
document.getElementById("chaineMaj").innerHTML = chaineMaj;

let lettre = 0;
for (lettre of chaineMaj){
    if (lettre === "A"){
        alert("lettre A trouvé")
    }
}
