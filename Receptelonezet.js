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
        receptElem.className = 'col-sm-6 col-md-4 col-lg-3';

        receptElem.innerHTML = `
        <div class="card h-100 text-center">
            <img src="${this.#kep}" alt="${this.#nev}" class="card-img-top img-fluid">
            <div class="card-body">
                <h5 class="card-title">${this.#nev}</h5>
                <button class="btn btn-outline-danger kedvencGomb">${this.#kedvencgomb}</button>
            </div>
        </div>
    `;

        this.#szElem.appendChild(receptElem);

        const gomb = receptElem.querySelector('.kedvencGomb');
        gomb.addEventListener('click', () => {
            this.#obj.kedvenc = !this.#obj.kedvenc;
            gomb.textContent = this.#obj.kedvenc ? 'Kedvenc' : 'Nem kedvenc';
        });
    }
}