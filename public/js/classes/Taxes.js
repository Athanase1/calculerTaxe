/*Athanase Kpan*/
"use strict"
class Taxe {
    constructor(montant) {
        this._montant = montant;
        this._TPS = 0.05; // constant pour le TPS
        this._TVQ = 0.0997;//constant pour le TVQ
        this._montantTPS = this.calculerTPS();
        this._montantTPV = this.calculerTPV();
        this._MontantSansTaxes = this.calculerMontantSansTaxes()
    }

    /**
     * retourne le montant de tps
     * @returns {*}
     */
    get montantTPS() {
        return this._montantTPS;
    }

    /**
     * retourne le montant TPV
     * @returns {*}
     */
    get montantTPV() {
        return this._montantTPV;
    }

    /**
     * retoune le montant hors taxes
     * @returns {*}
     */
    get montantHorstaxes(){
        return this._MontantSansTaxes
    }

    /**
     * calcule le montant TPS
     * @returns {number}
     */
    calculerTPS(){
        return this._montant * this._TPS
    }

    /**
     * calcule le montant TVQ
     * @returns {number}
     */
    calculerTPV(){
        return this._montant * this._TVQ
    }

    /**
     * calcule et retourne le monatnt sans taxes
     * @returns {number}
     */
    calculerMontantSansTaxes(){
        return this._montant - (this._montantTPS + this._montantTPV)
    }

}