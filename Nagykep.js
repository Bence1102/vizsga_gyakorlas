export class Nagykep {
    #obj = {};
    #szElem;
    #nev = '';
    #kep;
    #leiras = '';
    #hozzavalok = [];
    constructor(obj) {
        this.#obj = obj;
        this.#szElem = document.querySelector('.reszletek');
        this.#nev = obj.nev;
        this.#kep = obj.kep;
        this.#leiras = obj.leiras;
        this.#hozzavalok = obj.hozzavalok;
        this.#megjelenites();
    }
    #megjelenites() {
        const reszletekElem = document.createElement('div');
        reszletekElem.className = 'reszletek';

        reszletekElem.innerHTML = `
            <h3>${this.#nev}</h3>
            <img src="${this.#kep}" alt="${this.#nev}">
            <p>${this.#leiras}</p>
            <h4>Hozzávalók:</h4>
        `;
        this.#szElem.appendChild(reszletekElem);
        const hozzavalokElem = document.createElement('ul');
        this.#hozzavalok.forEach(hozzavalo => {
            const li = document.createElement('li');
            li.textContent = hozzavalo;
            hozzavalokElem.appendChild(li);
        });
        reszletekElem.appendChild(hozzavalokElem);
        
    }

}