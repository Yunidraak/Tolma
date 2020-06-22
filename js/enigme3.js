document.getElementById("indice1").style.display = "none";
document.getElementById("indice2").style.display = "none";
document.getElementById("indice3").style.display = "none";
document.getElementById("bonnereponse").style.display = "none";
document.getElementById("mauvaisereponse").style.display = "none";
document.getElementById("enigmesafaire").style.display = "none";

if (localStorage.getItem("reponseenigmeprecedente") === "ayay" || localStorage.getItem("reponseenigmeprecedente") === "aymi" || localStorage.getItem("reponseenigmeprecedente") === "miay" || localStorage.getItem("reponseenigmeprecedente") === "mimi" || localStorage.getItem("reponseenigmeprecedente") === "ayayay" || localStorage.getItem("reponseenigmeprecedente") === "ayaymi" || localStorage.getItem("reponseenigmeprecedente") === "aymiay" || localStorage.getItem("reponseenigmeprecedente") === "miayay" || localStorage.getItem("reponseenigmeprecedente") === "aymimi" || localStorage.getItem("reponseenigmeprecedente") === "miaymi" || localStorage.getItem("reponseenigmeprecedente") === "mimiay" || localStorage.getItem("reponseenigmeprecedente") === "mimimi") {

    // Ne rien faire

} else {

    document.getElementById("enigmesfaites").style.display = "none";
    document.getElementById("enigmesafaire").style.display = "block";

}

var indiceactuel = 1;


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

function repondreenigme() {

    document.getElementById("code").disabled = true;
    document.getElementById("bontonrepondreenigme").disabled = true;
    document.getElementById("bontonavoirindice").disabled = true;

    document.getElementById("bontonrepondreenigme").style.color = "#faca2c";

    if (document.getElementById("code").value === "8000000000") {

        document.getElementById("bonnereponse").style.display = "block";

        if (localStorage.getItem("reponseenigmeprecedente") === "ayay") {

            localStorage.setItem("reponseenigmeprecedente", "ayayay");

        } else if (localStorage.getItem("reponseenigmeprecedente") === "aymi") {

            localStorage.setItem("reponseenigmeprecedente", "aymiay");

        } else if (localStorage.getItem("reponseenigmeprecedente") === "miay") {

            localStorage.setItem("reponseenigmeprecedente", "miayay");

        } else if (localStorage.getItem("reponseenigmeprecedente") === "mimi") {

            localStorage.setItem("reponseenigmeprecedente", "mimiay");

        }

    } else {

        document.getElementById("mauvaisereponse").style.display = "block";

        if (localStorage.getItem("reponseenigmeprecedente") === "ayay") {

            localStorage.setItem("reponseenigmeprecedente", "ayaymi");

        } else if (localStorage.getItem("reponseenigmeprecedente") === "aymi") {

            localStorage.setItem("reponseenigmeprecedente", "aymimi");

        } else if (localStorage.getItem("reponseenigmeprecedente") === "miay") {

            localStorage.setItem("reponseenigmeprecedente", "miaymi");

        } else if (localStorage.getItem("reponseenigmeprecedente") === "mimi") {

            localStorage.setItem("reponseenigmeprecedente", "mimimi");

        }

    }

}
