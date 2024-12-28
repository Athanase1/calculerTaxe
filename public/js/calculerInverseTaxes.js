/*Athanase Kpan*/
"use strict"


/**
 * genere l'interface principal
 * @constructor
 */
function Interface() {
    // creation du div principale avec classe container pour css
    let divContainer = creerBaliseX("div","container","","container");


    let titre1 = creerBaliseX("h1","titre1","Calcul inversé taxes des résidents du québec en 2020","")
    let hr = creerBaliseX("hr","","","");
    let hr1 = creerBaliseX("hr","","","");
    let button = creerBaliseX("button","btn","Calculer","")
    button.disabled = true // le button est désactivé par defaut
    button.onclick = calculerTaxe;

    //titre1.textContent = ""
    divContainer.appendChild(titre1)
    divContainer.appendChild(hr)
    genererInput(divContainer)
    divContainer.appendChild(button)
    divContainer.appendChild(hr1)

    // Insère le div avant le premier script dans le body
    document.body.insertBefore(divContainer, document.body.firstChild);
    genererexplication(divContainer)
    let input = document.getElementById("input1")
    let erreur = document.createElement("p")
    erreur.textContent ="Vous devez entrer un montant entre 0 et 10000"
    erreur.classList.add("erreur")
    erreur.id = "err"
    divInput.insertBefore(erreur,divlebel1)
    input.addEventListener("input", validateInput)
    effacerlesResultat()
}
function calculerTaxe() {

    let montant =document.getElementById("input1").value
    if(montant){
        let taxeCalule = new Taxe(montant)
        let tps = taxeCalule.montantTPS
        let tvq = taxeCalule.montantTPV
        let montantHorsTaxe = taxeCalule.montantHorstaxes
        input2.value = tps.toFixed(2)
        input3.value = tvq.toFixed(2)
        input4.value = montantHorsTaxe.toFixed(2)
    }

    //desativeButton()
}

/**
 * crée la div input avec les input et append sur noeud reussi en parametre
 * @param noeud
 */
function genererInput(noeud) {
    let container = creerBaliseX("div","divInput","","inputContainer")

    let input1 = creerInput("number","input1","MontantAvecTaxe","","")
    let input2 = creerInput("number","input2","TPS","","")
    let input3 = creerInput("number","input3","TVQ","","")
    let input4 = creerInput("number","input4","MontantSansTaxe","","")

    // mettre en lecture seul input 2 3 et 4
    input2.setAttribute("readonly","true")
    input3.setAttribute("readonly","true")
    input4.setAttribute("readonly","true")

    // creer les label
    let label1 = creerLabel("label1","MontantAvecTaxe", "Montant avec taxes","")
    let label2 = creerLabel("","TPS", "TPS (5%)","")
    let label3 = creerLabel("","TVQ", "TVQ (9.975%)","")
    let label4 = creerLabel("","MontantSansTaxe", "Montant sans taxes","")

    // div pour chaque input et label
    let div = creerBaliseX("div","divlebel1","","divLabel")
    let div1 = creerBaliseX("div","","","divLabel")
    let div2 = creerBaliseX("div","","","divLabel")
    let div3 = creerBaliseX("div","","","divLabel")

    // ajouete dans les div approprié
    div.appendChild(label1)
    div.appendChild(input1)
    div1.appendChild(label2)
    div1.appendChild(input2)
    div2.appendChild(label3)
    div2.appendChild(input3)
    div3.appendChild(label4)
    div3.appendChild(input4)

    // creer les tiret et signe d'egalité
    let tiret = creerBaliseX("h3","","-","")
    let tiret2 = creerBaliseX("h3","","-","")
    let signeEgale = creerBaliseX("h3","","=","")

    // ajoute au div principal
    container.appendChild(div)
    container.appendChild(tiret)
    container.appendChild(div1)
    container.appendChild(tiret2)
    container.appendChild(div2)
    container.appendChild(signeEgale)
    container.appendChild(div3)

    noeud.appendChild(container) // ajoute au dom
}
function genererexplication(div) {
    let divContainer = creerBaliseX("div","","","section")
    let titre1 = creerBaliseX("h1","t1","taux de taxation TPS et TVQ 2020","")
    let phrase = creerBaliseX("p","phrase","Les taux de TPS sont les mêmes depuis 2008 soit 5%","")

    // un element strong pour le reste de la phrase
    let strong = creerBaliseX("strong","","méthode de calcul de la TVQ 1er janvier en 2013","")
    let phrase2 = creerBaliseX("p","",`Les taux de TVQ sont les mêmes depuis 2013 soit 9.975%.Toutefois, le "taux final" reste le même depuis 2012 car la`)
    let br = creerBaliseX("br","","",'')
    phrase2.appendChild(br)
    phrase2.appendChild(strong) // ajoute du reste de la phrase en gras
    phrase2.insertAdjacentText("beforeend"," a changée le")
    let strong0 = creerBaliseX("strong",""," 1er janvier en 2013.","")
    phrase2.appendChild(strong0) //ajoute du reste de la phrase en gras

    let titre2 = creerBaliseX("h1","t2","Formule de calcul","")
    let phrase3 = creerBaliseX("p","","Voici la façon dont est calculé le montant avant taxe","")

    // section des p en gras
    let p1 = creerBaliseX("p","","","")
    let strong1= creerBaliseX("strong","",`Montant avec taxes / Montant TPS et TVQ combiné (1.14975) = Montant sans taxes`,"")
    p1.appendChild(strong1)

    let p2 = creerBaliseX("p","","","")
    let strong2 = creerBaliseX("strong","","Montant sans taxes * Taux TPS = Montant de la TPS","")
    p2.appendChild(strong2)

    let p3 = creerBaliseX("p","","","")
    let strong3 = creerBaliseX("strong","","Montant sans taxes * Taux TVQ = Montant de la TVQ","")
    p3.appendChild(strong3)

    // ajoutes au dom
    divContainer.appendChild(titre1)
    divContainer.appendChild(phrase)
    divContainer.appendChild(phrase2)
    divContainer.appendChild(titre2)
    divContainer.appendChild(phrase3)
    divContainer.appendChild(p1)
    divContainer.appendChild(p2)
    divContainer.appendChild(p3)
    div.appendChild(divContainer)
}

function desativeButton() {
    document.getElementById("btn").disabled = true;
}
function activeButton() {
    document.getElementById("btn").disabled = false;
}
function effacerlesResultat() {
    input1.addEventListener("input", ()=>{
        input2.value = ""
        input3.value = ""
        input4.value = ""
    })
}

/**
 * gere la validations de l'input et active et desactive le button
 */
function validateInput() {
    const input = document.getElementById("input1");
    let error = document.getElementById("err");
    const value = parseFloat(input.value);
    // Vérifie si l'input est valide
    if (isNaN(value) || value <= 0 || value > 10000) {
        desativeButton()
        input.classList.add("inputerreur")
        error.style.display = "block"
        // Insère le message d'erreur avant le label s'il n'est pas déjà affiché

    } else {
        activeButton()
        // Supprime le message d'erreur si l'input est valide
        if (error) {
            input.classList.remove("inputerreur")
            error.style.display = "none";
        }
    }
}

window.addEventListener("load", Interface)