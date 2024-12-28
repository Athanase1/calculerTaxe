/*Athanase Kpan*/
"use strict"

/**
 *  Créer une balise html de type standard
 *
 * <balise id="id" classes="classes">texte et html "valeur"</balise>
 *
 * @param balise {string}
 * @param id {string}
 * @param valeur {string}
 * @param classe {string}
 * @return {*}
 */
function creerBaliseX(balise, id = "", valeur = "", classe = "") {
    let baliseTemp = document.createElement(balise);

    if (id !== "") {
        baliseTemp.id = id;
    }

    if (classe !== "") {
        baliseTemp.className = classe;
    }

    baliseTemp.innerHTML = valeur;

    return baliseTemp;
}

/**
 * Créer une balise html "input";
 *
 * <input type="type" id="id" name="nom" value="valeur" classes="classes" />
 *
 * @param type
 * @param id
 * @param nom
 * @param valeur
 * @param classe
 * @return {HTMLInputElement}
 */
function creerInput(type, id = "", nom = "", valeur = "", classe= "") {
    let inputTemp = document.createElement("input");

    if (type !== "") {
        inputTemp.type = type;
    }
    if (id !== "") {
        inputTemp.id = id;
    }
    if (nom !== "") {
        inputTemp.name = nom;
    }
    if (valeur !== "") {
        inputTemp.value = valeur;
    }
    if (classe !== "") {
        inputTemp.className = classe;
    }

    return inputTemp;
}

/**
 * Créer une balise html "label";
 *
 * <label id="id" for="valFor" classes="classes">texte et html "valeur"</label>
 *
 * @param id
 * @param valFor
 * @param valeur
 * @param classe
 * @return {HTMLLabelElement}
 */
function creerLabel(id, valFor = "", valeur = "", classe = "") {
    let labelTemp = document.createElement("label");

    if (id !== "") {
        labelTemp.id = id;
    }

    if (valFor !== "") {
        labelTemp.htmlFor = valFor;
    }

    if (classe !== "") {
        labelTemp.className = classe;
    }

    labelTemp.innerHTML = valeur;

    return labelTemp;
}