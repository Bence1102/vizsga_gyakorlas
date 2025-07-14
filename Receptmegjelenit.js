import  {Receptelonezet} from "./Receptelonezet.js"

export class Receptmegjelenit {
    #Lista = [];
    #szElem;
    #ereditLista = [];

    constructor(Lista) {
        this.#Lista = Lista;
        this.#ereditLista = [...Lista];
        this.#szElem = document.querySelector('.receptek');
        this.#megjelenites();
    }

    #megjelenites() {
        this.#szElem.innerHTML = ''; 
        this.#Lista.forEach(recept => {
            new Receptelonezet(recept);
        });
    }

    CsakKedvencek() {
        this.#Lista= this.#ereditLista.filter(recept => recept.kedvenc);
        this.#megjelenites();
    }

    osszes(){
        this.#Lista = [...this.#ereditLista];
        this.#megjelenites();
    }
}