var score = 0;
var multi = 1;

function clicker() {
    score = score + multi;
    document.getElementById("clicker").innerHTML = score;
}

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

function incrementer() {
    if (score >= 5 * multi) {
        multi = multi * 2;
        score = score - 5;
        document.getElementById("multiplicateur").innerHTML = "Multiplicateur x" + multi;
        document.getElementById("prix").innerHTML = "Prix du multiplicateur de click  : " + 5 * multi;
        document.getElementById("clicker").innerHTML = score;
    }
    
    else {
        alert("Vous êtes trop pauvre !");
    }
}