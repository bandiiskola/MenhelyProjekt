![image](https://github.com/user-attachments/assets/7f61bc3f-4c8d-4423-bbcd-a360d2c8b093)


Adatbázis mezők:

nev: pl.(Max) varchar, max 50.
eletkor: pl.(3) int, max 3 szamjegy.
fajta: pl.(Golden Retriever) varchar, max 50.
szin: pl.(arany) varchar, max 40.
nem: pl.(1) tinyint, max 1 számjegy, 0=Nőstény, 1=Hím.
chip: pl.(123456789012345) bigint, csak 15 számjegy lehet.
faj: pl.(kutya) varchar, max 40.
veszettseg: pl.(1) tinyint, max 1 számjegy, 0=Nincs oltva, 1=Oltva van.
parvo: pl.(1) tinyint, max 1 számjegy, 0=Nincs oltva, 1=Oltva van.
fereghajto: pl.(1) tinyint, max 1 számjegy, 0=Nincs oltva, 1=Oltva van.
datum: pl.(2024-11-08) date, a felhasználó az adatfelvitelnél adja majd meg.

API elérések:

-Feltöltés: berenandor.moriczcloud.hu/menhely/feltoltes/{nev}/{eletkor}/{fajta}/{szin}/{nem}/{chip}/{faj}/{veszettseg}/{parvo}/{fereghajto}/{datum}
            Az API így tölt fel, az inputnak majd ezt kell meghívnia.

-Törlés: berenandor.moriczcloud.hu//menhely/torles/{id}
            Az API így törli az adoot id-n lévő rekordot.

-Listázás: berenandor.moriczcloud.hu/menhely/listazas
            Az API JSON-be átadja az adatbázisban fent lévő adatokat tömbként.
-Listázás id szerint: berenandor.moriczcloud.hu/menhely/listazas?id={id}
            Az API JSON-be átadja az adatbázisban fent lévő adatokat tömbként ahhol egyezik az id. Ez a módosításnál lesz hasznos, hogy az input fieldeket meg lehessen tölteni a fent lévő adatokkal.

-Módosítás: berenandor.moriczcloud.hu/menhely/modositas/{id}/{nev}/{eletkor}/{fajta}/{szin}/{nem}/{chip}/{faj}/{veszettseg}/{parvo}/{fereghajto}/{datum}
            Az API updatel minden adatot egy adott id-n.

Minden oldal kivéve a listázás visszaad status=siker json adatot siker esetén, status=sikertelen adatot hibára futás után.
