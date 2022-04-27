import { of, from } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

interface Personaje {
  nombre: string;
}

const personajes: Personaje[] = [
  {
    nombre: "Megaman",
  },
  {
    nombre: "Megaman",
  },
  {
    nombre: "X",
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
  .pipe(distinctUntilChanged((ant, act) => ant.nombre === act.nombre))
  .subscribe(console.log);
