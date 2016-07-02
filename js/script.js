/*var score = 0;
var multi = 1;

function clicker() {
    score = score + multi;
    document.getElementById("score").innerHTML = score;
}*/

/*function incrementer() {
    if (score >= 5) {
        multi = multi * 2;
        document.getElementById("multiplicateur").innerHTML = "Multiplicateur x" + multi;
    }
    
    else {
        alert("Vous êtes trop pauvre !");
    }
}*/

/*function incrementer() {
    if (score >= 5) {
        multi = multi * 2;
        score = score - 5;
        document.getElementById("multiplicateur").innerHTML = "Multiplicateur x" + multi;
    }
    
    else {
        alert("Vous êtes trop pauvre !");
    }
}*/

/*function incrementer() {
    if (score >= 5 * multi) {
        multi = multi * 2;
        score = score - 5;
        document.getElementById("multiplicateur").innerHTML = "Multiplicateur x" + multi;
        document.getElementById("prix").innerHTML = "Prix du multiplicateur de click  : " + 5 * multi;
        document.getElementById("score").innerHTML = score;
    }
    
    else {
        alert("Vous êtes trop pauvre !");
    }
}*/

var score = 0;
var multi = 1;

/*fonction +1 en cliquant sur le cookie.
Cette fonction permet que mon poney prenne en compte
le résultat de mon multiplicateur quand je l'ai payé.*/

function clicker() {
    score = score + multi;
    document.getElementById("score").innerHTML = score;

}

/*fonction +1 en cliquant sur le multiplicateur.
Cette fonction permet de faire en sorte que
mon mulitplicateur se multipli par lui même
si j'ai assez pour me le payer.
Soit 1x1 = 2 / 2 x 2 = 4 / 4 x 4 / etc*/

function incrementer() {
    if (score >= 5) {
        multi = multi * 2;
        score = score - 5;
        document.getElementById("multiplicateur").innerHTML = "Multiplicateur x" + multi;
        document.getElementById("prix").innerHTML = "Prix du multiplicateur de click  : " + 5 * multi;
        document.getElementById("score").innerHTML = score;
    }
    
    else {
        alert("Vous êtes en état de pauvreter, arrêtez de depenser tous vos poneys !");
    }
}