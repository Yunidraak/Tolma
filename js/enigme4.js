
document.getElementById("indice1").style.display = "none";
document.getElementById("indice2").style.display = "none";
document.getElementById("indice3").style.display = "none";
document.getElementById("bonnereponse").style.display = "none";
document.getElementById("mauvaisereponse").style.display = "none";
document.getElementById("enigmesafaire").style.display = "none";

if (localStorage.getItem("reponseenigmeprecedente") === "ayayay" || localStorage.getItem("reponseenigmeprecedente") === "ayaymi" || localStorage.getItem("reponseenigmeprecedente") === "aymiay" || localStorage.getItem("reponseenigmeprecedente") === "miayay" || localStorage.getItem("reponseenigmeprecedente") === "aymimi" || localStorage.getItem("reponseenigmeprecedente") === "miaymi" || localStorage.getItem("reponseenigmeprecedente") === "mimiay" || localStorage.getItem("reponseenigmeprecedente") === "mimimi" || localStorage.getItem("reponseenigmeprecedente") === "ayayayay" || localStorage.getItem("reponseenigmeprecedente") === "ayayaymi" || localStorage.getItem("reponseenigmeprecedente") === "ayaymiay" || localStorage.getItem("reponseenigmeprecedente") === "aymiayay" || localStorage.getItem("reponseenigmeprecedente") === "miayayay" || localStorage.getItem("reponseenigmeprecedente") === "ayaymimi" || localStorage.getItem("reponseenigmeprecedente") === "aymiaymi" || localStorage.getItem("reponseenigmeprecedente") === "aymimiay" || localStorage.getItem("reponseenigmeprecedente") === "miayaymi" || localStorage.getItem("reponseenigmeprecedente") === "miaymiay" || localStorage.getItem("reponseenigmeprecedente") === "mimiayay" || localStorage.getItem("reponseenigmeprecedente") === "aymimimi" || localStorage.getItem("reponseenigmeprecedente") === "miaymimi" || localStorage.getItem("reponseenigmeprecedente") === "mimiaymi" || localStorage.getItem("reponseenigmeprecedente") === "mimimiay" || localStorage.getItem("reponseenigmeprecedente") === "mimimimi") {

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


function responsive() {

    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    ctx.translate(0.5, 0.5);

    if (window.innerWidth < window.innerHeight) {

        // Si la largeur de la fenêtre est plus petite que sa hauteur, on calculera les proportions du canvas en vw

        tailleCanvasResponsive = window.innerWidth / 1.5,
        cote = window.innerWidth / 6,
        ecart = window.innerWidth / 30,
        distance = window.innerWidth / 12;

    } else {

        // Si la hauteur de la fenêtre est plus petite ou égale à sa largeur, on calculera les proportions du canvas en vh

        tailleCanvasResponsive = window.innerHeight / 2,
        cote = window.innerHeight / 8,
        ecart = window.innerHeight / 40,
        distance = window.innerHeight / 16;

    }

    canvas.width = tailleCanvasResponsive;
    canvas.height = tailleCanvasResponsive;
    canvas.style.width = tailleCanvasResponsive;
    canvas.style.height = tailleCanvasResponsive;

    // On donne au canvas une forme carrée et de bonne taille pour la fenêtre grâce aux calculs précédents


    ctx.beginPath();

    ctx.strokeStyle = "rgb(255, 255, 255)";
    ctx.lineWidth = 5 + ecart / 4;

    // On dessine en blanc


    ctx.strokeRect(0, 0, 4 * cote, 4 * cote);

    // On dessine un carré faisant le tour du canvas


    ctx.lineWidth = 2.5 + ecart / 8;

    ctx.strokeRect(0, 0, cote, cote);
    ctx.strokeRect(cote, 0, cote, cote);
    ctx.strokeRect(2 * cote, 0, cote, cote);
    ctx.strokeRect(3 * cote, 0, cote, cote);
    ctx.strokeRect(0, cote, cote, cote);
    ctx.strokeRect(cote, cote, cote, cote);
    ctx.strokeRect(2 * cote, cote, cote, cote);
    ctx.strokeRect(3 * cote, cote, cote, cote);
    ctx.strokeRect(0, 2 * cote, cote, cote);
    ctx.strokeRect(cote, 2 * cote, cote, cote);
    ctx.strokeRect(2 * cote, 2 * cote, cote, cote);
    ctx.strokeRect(3 * cote, 2 * cote, cote, cote);
    ctx.strokeRect(0, 3 * cote, cote, cote);
    ctx.strokeRect(cote, 3 * cote, cote, cote);
    ctx.strokeRect(2 * cote, 3 * cote, cote, cote);
    ctx.strokeRect(3 * cote, 3 * cote, cote, cote);

    // On dessine un quadrillage sur le canvas


    ctx.clearRect(ecart, ecart, 3 * cote, cote - 2 * ecart);
    ctx.clearRect(ecart, cote + ecart, 3 * cote, cote - 2 * ecart);
    ctx.clearRect(ecart, 2 * cote + ecart, 3 * cote, cote - 2 * ecart);
    ctx.clearRect(ecart, 3 * cote + ecart, 4 * cote, cote - 2 * ecart);

    // On efface le contenu de rectangles pour faire des ouvertures latérales aux salles sur le canvas


    ctx.clearRect(ecart, ecart, cote - 2 * ecart, 3 * cote);
    ctx.clearRect(cote + ecart, ecart, cote - 2 * ecart, 3 * cote);
    ctx.clearRect(2 * cote + ecart, ecart, cote - 2 * ecart, 3 * cote);
    ctx.clearRect(3 * cote + ecart, ecart, cote - 2 * ecart, 3 * cote);

    // On efface le contenu de rectangles pour faire des ouvertures verticales aux salles sur le canvas

    ctx.fillStyle = "rgb(250, 202, 44)";

    ctx.fillRect(2.5 + ecart / 8, 2.5 + ecart / 8, cote - 3 - ecart / 4, cote - 3 - ecart / 4);


    ctx.closePath();


    ctx.beginPath();

    ctx.fillStyle = "rgb(255, 0, 0)";

    // On dessine en rouge

    ctx.arc(distance, distance, ecart, 0, 7);

    // On dessine l'indicateur représentant Heitor sur le canvas

    ctx.fill();

    ctx.closePath();

}


window.onload = responsive();

// A la base window.onresize, mais ne permettait pas de répondre à l'énigme


var xIndicateur = 0,
xAncienIndicateur = 0,
xNouvelIndicateur = 0,
yIndicateur = 0,
yAncienIndicateur = 0,
yNouvelIndicateur = 0,
salle00 = 0,
salle10 = 0,
salle20 = 0,
salle30 = 0,
salle01 = 0,
salle11 = 0,
salle21 = 0,
salle31 = 0,
salle02 = 0,
salle12 = 0,
salle22 = 0,
salle32 = 0,
salle03 = 0,
salle13 = 0,
salle23 = 0,
salle33 = 0;

// Ces variables représenteront le nombre de fois où Heitor passe dans une pièce
// Leurs noms sont attribués en coordonnées non cartésiennes, salle21 = la salle de position (2;1)
// soit deux crans à droite et un cran en dessous de la salle00
// la salle00 se trouve donc en haut à gauche.


const log = document.getElementById("canvas");

document.addEventListener("keypress", touchePressee);

// On détecte si une touche a été pressée, ci c'est le cas, on lance la fonction touchePressee()


function touchePressee(e) {

    if (xIndicateur === 4 && yIndicateur === 3) {

        // Ne rien faire si Heitor est sorti

    } else if (document.getElementById("bontonrepondreenigme").disabled === true) {
            
        // Ne rien faire si le bouton de confirmation à été utilisé
        
    } else if(e.key === "z") {

        if (yIndicateur != 0) {

            xNouvelIndicateur = xIndicateur;
            yNouvelIndicateur = yIndicateur - 1;
            
            ctx.clearRect(distance / 2 + xIndicateur * cote, distance / 2 + yIndicateur * cote, distance, distance);

            ctx.beginPath();

            ctx.fillStyle = "rgb(255, 0, 0)";
            ctx.strokeStyle = "rgb(255, 0, 0)";

            ctx.strokeRect(distance + xAncienIndicateur * cote, distance + yAncienIndicateur * cote, (xIndicateur - xAncienIndicateur) * cote, (yIndicateur - yAncienIndicateur) * cote);
            ctx.strokeRect(distance + xIndicateur * cote, distance + yIndicateur * cote, (xNouvelIndicateur - xIndicateur) * cote, (yNouvelIndicateur - yIndicateur) * cote);
            ctx.arc(distance + xNouvelIndicateur * cote, distance + yNouvelIndicateur * cote, ecart, 0, 7);
            ctx.fill();

            ctx.closePath();

            xAncienIndicateur = xIndicateur,
            xIndicateur = xNouvelIndicateur,
            yAncienIndicateur = yIndicateur,
            yIndicateur = yNouvelIndicateur;

            if (xIndicateur === 0 && yIndicateur === 0) {

                salle00 = salle00 + 1;

            } else if (xIndicateur === 1 && yIndicateur === 0) {

                salle10 = salle10 + 1;

            } else if (xIndicateur === 2 && yIndicateur === 0) {

                salle20 = salle20 + 1;

            } else if (xIndicateur === 3 && yIndicateur === 0) {

                salle30 = salle30 + 1;

            } else if (xIndicateur === 0 && yIndicateur === 1) {

                salle01 = salle01 + 1;

            } else if (xIndicateur === 1 && yIndicateur === 1) {

                salle11 = salle11 + 1;

            } else if (xIndicateur === 2 && yIndicateur === 1) {

                salle21 = salle21 + 1;

            } else if (xIndicateur === 3 && yIndicateur === 1) {

                salle31 = salle31 + 1;

            } else if (xIndicateur === 0 && yIndicateur === 2) {

                salle02 = salle02 + 1;

            } else if (xIndicateur === 1 && yIndicateur === 2) {

                salle12 = salle12 + 1;

            } else if (xIndicateur === 2 && yIndicateur === 2) {

                salle22 = salle22 + 1;

            } else if (xIndicateur === 3 && yIndicateur === 2) {

                salle32 = salle32 + 1;

            } else if (xIndicateur === 0 && yIndicateur === 3) {

                salle03 = salle03 + 1;

            } else if (xIndicateur === 1 && yIndicateur === 3) {

                salle13 = salle13 + 1;

            } else if (xIndicateur === 2 && yIndicateur === 3) {

                salle23 = salle23 + 1;

            } else if (xIndicateur === 3 && yIndicateur === 3) {

                salle33 = salle33 + 1;

            }

        }

    } else if (e.key === "q") {

        if (xIndicateur != 0) {

            xNouvelIndicateur = xIndicateur - 1;
            yNouvelIndicateur = yIndicateur;
            
            ctx.clearRect(distance / 2 + xIndicateur * cote, distance / 2 + yIndicateur * cote, distance, distance);

            ctx.beginPath();

            ctx.fillStyle = "rgb(255, 0, 0)";
            ctx.strokeStyle = "rgb(255, 0, 0)";

            ctx.strokeRect(distance + xAncienIndicateur * cote, distance + yAncienIndicateur * cote, (xIndicateur - xAncienIndicateur) * cote, (yIndicateur - yAncienIndicateur) * cote);
            ctx.strokeRect(distance + xIndicateur * cote, distance + yIndicateur * cote, (xNouvelIndicateur - xIndicateur) * cote, (yNouvelIndicateur - yIndicateur) * cote);
            ctx.arc(distance + xNouvelIndicateur * cote, distance + yNouvelIndicateur * cote, ecart, 0, 7);
            ctx.fill();

            ctx.closePath();

            xAncienIndicateur = xIndicateur,
            xIndicateur = xNouvelIndicateur,
            yAncienIndicateur = yIndicateur,
            yIndicateur = yNouvelIndicateur;

            if (xIndicateur === 0 && yIndicateur === 0) {

                salle00 = salle00 + 1;

            } else if (xIndicateur === 1 && yIndicateur === 0) {

                salle10 = salle10 + 1;

            } else if (xIndicateur === 2 && yIndicateur === 0) {

                salle20 = salle20 + 1;

            } else if (xIndicateur === 3 && yIndicateur === 0) {

                salle30 = salle30 + 1;

            } else if (xIndicateur === 0 && yIndicateur === 1) {

                salle01 = salle01 + 1;

            } else if (xIndicateur === 1 && yIndicateur === 1) {

                salle11 = salle11 + 1;

            } else if (xIndicateur === 2 && yIndicateur === 1) {

                salle21 = salle21 + 1;

            } else if (xIndicateur === 3 && yIndicateur === 1) {

                salle31 = salle31 + 1;

            } else if (xIndicateur === 0 && yIndicateur === 2) {

                salle02 = salle02 + 1;

            } else if (xIndicateur === 1 && yIndicateur === 2) {

                salle12 = salle12 + 1;

            } else if (xIndicateur === 2 && yIndicateur === 2) {

                salle22 = salle22 + 1;

            } else if (xIndicateur === 3 && yIndicateur === 2) {

                salle32 = salle32 + 1;

            } else if (xIndicateur === 0 && yIndicateur === 3) {

                salle03 = salle03 + 1;

            } else if (xIndicateur === 1 && yIndicateur === 3) {

                salle13 = salle13 + 1;

            } else if (xIndicateur === 2 && yIndicateur === 3) {

                salle23 = salle23 + 1;

            } else if (xIndicateur === 3 && yIndicateur === 3) {

                salle33 = salle33 + 1;

            }

        }

    } else if (e.key === "s") {

        if (yIndicateur != 3) {

            xNouvelIndicateur = xIndicateur;
            yNouvelIndicateur = yIndicateur + 1;
            
            ctx.clearRect(distance / 2 + xIndicateur * cote, distance / 2 + yIndicateur * cote, distance, distance);

            ctx.beginPath();

            if (xNouvelIndicateur === 0 && yNouvelIndicateur === 1) {

                ctx.fillStyle = "rgb(250, 202, 44)";

                ctx.fillRect(10 + ecart / 2, 10 + ecart / 2, cote - 17 - ecart, cote - 17 - ecart);

            }

            ctx.fillStyle = "rgb(255, 0, 0)";
            ctx.strokeStyle = "rgb(255, 0, 0)";

            ctx.strokeRect(distance + xAncienIndicateur * cote, distance + yAncienIndicateur * cote, (xIndicateur - xAncienIndicateur) * cote, (yIndicateur - yAncienIndicateur) * cote);
            ctx.strokeRect(distance + xIndicateur * cote, distance + yIndicateur * cote, (xNouvelIndicateur - xIndicateur) * cote, (yNouvelIndicateur - yIndicateur) * cote);
            ctx.arc(distance + xNouvelIndicateur * cote, distance + yNouvelIndicateur * cote, ecart, 0, 7);
            ctx.fill();

            ctx.closePath();

            xAncienIndicateur = xIndicateur,
            xIndicateur = xNouvelIndicateur,
            yAncienIndicateur = yIndicateur,
            yIndicateur = yNouvelIndicateur;

            if (xIndicateur === 0 && yIndicateur === 0) {

                salle00 = salle00 + 1;

            } else if (xIndicateur === 1 && yIndicateur === 0) {

                salle10 = salle10 + 1;

            } else if (xIndicateur === 2 && yIndicateur === 0) {

                salle20 = salle20 + 1;

            } else if (xIndicateur === 3 && yIndicateur === 0) {

                salle30 = salle30 + 1;

            } else if (xIndicateur === 0 && yIndicateur === 1) {

                salle01 = salle01 + 1;

            } else if (xIndicateur === 1 && yIndicateur === 1) {

                salle11 = salle11 + 1;

            } else if (xIndicateur === 2 && yIndicateur === 1) {

                salle21 = salle21 + 1;

            } else if (xIndicateur === 3 && yIndicateur === 1) {

                salle31 = salle31 + 1;

            } else if (xIndicateur === 0 && yIndicateur === 2) {

                salle02 = salle02 + 1;

            } else if (xIndicateur === 1 && yIndicateur === 2) {

                salle12 = salle12 + 1;

            } else if (xIndicateur === 2 && yIndicateur === 2) {

                salle22 = salle22 + 1;

            } else if (xIndicateur === 3 && yIndicateur === 2) {

                salle32 = salle32 + 1;

            } else if (xIndicateur === 0 && yIndicateur === 3) {

                salle03 = salle03 + 1;

            } else if (xIndicateur === 1 && yIndicateur === 3) {

                salle13 = salle13 + 1;

            } else if (xIndicateur === 2 && yIndicateur === 3) {

                salle23 = salle23 + 1;

            } else if (xIndicateur === 3 && yIndicateur === 3) {

                salle33 = salle33 + 1;

            }

        }

    } else if (e.key === "d") {

        if (xIndicateur === 3 && yIndicateur === 3) {

            xNouvelIndicateur = xIndicateur + 1;
            yNouvelIndicateur = yIndicateur;

            ctx.clearRect(distance / 2 + xIndicateur * cote, distance / 2 + yIndicateur * cote, distance, distance);

            ctx.beginPath();

            ctx.fillStyle = "rgb(255, 0, 0)";
            ctx.strokeStyle = "rgb(255, 0, 0)";

            ctx.strokeRect(distance + xAncienIndicateur * cote, distance + yAncienIndicateur * cote, (xIndicateur - xAncienIndicateur) * cote, (yIndicateur - yAncienIndicateur) * cote);
            ctx.strokeRect(distance + xIndicateur * cote, distance + yIndicateur * cote, (xNouvelIndicateur - xIndicateur) * cote, (yNouvelIndicateur - yIndicateur) * cote);
            ctx.arc(distance + xNouvelIndicateur * cote, distance + yNouvelIndicateur * cote, ecart, 0, 7);
            ctx.fill();

            ctx.closePath();

            xAncienIndicateur = xIndicateur,
            xIndicateur = xNouvelIndicateur,
            yAncienIndicateur = yIndicateur,
            yIndicateur = yNouvelIndicateur;

            if (xIndicateur === 0 && yIndicateur === 0) {

                salle00 = salle00 + 1;

            } else if (xIndicateur === 1 && yIndicateur === 0) {

                salle10 = salle10 + 1;

            } else if (xIndicateur === 2 && yIndicateur === 0) {

                salle20 = salle20 + 1;

            } else if (xIndicateur === 3 && yIndicateur === 0) {

                salle30 = salle30 + 1;

            } else if (xIndicateur === 0 && yIndicateur === 1) {

                salle01 = salle01 + 1;

            } else if (xIndicateur === 1 && yIndicateur === 1) {

                salle11 = salle11 + 1;

            } else if (xIndicateur === 2 && yIndicateur === 1) {

                salle21 = salle21 + 1;

            } else if (xIndicateur === 3 && yIndicateur === 1) {

                salle31 = salle31 + 1;

            } else if (xIndicateur === 0 && yIndicateur === 2) {

                salle02 = salle02 + 1;

            } else if (xIndicateur === 1 && yIndicateur === 2) {

                salle12 = salle12 + 1;

            } else if (xIndicateur === 2 && yIndicateur === 2) {

                salle22 = salle22 + 1;

            } else if (xIndicateur === 3 && yIndicateur === 2) {

                salle32 = salle32 + 1;

            } else if (xIndicateur === 0 && yIndicateur === 3) {

                salle03 = salle03 + 1;

            } else if (xIndicateur === 1 && yIndicateur === 3) {

                salle13 = salle13 + 1;

            } else if (xIndicateur === 2 && yIndicateur === 3) {

                salle23 = salle23 + 1;

            } else if (xIndicateur === 3 && yIndicateur === 3) {

                salle33 = salle33 + 1;

            }

        } else if (xIndicateur != 3) {

            xNouvelIndicateur = xIndicateur + 1;
            yNouvelIndicateur = yIndicateur;
            
            ctx.clearRect(distance / 2 + xIndicateur * cote, distance / 2 + yIndicateur * cote, distance, distance);

            ctx.beginPath();

            if (xNouvelIndicateur === 1 && yNouvelIndicateur === 0) {

                ctx.fillStyle = "rgb(250, 202, 44)";

                ctx.fillRect(10 + ecart / 2, 10 + ecart / 2, cote - 17 - ecart, cote - 17 - ecart);

            }

            ctx.fillStyle = "rgb(255, 0, 0)";
            ctx.strokeStyle = "rgb(255, 0, 0)";

            ctx.strokeRect(distance + xAncienIndicateur * cote, distance + yAncienIndicateur * cote, (xIndicateur - xAncienIndicateur) * cote, (yIndicateur - yAncienIndicateur) * cote);
            ctx.strokeRect(distance + xIndicateur * cote, distance + yIndicateur * cote, (xNouvelIndicateur - xIndicateur) * cote, (yNouvelIndicateur - yIndicateur) * cote);
            ctx.arc(distance + xNouvelIndicateur * cote, distance + yNouvelIndicateur * cote, ecart, 0, 7);
            ctx.fill();

            ctx.closePath();

            xAncienIndicateur = xIndicateur,
            xIndicateur = xNouvelIndicateur,
            yAncienIndicateur = yIndicateur,
            yIndicateur = yNouvelIndicateur;

            if (xIndicateur === 0 && yIndicateur === 0) {

                salle00 = salle00 + 1;

            } else if (xIndicateur === 1 && yIndicateur === 0) {

                salle10 = salle10 + 1;

            } else if (xIndicateur === 2 && yIndicateur === 0) {

                salle20 = salle20 + 1;

            } else if (xIndicateur === 3 && yIndicateur === 0) {

                salle30 = salle30 + 1;

            } else if (xIndicateur === 0 && yIndicateur === 1) {

                salle01 = salle01 + 1;

            } else if (xIndicateur === 1 && yIndicateur === 1) {

                salle11 = salle11 + 1;

            } else if (xIndicateur === 2 && yIndicateur === 1) {

                salle21 = salle21 + 1;

            } else if (xIndicateur === 3 && yIndicateur === 1) {

                salle31 = salle31 + 1;

            } else if (xIndicateur === 0 && yIndicateur === 2) {

                salle02 = salle02 + 1;

            } else if (xIndicateur === 1 && yIndicateur === 2) {

                salle12 = salle12 + 1;

            } else if (xIndicateur === 2 && yIndicateur === 2) {

                salle22 = salle22 + 1;

            } else if (xIndicateur === 3 && yIndicateur === 2) {

                salle32 = salle32 + 1;

            } else if (xIndicateur === 0 && yIndicateur === 3) {

                salle03 = salle03 + 1;

            } else if (xIndicateur === 1 && yIndicateur === 3) {

                salle13 = salle13 + 1;

            } else if (xIndicateur === 2 && yIndicateur === 3) {

                salle23 = salle23 + 1;

            } else if (xIndicateur === 3 && yIndicateur === 3) {

                salle33 = salle33 + 1;

            }

        }

    }

}


onmousedown = sourisCliquee


function sourisCliquee() {

    if(window.event.which == 1) {

        coordonneesCanvas = document.getElementById("canvas").getBoundingClientRect();

        coordonneeGaucheCanvas = coordonneesCanvas.left + window.scrollX,
        coordonneeHautCanvas = coordonneesCanvas.top;

        coordonneeX = event.clientX - coordonneeGaucheCanvas,
        coordonneeY = event.clientY - coordonneeHautCanvas;

        if (coordonneeX >= 0 && coordonneeX <= tailleCanvasResponsive && coordonneeY >= 0 && coordonneeY <= tailleCanvasResponsive) {

            if (coordonneeX < cote) {

                xReel = 0;

            } else if (coordonneeX < 2 * cote) {

                xReel = 1;

            } else if (coordonneeX < 3 * cote) {

                xReel = 2;

            } else if (coordonneeX < 4 * cote) {

                xReel = 3;

            } else {

                // Ne rien faire

            } 
            
            if (coordonneeY < cote) {

                yReel = 0;

            } else if (coordonneeY < 2 * cote) {

                yReel = 1;

            } else if (coordonneeY < 3 * cote) {

                yReel = 2;

            } else if (coordonneeY < 4 * cote) {

                yReel = 3;

            } else {

                // Ne rien faire

            }

            if (xIndicateur === 4 && yIndicateur === 3) {

                // Ne rien faire si Heitor est sorti

            } else if (document.getElementById("bontonrepondreenigme").disabled === true) {

                // Ne rien faire si le bouton de confirmation à été utilisé
            
            } else if (xReel === xIndicateur && yReel === yIndicateur - 1) {

                xNouvelIndicateur = xIndicateur;
                yNouvelIndicateur = yIndicateur - 1;

                ctx.clearRect(distance / 2 + xIndicateur * cote, distance / 2 + yIndicateur * cote, distance, distance);

                ctx.beginPath();

                ctx.fillStyle = "rgb(255, 0, 0)";
                ctx.strokeStyle = "rgb(255, 0, 0)";

                ctx.strokeRect(distance + xAncienIndicateur * cote, distance + yAncienIndicateur * cote, (xIndicateur - xAncienIndicateur) * cote, (yIndicateur - yAncienIndicateur) * cote);
                ctx.strokeRect(distance + xIndicateur * cote, distance + yIndicateur * cote, (xNouvelIndicateur - xIndicateur) * cote, (yNouvelIndicateur - yIndicateur) * cote);
                ctx.arc(distance + xNouvelIndicateur * cote, distance + yNouvelIndicateur * cote, ecart, 0, 7);
                ctx.fill();

                ctx.closePath();

                xAncienIndicateur = xIndicateur,
                xIndicateur = xNouvelIndicateur,
                yAncienIndicateur = yIndicateur,
                yIndicateur = yNouvelIndicateur;

                if (xIndicateur === 0 && yIndicateur === 0) {

                    salle00 = salle00 + 1;

                } else if (xIndicateur === 1 && yIndicateur === 0) {

                    salle10 = salle10 + 1;

                } else if (xIndicateur === 2 && yIndicateur === 0) {

                    salle20 = salle20 + 1;

                } else if (xIndicateur === 3 && yIndicateur === 0) {

                    salle30 = salle30 + 1;

                } else if (xIndicateur === 0 && yIndicateur === 1) {

                    salle01 = salle01 + 1;

                } else if (xIndicateur === 1 && yIndicateur === 1) {

                    salle11 = salle11 + 1;

                } else if (xIndicateur === 2 && yIndicateur === 1) {

                    salle21 = salle21 + 1;

                } else if (xIndicateur === 3 && yIndicateur === 1) {

                    salle31 = salle31 + 1;

                } else if (xIndicateur === 0 && yIndicateur === 2) {

                    salle02 = salle02 + 1;

                } else if (xIndicateur === 1 && yIndicateur === 2) {

                    salle12 = salle12 + 1;

                } else if (xIndicateur === 2 && yIndicateur === 2) {

                    salle22 = salle22 + 1;

                } else if (xIndicateur === 3 && yIndicateur === 2) {

                    salle32 = salle32 + 1;

                } else if (xIndicateur === 0 && yIndicateur === 3) {

                    salle03 = salle03 + 1;

                } else if (xIndicateur === 1 && yIndicateur === 3) {

                    salle13 = salle13 + 1;

                } else if (xIndicateur === 2 && yIndicateur === 3) {

                    salle23 = salle23 + 1;

                } else if (xIndicateur === 3 && yIndicateur === 3) {

                    salle33 = salle33 + 1;

                }

            } else if (xReel === xIndicateur - 1 && yReel === yIndicateur) {

                xNouvelIndicateur = xIndicateur - 1;
                yNouvelIndicateur = yIndicateur;

                ctx.clearRect(distance / 2 + xIndicateur * cote, distance / 2 + yIndicateur * cote, distance, distance);

                ctx.beginPath();

                ctx.fillStyle = "rgb(255, 0, 0)";
                ctx.strokeStyle = "rgb(255, 0, 0)";

                ctx.strokeRect(distance + xAncienIndicateur * cote, distance + yAncienIndicateur * cote, (xIndicateur - xAncienIndicateur) * cote, (yIndicateur - yAncienIndicateur) * cote);
                ctx.strokeRect(distance + xIndicateur * cote, distance + yIndicateur * cote, (xNouvelIndicateur - xIndicateur) * cote, (yNouvelIndicateur - yIndicateur) * cote);
                ctx.arc(distance + xNouvelIndicateur * cote, distance + yNouvelIndicateur * cote, ecart, 0, 7);
                ctx.fill();

                ctx.closePath();

                xAncienIndicateur = xIndicateur,
                xIndicateur = xNouvelIndicateur,
                yAncienIndicateur = yIndicateur,
                yIndicateur = yNouvelIndicateur;

                if (xIndicateur === 0 && yIndicateur === 0) {

                    salle00 = salle00 + 1;

                } else if (xIndicateur === 1 && yIndicateur === 0) {

                    salle10 = salle10 + 1;

                } else if (xIndicateur === 2 && yIndicateur === 0) {

                    salle20 = salle20 + 1;

                } else if (xIndicateur === 3 && yIndicateur === 0) {

                    salle30 = salle30 + 1;

                } else if (xIndicateur === 0 && yIndicateur === 1) {

                    salle01 = salle01 + 1;

                } else if (xIndicateur === 1 && yIndicateur === 1) {

                    salle11 = salle11 + 1;

                } else if (xIndicateur === 2 && yIndicateur === 1) {

                    salle21 = salle21 + 1;

                } else if (xIndicateur === 3 && yIndicateur === 1) {

                    salle31 = salle31 + 1;

                } else if (xIndicateur === 0 && yIndicateur === 2) {

                    salle02 = salle02 + 1;

                } else if (xIndicateur === 1 && yIndicateur === 2) {

                    salle12 = salle12 + 1;

                } else if (xIndicateur === 2 && yIndicateur === 2) {

                    salle22 = salle22 + 1;

                } else if (xIndicateur === 3 && yIndicateur === 2) {

                    salle32 = salle32 + 1;

                } else if (xIndicateur === 0 && yIndicateur === 3) {

                    salle03 = salle03 + 1;

                } else if (xIndicateur === 1 && yIndicateur === 3) {

                    salle13 = salle13 + 1;

                } else if (xIndicateur === 2 && yIndicateur === 3) {

                    salle23 = salle23 + 1;

                } else if (xIndicateur === 3 && yIndicateur === 3) {

                    salle33 = salle33 + 1;

                }

            } else if (xReel === xIndicateur && yReel === yIndicateur + 1) {

                xNouvelIndicateur = xIndicateur;
                yNouvelIndicateur = yIndicateur + 1;

                ctx.clearRect(distance / 2 + xIndicateur * cote, distance / 2 + yIndicateur * cote, distance, distance);

                ctx.beginPath();

                if (xNouvelIndicateur === 0 && yNouvelIndicateur === 1) {

                    ctx.fillStyle = "rgb(250, 202, 44)";

                    ctx.fillRect(10 + ecart / 2, 10 + ecart / 2, cote - 17 - ecart, cote - 17 - ecart);

                }

                ctx.fillStyle = "rgb(255, 0, 0)";
                ctx.strokeStyle = "rgb(255, 0, 0)";

                ctx.strokeRect(distance + xAncienIndicateur * cote, distance + yAncienIndicateur * cote, (xIndicateur - xAncienIndicateur) * cote, (yIndicateur - yAncienIndicateur) * cote);
                ctx.strokeRect(distance + xIndicateur * cote, distance + yIndicateur * cote, (xNouvelIndicateur - xIndicateur) * cote, (yNouvelIndicateur - yIndicateur) * cote);
                ctx.arc(distance + xNouvelIndicateur * cote, distance + yNouvelIndicateur * cote, ecart, 0, 7);
                ctx.fill();

                ctx.closePath();

                xAncienIndicateur = xIndicateur,
                    xIndicateur = xNouvelIndicateur,
                    yAncienIndicateur = yIndicateur,
                    yIndicateur = yNouvelIndicateur;

                if (xIndicateur === 0 && yIndicateur === 0) {

                    salle00 = salle00 + 1;

                } else if (xIndicateur === 1 && yIndicateur === 0) {

                    salle10 = salle10 + 1;

                } else if (xIndicateur === 2 && yIndicateur === 0) {

                    salle20 = salle20 + 1;

                } else if (xIndicateur === 3 && yIndicateur === 0) {

                    salle30 = salle30 + 1;

                } else if (xIndicateur === 0 && yIndicateur === 1) {

                    salle01 = salle01 + 1;

                } else if (xIndicateur === 1 && yIndicateur === 1) {

                    salle11 = salle11 + 1;

                } else if (xIndicateur === 2 && yIndicateur === 1) {

                    salle21 = salle21 + 1;

                } else if (xIndicateur === 3 && yIndicateur === 1) {

                    salle31 = salle31 + 1;

                } else if (xIndicateur === 0 && yIndicateur === 2) {

                    salle02 = salle02 + 1;

                } else if (xIndicateur === 1 && yIndicateur === 2) {

                    salle12 = salle12 + 1;

                } else if (xIndicateur === 2 && yIndicateur === 2) {

                    salle22 = salle22 + 1;

                } else if (xIndicateur === 3 && yIndicateur === 2) {

                    salle32 = salle32 + 1;

                } else if (xIndicateur === 0 && yIndicateur === 3) {

                    salle03 = salle03 + 1;

                } else if (xIndicateur === 1 && yIndicateur === 3) {

                    salle13 = salle13 + 1;

                } else if (xIndicateur === 2 && yIndicateur === 3) {

                    salle23 = salle23 + 1;

                } else if (xIndicateur === 3 && yIndicateur === 3) {

                    salle33 = salle33 + 1;

                }

            } else if (xReel === xIndicateur + 1 && yReel === yIndicateur) {

                xNouvelIndicateur = xIndicateur + 1;
                yNouvelIndicateur = yIndicateur;

                ctx.clearRect(distance / 2 + xIndicateur * cote, distance / 2 + yIndicateur * cote, distance, distance);

                ctx.beginPath();

                if (xNouvelIndicateur === 1 && yNouvelIndicateur === 0) {

                    ctx.fillStyle = "rgb(250, 202, 44)";

                    ctx.fillRect(10 + ecart / 2, 10 + ecart / 2, cote - 17 - ecart, cote - 17 - ecart);

                }

                ctx.fillStyle = "rgb(255, 0, 0)";
                ctx.strokeStyle = "rgb(255, 0, 0)";

                ctx.strokeRect(distance + xAncienIndicateur * cote, distance + yAncienIndicateur * cote, (xIndicateur - xAncienIndicateur) * cote, (yIndicateur - yAncienIndicateur) * cote);
                ctx.strokeRect(distance + xIndicateur * cote, distance + yIndicateur * cote, (xNouvelIndicateur - xIndicateur) * cote, (yNouvelIndicateur - yIndicateur) * cote);
                ctx.arc(distance + xNouvelIndicateur * cote, distance + yNouvelIndicateur * cote, ecart, 0, 7);
                ctx.fill();

                ctx.closePath();

                xAncienIndicateur = xIndicateur,
                    xIndicateur = xNouvelIndicateur,
                    yAncienIndicateur = yIndicateur,
                    yIndicateur = yNouvelIndicateur;

                if (xIndicateur === 0 && yIndicateur === 0) {

                    salle00 = salle00 + 1;

                } else if (xIndicateur === 1 && yIndicateur === 0) {

                    salle10 = salle10 + 1;

                } else if (xIndicateur === 2 && yIndicateur === 0) {

                    salle20 = salle20 + 1;

                } else if (xIndicateur === 3 && yIndicateur === 0) {

                    salle30 = salle30 + 1;

                } else if (xIndicateur === 0 && yIndicateur === 1) {

                    salle01 = salle01 + 1;

                } else if (xIndicateur === 1 && yIndicateur === 1) {

                    salle11 = salle11 + 1;

                } else if (xIndicateur === 2 && yIndicateur === 1) {

                    salle21 = salle21 + 1;

                } else if (xIndicateur === 3 && yIndicateur === 1) {

                    salle31 = salle31 + 1;

                } else if (xIndicateur === 0 && yIndicateur === 2) {

                    salle02 = salle02 + 1;

                } else if (xIndicateur === 1 && yIndicateur === 2) {

                    salle12 = salle12 + 1;

                } else if (xIndicateur === 2 && yIndicateur === 2) {

                    salle22 = salle22 + 1;

                } else if (xIndicateur === 3 && yIndicateur === 2) {

                    salle32 = salle32 + 1;

                } else if (xIndicateur === 0 && yIndicateur === 3) {

                    salle03 = salle03 + 1;

                } else if (xIndicateur === 1 && yIndicateur === 3) {

                    salle13 = salle13 + 1;

                } else if (xIndicateur === 2 && yIndicateur === 3) {

                    salle23 = salle23 + 1;

                } else if (xIndicateur === 3 && yIndicateur === 3) {

                    salle33 = salle33 + 1;

                }

            }

        } else if (coordonneeX >= tailleCanvasResponsive && coordonneeX <= tailleCanvasResponsive + cote && coordonneeY >= tailleCanvasResponsive - cote && coordonneeY <= tailleCanvasResponsive) {
        
            if (xIndicateur === 4 && yIndicateur === 3) {

                // Ne rien faire si Heitor est sorti

            } else if (document.getElementById("bontonrepondreenigme").disabled === true) {

                // Ne rien faire si le bouton de confirmation à été utilisé
            
            } else if (xIndicateur === 3 && yIndicateur === 3) {

                xNouvelIndicateur = xIndicateur + 1;
                yNouvelIndicateur = yIndicateur;

                ctx.clearRect(distance / 2 + xIndicateur * cote, distance / 2 + yIndicateur * cote, distance, distance);

                ctx.beginPath();

                ctx.fillStyle = "rgb(255, 0, 0)";
                ctx.strokeStyle = "rgb(255, 0, 0)";

                ctx.strokeRect(distance + xAncienIndicateur * cote, distance + yAncienIndicateur * cote, (xIndicateur - xAncienIndicateur) * cote, (yIndicateur - yAncienIndicateur) * cote);
                ctx.strokeRect(distance + xIndicateur * cote, distance + yIndicateur * cote, (xNouvelIndicateur - xIndicateur) * cote, (yNouvelIndicateur - yIndicateur) * cote);
                ctx.arc(distance + xNouvelIndicateur * cote, distance + yNouvelIndicateur * cote, ecart, 0, 7);
                ctx.fill();

                ctx.closePath();

                xAncienIndicateur = xIndicateur,
                    xIndicateur = xNouvelIndicateur,
                    yAncienIndicateur = yIndicateur,
                    yIndicateur = yNouvelIndicateur;

                if (xIndicateur === 0 && yIndicateur === 0) {

                    salle00 = salle00 + 1;

                } else if (xIndicateur === 1 && yIndicateur === 0) {

                    salle10 = salle10 + 1;

                } else if (xIndicateur === 2 && yIndicateur === 0) {

                    salle20 = salle20 + 1;

                } else if (xIndicateur === 3 && yIndicateur === 0) {

                    salle30 = salle30 + 1;

                } else if (xIndicateur === 0 && yIndicateur === 1) {

                    salle01 = salle01 + 1;

                } else if (xIndicateur === 1 && yIndicateur === 1) {

                    salle11 = salle11 + 1;

                } else if (xIndicateur === 2 && yIndicateur === 1) {

                    salle21 = salle21 + 1;

                } else if (xIndicateur === 3 && yIndicateur === 1) {

                    salle31 = salle31 + 1;

                } else if (xIndicateur === 0 && yIndicateur === 2) {

                    salle02 = salle02 + 1;

                } else if (xIndicateur === 1 && yIndicateur === 2) {

                    salle12 = salle12 + 1;

                } else if (xIndicateur === 2 && yIndicateur === 2) {

                    salle22 = salle22 + 1;

                } else if (xIndicateur === 3 && yIndicateur === 2) {

                    salle32 = salle32 + 1;

                } else if (xIndicateur === 0 && yIndicateur === 3) {

                    salle03 = salle03 + 1;

                } else if (xIndicateur === 1 && yIndicateur === 3) {

                    salle13 = salle13 + 1;

                } else if (xIndicateur === 2 && yIndicateur === 3) {

                    salle23 = salle23 + 1;

                } else if (xIndicateur === 3 && yIndicateur === 3) {

                    salle33 = salle33 + 1;

                }

            }

        }

    }

}


function passerenigme() {

    document.location.reload(true);

}


function repondreenigme() {

    if (salle00 === 1 && salle10 === 1 && salle20 === 1 && salle30 === 1 && salle01 === 1 && salle11 === 1 && salle21 === 1 && salle31 === 1 && salle02 === 1 && salle12 === 1 && salle22 === 1 && salle32 === 1 && salle03 === 1 && salle13 === 1 && salle23 === 1 && salle33 === 1 && xIndicateur === 4 && yIndicateur === 3) {

        document.getElementById("bonnereponse").style.display = "block";

        if (localStorage.getItem("reponseenigmeprecedente") === "ayayay") {

            localStorage.setItem("reponseenigmeprecedente", "ayayayay");

        } else if (localStorage.getItem("reponseenigmeprecedente") === "miayay") {

            localStorage.setItem("reponseenigmeprecedente", "miayayay");

        } else if (localStorage.getItem("reponseenigmeprecedente") === "aymiay") {

            localStorage.setItem("reponseenigmeprecedente", "aymiayay");

        } else if (localStorage.getItem("reponseenigmeprecedente") === "ayaymi") {

            localStorage.setItem("reponseenigmeprecedente", "ayaymiay");

        } else if (localStorage.getItem("reponseenigmeprecedente") === "mimiay") {

            localStorage.setItem("reponseenigmeprecedente", "mimiayay");

        } else if (localStorage.getItem("reponseenigmeprecedente") === "miaymi") {

            localStorage.setItem("reponseenigmeprecedente", "miaymiay");

        } else if (localStorage.getItem("reponseenigmeprecedente") === "aymimi") {

            localStorage.setItem("reponseenigmeprecedente", "aymimiay");

        } else if (localStorage.getItem("reponseenigmeprecedente") === "mimimi") {

            localStorage.setItem("reponseenigmeprecedente", "mimimiay");

        }
    
    } else {

        document.getElementById("mauvaisereponse").style.display = "block";

        if (localStorage.getItem("reponseenigmeprecedente") === "ayayay") {

            localStorage.setItem("reponseenigmeprecedente", "ayayaymi");

        } else if (localStorage.getItem("reponseenigmeprecedente") === "miayay") {

            localStorage.setItem("reponseenigmeprecedente", "miayaymi");

        } else if (localStorage.getItem("reponseenigmeprecedente") === "aymiay") {

            localStorage.setItem("reponseenigmeprecedente", "aymiaymi");

        } else if (localStorage.getItem("reponseenigmeprecedente") === "ayaymi") {

            localStorage.setItem("reponseenigmeprecedente", "ayaymimi");

        } else if (localStorage.getItem("reponseenigmeprecedente") === "mimiay") {

            localStorage.setItem("reponseenigmeprecedente", "mimiaymi");

        } else if (localStorage.getItem("reponseenigmeprecedente") === "miaymi") {

            localStorage.setItem("reponseenigmeprecedente", "miaymimi");

        } else if (localStorage.getItem("reponseenigmeprecedente") === "aymimi") {

            localStorage.setItem("reponseenigmeprecedente", "aymimimi");

        } else if (localStorage.getItem("reponseenigmeprecedente") === "mimimi") {

            localStorage.setItem("reponseenigmeprecedente", "mimimimi");

        }

    }

    document.getElementById("bontonrepondreenigme").disabled = true;
    document.getElementById("bontonpasserenigme").disabled = true;
    document.getElementById("bontonavoirindice").disabled = true;

}
