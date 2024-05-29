# LightON

# UML ábra
![alt text]((image-1.png) "Uml ábra")

# Magyarázat:
# Játéktér.js:
**constructor()**:
- Inicializálja az osztályt, beállítja a lámpák állapotát és megjeleníti a játéktéren.

**#megjelenit()**:
- A játéktér elemeit frissíti, lámpák aktuális állapota szerint.

**#setLampakAllapota()**:
- Inicializálja a lámpák állapotát véletlenszerűen.

**#lep(id)**:
Módosítja a kiválasztott lámpa állapotát és színét.

# Elem.js:
**constructor(id, lampakAllapota, szuloElem)**:
- Beállítja a fenti paraméterek alapján az adattagokat
- Meghívja a #megjelenit metódust, létrehozza és hozzáadja a lámpa elemet.
- Beállítja a #divElemet.
- Eseménykezelőt hoz létre, ami kattintáskor ellenőrzi a lámpa állapotát, és kiváltja ha az megegyezik a megadott feltétellel.

**#megjelenit()**:
- Létrehoz egy új div elemet, beállítja annak id-ját az adott lámpa azonosítójára, majd hozzáadja ezt a szülő elemhez.

**#esemenyTrigger(esemenyNev)**:
- Egy egyedi eseményt hoz létre és kiváltja az eseményt.



