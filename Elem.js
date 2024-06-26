export default class Elem {
    #lampakAllapota = false;
    #divElem = "";
    #id = 0;
    #szuloElem = "";

    constructor(id, lampakAllapota, szuloElem) {
        this.#id = id;
        this.#lampakAllapota = lampakAllapota;
        this.#szuloElem = szuloElem;

        this.#megjelenit();

        //Rákattintunk az elemre
        this.#divElem = this.#szuloElem.children("div:last-child");

        //Kattintáskor ellenőrzi a lámpa állapotát
        this.#divElem.on("click", () => {
            if (!this.#lampakAllapota) {
                this.#esemenyTrigger("lepes");
            }
        });
    }

    #megjelenit() {
        //Létrehoz egy új div elemet
        const divElem = document.createElement("div");
        //Beállítja a data-id-t a lámpa azonosítójára
        divElem.setAttribute("data-id", this.#id);
        //Hozzáadja a szülő elemhez
        this.#szuloElem.append(divElem);
    }

    #esemenyTrigger(esemenyNev) {
        //Létrehoz egy új eseményt a megadott névvel, lámpa azonosítójára
        const e = new CustomEvent(esemenyNev, { detail: this.#id }); 
        //Kiváltja az eseményt 
        window.dispatchEvent(e);
    }
}