export class Receptelonezet {
    #obj = {};
    #szElem;
    #nev = '';
    #kep;
    #kedvencgomb;
    constructor(obj) {
        this.#obj = obj;
        this.#szElem = document.querySelector('.receptek');
        this.#nev = obj.nev;
        this.#kep = obj.kep;
        this.#kedvencgomb = obj.kedvenc ? 'Kedvenc' : 'Nem kedvenc';
        this.#megjelenites();
    }
    #megjelenites() {
        const receptElem = document.createElement('div');
        receptElem.className = 'receptKartya';

        receptElem.innerHTML = `
            <h3>${this.#nev}</h3>
            <img src="${this.#kep}" alt="${this.#nev}">
            <button class="kedvencGomb">${this.#kedvencgomb}</button>
        `;
        this.#szElem.appendChild(receptElem);

        const gomb = receptElem.querySelector('.kedvencGomb');
        gomb.addEventListener('click', () => {
            this.#obj.kedvenc = !this.#obj.kedvenc;
            gomb.textContent = this.#obj.kedvenc ? 'Kedvenc' : 'Nem kedvenc';
        });
    }

}