
document.getElementById("indice1").style.display = "none";
document.getElementById("indice2").style.display = "none";
document.getElementById("indice3").style.display = "none";
document.getElementById("enigmepassee").style.display = "none";
document.getElementById("enigmefaite").style.display = "none";
document.getElementById("bonnereponse").style.display = "none";
document.getElementById("mauvaisereponse").style.display = "none";

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

    document.getElementById("bontonrepondreenigme").disabled = true;
    document.getElementById("bontonpasserenigme").disabled = true;

    document.getElementById("bontonrepondreenigme").style.color = "#faca2c";

    document.getElementById("enigmefaite").style.display = "block";
    localStorage.setItem("reponseenigmeprecedente", "bo");

}


function passerenigme() {


    document.getElementById("bontonrepondreenigme").disabled = true;
    document.getElementById("bontonpasserenigme").disabled = true;
    document.getElementById("bontonavoirindice").disabled = true;

    document.getElementById("bontonpasserenigme").style.color = "#faca2c";

    document.getElementById("enigmepassee").style.display = "block";
    
    localStorage.setItem("reponseenigmeprecedente", "mi");

}


function reponseenigme() {

    if (document.getElementById("reponse1").checked === true) {

        document.getElementById("mauvaisereponse").style.display = "block";
        [].slice.call(document.getElementsByClassName("repondant")).forEach(function (i) {
            i.innerHTML = "Hélêne";
        });
        [].slice.call(document.getElementsByClassName("genrerepondant")).forEach(function (i) {
            i.innerHTML = "elle";
        });
        document.getElementById("nonrepondant1").innerHTML = "Valodia";
        document.getElementById("nonrepondant2").innerHTML = "Wury";
        document.getElementById("bonnecouleurchapeau").innerHTML = "noir";
        document.getElementById("mauvaisecouleurchapeau").innerHTML = "blanc";
        changerlestyledesradiobuttons();

        localStorage.setItem("reponseenigmeprecedente", "bo");

    } else if (document.getElementById("reponse2").checked === true) {

        document.getElementById("bonnereponse").style.display = "block";
        [].slice.call(document.getElementsByClassName("repondant")).forEach(function(i) {
            i.innerHTML = "Wury";
        });
        [].slice.call(document.getElementsByClassName("genrerepondant")).forEach(function (i) {
            i.innerHTML = "il";
        });
        document.getElementById("nonrepondant1").innerHTML = "Hélêne";
        document.getElementById("nonrepondant2").innerHTML = "Heitor";
        document.getElementById("bonnecouleurchapeau").innerHTML = "blanc";
        document.getElementById("mauvaisecouleurchapeau").innerHTML = "noir";
        changerlestyledesradiobuttons();

        localStorage.setItem("reponseenigmeprecedente", "ay");

    } else if (document.getElementById("reponse3").checked === true) {

        document.getElementById("mauvaisereponse").style.display = "block";
        [].slice.call(document.getElementsByClassName("repondant")).forEach(function (i) {
            i.innerHTML = "Heitor";
        });
        [].slice.call(document.getElementsByClassName("genrerepondant")).forEach(function (i) {
            i.innerHTML = "il";
        });
        document.getElementById("nonrepondant1").innerHTML = "Wury";
        document.getElementById("nonrepondant2").innerHTML = "Valodia";
        document.getElementById("bonnecouleurchapeau").innerHTML = "noir";
        document.getElementById("mauvaisecouleurchapeau").innerHTML = "blanc";
        changerlestyledesradiobuttons();

        localStorage.setItem("reponseenigmeprecedente", "bo");

    } else if (document.getElementById("reponse4").checked === true) {

        document.getElementById("mauvaisereponse").style.display = "block";
        [].slice.call(document.getElementsByClassName("repondant")).forEach(function (i) {
            i.innerHTML = "Valodia";
        });
        [].slice.call(document.getElementsByClassName("genrerepondant")).forEach(function (i) {
            i.innerHTML = "elle";
        });
        document.getElementById("nonrepondant1").innerHTML = "Heitor";
        document.getElementById("nonrepondant2").innerHTML = "Hélêne";
        document.getElementById("bonnecouleurchapeau").innerHTML = "blanc";
        document.getElementById("mauvaisecouleurchapeau").innerHTML = "noir";
        changerlestyledesradiobuttons();

        localStorage.setItem("reponseenigmeprecedente", "bo");

    } else {

        passerenigme();

    }

    document.getElementById("reponse1").disabled = true;
    document.getElementById("reponse2").disabled = true;
    document.getElementById("reponse3").disabled = true;
    document.getElementById("reponse4").disabled = true;
    document.getElementById("bontonavoirindice").disabled = true;
    document.getElementById("bontonconfirmation").disabled = true;

}

function changerlestyledesradiobuttons() {

    document.head.appendChild(document.createElement("style")).innerHTML = ".labelderadiobutton {text-color: #bfa17b;}";
    document.head.appendChild(document.createElement("style")).innerHTML = ".radiobutton {border: calc(2px + 0.125vw) solid #bfa17b;}";
    document.head.appendChild(document.createElement("style")).innerHTML = ".labelderadiobutton:hover input ~ .radiobutton {background-color: rgba(0, 0, 0, 0);}";
    document.head.appendChild(document.createElement("style")).innerHTML = ".labelderadiobutton .radiobutton:after {background: #faca2c;}";

}