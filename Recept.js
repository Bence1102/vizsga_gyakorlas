import  Receptelonezet from "./Receptelonezet.js";

export class Recept {
    #receptLista = [];
    #szElem;

    constructor(receptLista) {
        this.#receptLista = receptLista;
        this.#szElem = document.querySelector('.receptek');
        this.#megjelenites();
    }

    #megjelenites() {
        this.#szElem.innerHTML = ''; 
        this.#receptLista.forEach(recept => {
            new Receptelonezet(recept);
        });
    }
}