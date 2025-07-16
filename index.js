import { receptLista } from "./receptek.js";
import { Receptmegjelenit } from "./Receptmegjelenit.js";
import { Nagykep } from "./Nagykep.js";

const Receptgyujtemeny = 
new Receptmegjelenit(receptLista);


document.querySelector(".kedvencek")
.addEventListener("click", () => {
    Receptgyujtemeny.CsakKedvencek();
});

document.querySelector(".recept")
.addEventListener("click", () => {
    Receptgyujtemeny.osszes();
});
let aktualisIndex = 0;
let nagyKep; 

function frissitNagyKep() {
    document.querySelector(".reszletek").innerHTML = "";
    nagyKep = new Nagykep(receptLista[aktualisIndex]);
}


window.addEventListener("load", () => {
    frissitNagyKep();
});


document.querySelector(".bal").addEventListener("click", () => {
    aktualisIndex--;
    if (aktualisIndex < 0) {
        aktualisIndex = receptLista.length - 1;
    }
    frissitNagyKep();
});


document.querySelector(".jobb").addEventListener("click", () => {
    aktualisIndex++;
    if (aktualisIndex >= receptLista.length) {
        aktualisIndex = 0;
    }
    frissitNagyKep();
});
