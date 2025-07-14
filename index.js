import { receptLista } from "./receptek.js";
import { Receptmegjelenit } from "./Receptmegjelenit.js";

const app = new Receptmegjelenit(receptLista);


document.querySelector(".kedvencek").addEventListener("click", () => {
    app.CsakKedvencek();
});

document.querySelector(".recept").addEventListener("click", () => {
    app.osszes();
});
