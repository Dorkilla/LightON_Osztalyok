# LightON

# UML ábra


# Magyarázat:
# Játéktér.js:
**constructor()**:
- A konstruktor inicializálja az osztályt, beállítja a lámpák állapotát és megjeleníti a játéktéren.

**#megjelenit()**:
- A játéktér elemeit frissíti, hogy azok megfeleljenek a lámpák aktuális állapotának.

**#setLampakAllapota()**:
- Inicializálja a lámpák állapotát véletlenszerűen.

**#lep(id)**:
Módosítja a kiválasztott lámpa állapotát és színét a lépésnek megfelelően.

# Elem.js:
**constructor(id, lampakAllapota, szuloElem)**:
- A konstruktor beállítja a fenti paraméterek alapján az attribútumokat.
- Meghívja a #megjelenit metódust, hogy létrehozza és hozzáadja a lámpa elemet.
- Beállítja a #divElem attribútumot a létrehozott HTML elemre.
- Eseménykezelőt hoz létre, ami kattintáskor ellenőrzi a lámpa állapotát, és kiváltja ha az megegyezik a megadott feltétellel.

**#megjelenit()**:
-  Létrehoz egy új div elemet, beállítja annak data-id attribútumát az adott lámpa azonosítójára, majd hozzáadja ezt a szülő elemhez.

**#esemenyTrigger(esemenyNev)**:
- Egy egyedi esemény (CustomEvent) létrehozása és kiváltása.





