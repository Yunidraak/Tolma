
document.getElementById("indice1").style.display = "none";
document.getElementById("indice2").style.display = "none";
document.getElementById("indice3").style.display = "none";
document.getElementById("bonnereponse").style.display = "none";
document.getElementById("mauvaisereponse").style.display = "none";
document.getElementById("enigmesafaire").style.display = "none";

if (localStorage.getItem("reponseenigmeprecedente") === "ay" || localStorage.getItem("reponseenigmeprecedente") === "mi" || localStorage.getItem("reponseenigmeprecedente") === "aymi" || localStorage.getItem("reponseenigmeprecedente") === "ayay" || localStorage.getItem("reponseenigmeprecedente") === "miay" || localStorage.getItem("reponseenigmeprecedente") === "mimi") {

    // Ne rien faire

} else {

    document.getElementById("enigmesfaites").style.display = "none";
    document.getElementById("enigmesafaire").style.display = "block";

}

var indiceactuel = 1;

function allowDrop(ev) {

    ev.preventDefault();

}

function drag(ev) {

    ev.dataTransfer.setData("text", ev.target.id);

}

function drop(ev) {

    divdrag1 = document.getElementById("drag1");

    ev.preventDefault();
    
    try {

        remplissementcible = document.getElementById(ev.target.id).contains(divdrag1);
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));

    } catch (Erreur) {

        if (Erreur instanceof TypeError) {

            // Si le div cible contient déjà un div

            // Ne rien faire

        }

    }

}

function donnerindice() {

    if (window.indiceactuel == 1) {

        document.getElementById("indice1").style.display = "block";
        window.indiceactuel = 2;
        document.getElementById("indicedemande").innerHTML = "suplémentaire";

    } else if (window.indiceactuel == 2) {

        document.getElementById("indice2").style.display = "block";
        window.indiceactuel = 3;

    } else {

        document.getElementById("indice3").style.display = "block";
        document.getElementById("bontonavoirindice").disabled = true;

    }

}

function passerenigme() {

    document.location.reload(true);

}

function repondreenigme() {

    document.getElementById("bontonrepondreenigme").disabled = true;
    document.getElementById("bontonpasserenigme").disabled = true;
    document.getElementById("bontonavoirindice").disabled = true;

    document.getElementById("bontonrepondreenigme").style.color = "#faca2c";

    divdrop1 = document.getElementById("hexagone1"),
    divdrop2 = document.getElementById("hexagone2"),
    divdrop3 = document.getElementById("hexagone3"),
    divdrop4 = document.getElementById("hexagone4"),
    divdrop5 = document.getElementById("hexagone5"),
    divdrop6 = document.getElementById("hexagone6"),
    divdrop7 = document.getElementById("hexagone7"),
    divdrop8 = document.getElementById("hexagone8"),
    divdrop9 = document.getElementById("hexagone9");

    divdrag1 = document.getElementById("drag1"),
    divdrag2 = document.getElementById("drag2"),
    divdrag3 = document.getElementById("drag3"),
    divdrag4 = document.getElementById("drag4"),
    divdrag5 = document.getElementById("drag5"),
    divdrag6 = document.getElementById("drag6"),
    divdrag7 = document.getElementById("drag7"),
    divdrag8 = document.getElementById("drag8"),
    divdrag9 = document.getElementById("drag9");

    if (divdrop1.contains(divdrag9) === true && divdrop2.contains(divdrag1) === true && divdrop3.contains(divdrag2) === true && divdrop4.contains(divdrag4) === true && divdrop5.contains(divdrag6) === true && divdrop6.contains(divdrag5) === true && divdrop7.contains(divdrag7) === true && divdrop8.contains(divdrag8) === true && divdrop9.contains(divdrag3) === true) {

        document.getElementById("bonnereponse").style.display = "block";

        if (localStorage.getItem("reponseenigmeprecedente") === "ay") {

            localStorage.setItem("reponseenigmeprecedente", "ayay");

        } else if (localStorage.getItem("reponseenigmeprecedente") === "mi") {

            localStorage.setItem("reponseenigmeprecedente", "miay");

        }

    } else if (divdrop1.contains(divdrag9) === true && divdrop2.contains(divdrag2) === true && divdrop3.contains(divdrag1) === true && divdrop4.contains(divdrag5) === true && divdrop5.contains(divdrag6) === true && divdrop6.contains(divdrag4) === true && divdrop7.contains(divdrag8) === true && divdrop8.contains(divdrag7) === true && divdrop9.contains(divdrag3) === true) {

        document.getElementById("bonnereponse").style.display = "block";

        if (localStorage.getItem("reponseenigmeprecedente") === "ay") {

            localStorage.setItem("reponseenigmeprecedente", "ayay");

        } else if (localStorage.getItem("reponseenigmeprecedente") === "mi") {

            localStorage.setItem("reponseenigmeprecedente", "miay");

        }

    } else if (divdrop1.contains(divdrag3) === true && divdrop2.contains(divdrag7) === true && divdrop3.contains(divdrag8) === true && divdrop4.contains(divdrag4) === true && divdrop5.contains(divdrag6) === true && divdrop6.contains(divdrag5) === true && divdrop7.contains(divdrag1) === true && divdrop8.contains(divdrag2) === true && divdrop9.contains(divdrag9) === true) {

        document.getElementById("bonnereponse").style.display = "block";

        if (localStorage.getItem("reponseenigmeprecedente") === "ay") {

            localStorage.setItem("reponseenigmeprecedente", "ayay");

        } else if (localStorage.getItem("reponseenigmeprecedente") === "mi") {

            localStorage.setItem("reponseenigmeprecedente", "miay");

        }

    } else if (divdrop1.contains(divdrag3) === true && divdrop2.contains(divdrag8) === true && divdrop3.contains(divdrag7) === true && divdrop4.contains(divdrag5) === true && divdrop5.contains(divdrag6) === true && divdrop6.contains(divdrag4) === true && divdrop7.contains(divdrag2) === true && divdrop8.contains(divdrag1) === true && divdrop9.contains(divdrag9) === true) {

        document.getElementById("bonnereponse").style.display = "block";

        if (localStorage.getItem("reponseenigmeprecedente") === "ay") {

            localStorage.setItem("reponseenigmeprecedente", "ayay");

        } else if (localStorage.getItem("reponseenigmeprecedente") === "mi") {

            localStorage.setItem("reponseenigmeprecedente", "miay");

        }

    } else {

        document.getElementById("mauvaisereponse").style.display = "block";

        if (localStorage.getItem("reponseenigmeprecedente") === "ay") {

            localStorage.setItem("reponseenigmeprecedente", "aymi");

        } else if (localStorage.getItem("reponseenigmeprecedente") === "mi") {

            localStorage.setItem("reponseenigmeprecedente", "mimi");

        }

    }

}