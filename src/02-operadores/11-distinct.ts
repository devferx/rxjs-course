import { of, from } from "rxjs";
import { distinct } from "rxjs/operators";

const numeros$ = of(1, "1", 2, 3, 3, 3, 2, 5, 1);

numeros$.pipe(distinct()).subscribe(console.log);

interface Personaje {
  nombre: string;
}

const personajes: Personaje[] = [
  {
    nombre: "Megaman",
  },
  {
    nombre: "X",
  },
  {
    nombre: "Zero",
  },
  {
    nombre: "Megaman",
  },
  {
    nombre: "Zero",
  },
];

from(personajes)
  .pipe(distinct((personaje) => personaje.nombre))
  .subscribe(console.log);
