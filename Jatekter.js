import Elem from "./Elem.js";

export default class JatekTer {
    #felkapcsoltLampakDb = 0;
    #lampakAllapotLista = [];
    #jatekMeret = 6;
    #lepesekSzama = 0;

    constructor() {
        this.#setLampakAllapota();
        this.#megjelenit();
        this.#ellenorzes();

        //Lépés eseményre reagál
        $(window).on("lepes", (event) => {
            let id = event.detail;
            this.#lep(id);
        });
    }

    #megjelenit() {
        const szuloElem = $(".jatekter");
        //Eltávolítja a játéktér aktuális tartalmát
        szuloElem.empty();
        //Létrehoz egy új Elem objektumot minden egyes lámpához, állapottal és elhelyezve a játéktéren
        this.#lampakAllapotLista.forEach((ertek, index) => {
            new Elem(index, ertek, szuloElem);
        });
    }

    #setLampakAllapota() {
        //Játéktér mérete négyzetre emelve (6x6)
        this.#lampakAllapotLista = new Array(this.#jatekMeret * this.#jatekMeret).fill(false);
        for (let index = 0; index < this.#lampakAllapotLista.length; index++) {
            this.#lampakAllapotLista[index] = Math.random() < 0.5;
        }
        console.log(this.#lampakAllapotLista);
    }

    #lep(id) {
        const elem = this.#lampakAllapotLista[id];
        const divElem = $(`.jatekter div[data-id='${id}']`);
        //Módosítja a lámpa háttérszínét
        if (this.#lepesekSzama % 2 === 0) {
            divElem.css("background-color", "#472F5B"); //Páros lépés - lila
        } else {
            divElem.css("background-color", "#526863"); //Páratlan lépés - zöld
        }
        this.#lepesekSzama++;
    }
    #ellenorzes(){
        //győzelem ellenőrzése

    }
}