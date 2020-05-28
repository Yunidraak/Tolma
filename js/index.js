
function draw() {
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");

        ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.fillRect(10, 10, 50, 50);

        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        ctx.fillRect(30, 30, 50, 50);
    }
}

draw()

function fx00() {
    if (document.getElementById('nom').value === 'Exemple : Trompe') {
        document.getElementById('nom').value = '';
    }
}

function fx01() {
    if (document.getElementById('nom').value === '') {
        document.getElementById('nom').value = 'Exemple : Trompe';
    }
}

function fx10() {
    if (document.getElementById('prenom').value === 'Exemple : Donald') {
        document.getElementById('prenom').value = '';
    }
}

function fx11() {
    if (document.getElementById('prenom').value === '') {
        document.getElementById('prenom').value = 'Exemple : Donald';
    }
}

function fx20() {
    if (document.getElementById('email').value === 'Ex. : jaime@les.kiwis') {
        document.getElementById('email').value = '';
    }
}

function fx21() {
    if (document.getElementById('email').value === '') {
        document.getElementById('email').value = 'Ex. : jaime@les.kiwis';
    }
}

function fx30() {
    if (document.getElementById('nompre').value === 'Patrick ?') {
        document.getElementById('nompre').value = '';
    }
}

function fx31() {
    if (document.getElementById('nompre').value === '') {
        document.getElementById('nompre').value = 'Patrick ?';
    }
}

function fx40() {
    if (document.getElementById('sujet').value === 'Un bug ?') {
        document.getElementById('sujet').value = '';
    }
}

function fx41() {
    if (document.getElementById('sujet').value === '') {
        document.getElementById('sujet').value = 'Un bug ?';
    }
}

function coucou() {
    let audio = document.querySelector("audio");
    audio.play();
}

function er() {
    let audio = document.querySelector("audio");
    audio.play();
    setTimeout(ham, 4796)
}

function ham() {
    document.getElementById("ph").src = "../MEDIAS/ham.jpg";
    setTimeout(dis, 11849)
}

function dis() {
    document.getElementById("ph").src = "../MEDIAS/empty.png";
}

function kiwi() {
    setTimeout(kiwi0, 31000);
}

function kiwi0() {
    let audio1 = document.querySelector("audio");
    audio1.play();
}

let xphoto = "gégé";
function fxphoto(myRadio) {
    xphoto = myRadio.value;
}

function fxp() {
    if (document.getElementById("nom").value === "Exemple : Trompe" || document.getElementById("nom").value === "") {
        let xnom = "Trompe";
        localStorage.setItem("snom", xnom);
    } else {
        let xnom = document.getElementById("nom").value;
        localStorage.setItem("snom", xnom);
    }

    if (document.getElementById("prenom").value === "Exemple : Donald" || document.getElementById("prenom").value === "Exemple : Donald") {
        let xprenom = "Donald";
        localStorage.setItem("sprenom", xprenom);
    } else {
        let xprenom = document.getElementById("prenom").value;
        localStorage.setItem("sprenom", xprenom);
    }

    localStorage.setItem("sphoto", xphoto);
    let xdate0 = document.getElementById("date0").value;
    localStorage.setItem("sdate0", xdate0);
    let xdate1 = document.getElementById("date1").value;
    localStorage.setItem("sdate1", xdate1);
    let xfun = document.getElementById("fun").value;
    localStorage.setItem("sfun", xfun);
    if (document.getElementById("email").value === "Ex. : jaime@les.kiwis" || document.getElementById("email").value === "") {
        let xemail = "une quelconque adresse email";
        localStorage.setItem("semail", xemail);
    } else {
        let xemail = document.getElementById("email").value;
        localStorage.setItem("semail", xemail);
    }
}

document.getElementById("carteh").style.visibility = "visible";
document.getElementById("nomprenomk").style.visibility = "hidden";
document.getElementById("photok").style.visibility = "hidden";
document.getElementById("datek").style.visibility = "hidden";
document.getElementById("funk").style.visibility = "hidden";
document.getElementById("emailk").style.visibility = "hidden";
document.getElementById("generator").style.visibility = "visible";

document.getElementById("nom0").innerHTML = localStorage.getItem("snom");
document.getElementById("prenom0").innerHTML = localStorage.getItem("sprenom");
document.getElementById("date00").innerHTML = localStorage.getItem("sdate0");
document.getElementById("date10").innerHTML = localStorage.getItem("sdate1");
document.getElementById("fun0").innerHTML = localStorage.getItem("sfun");
document.getElementById("email0").innerHTML = localStorage.getItem("semail");

function fxhs() {
    let audio = document.querySelector("audio");
    audio.play();
    document.getElementById("carteh").style.visibility = "hidden";
    document.getElementById("nomprenomk").style.visibility = "visible";
    document.getElementById("photok").style.visibility = "visible";
    document.getElementById("datek").style.visibility = "visible";
    document.getElementById("funk").style.visibility = "visible";
    document.getElementById("emailk").style.visibility = "visible";
    document.getElementById("generator").style.visibility = "hidden";
}

if (localStorage.getItem("sphoto") == "gégé") {
    document.getElementById("photo0").src = "../MEDIAS/gege.jpg";
} else if (localStorage.getItem("sphoto") == "mamie") {
    document.getElementById("photo0").src = "../MEDIAS/fossile.jpg";
} else if (localStorage.getItem("sphoto") == "mac") {
    document.getElementById("photo0").src = "../MEDIAS/mac.jpg";
} else if (localStorage.getItem("sphoto") == "rageux") {
    document.getElementById("photo0").src = "../MEDIAS/rageux.jpg";
} else if (localStorage.getItem("sphoto") == "fouine") {
    document.getElementById("photo0").src = "../MEDIAS/fouine.jpg";
} else if (localStorage.getItem("sphoto") == "creepy") {
    document.getElementById("photo0").src = "../MEDIAS/perv.png";
} else if (localStorage.getItem("sphoto") == "timothe") {
    document.getElementById("photo0").src = "../MEDIAS/kurt.jpg";
} else if (localStorage.getItem("sphoto") == "michel") {
    document.getElementById("photo0").src = "../MEDIAS/michel.jpg";
} else if (localStorage.getItem("sphoto") == "thomas") {
    document.getElementById("photo0").src = "../MEDIAS/thomas.jpeg";
} else if (localStorage.getItem("sphoto") == "santa") {
    document.getElementById("photo0").src = "../MEDIAS/santa.jpg";
} else if (localStorage.getItem("sphoto") == "tortue") {
    document.getElementById("photo0").src = "../MEDIAS/tortue.jpg";
} else if (localStorage.getItem("sphoto") == "dora") {
    document.getElementById("photo0").src = "../MEDIAS/dora.jpg";
} else {
    alert("Une erreur est survenue :( Cela est problablement arrivé car vous avez suprimmé vos données. Merci de re-remplir le formulaire");
}
