import { from, interval } from "rxjs";
import { scan, take, map } from "rxjs/operators";

const numeros = [1, 2, 3, 4, 5];

// const totalAcumulador = (acc, cur) => {
//   return acc + cur;
// };

const totalAcumulador = (acc: number, cur: number) => acc + cur;

from(numeros).pipe(scan(totalAcumulador)).subscribe(console.log);

// interval(1000).pipe(take(5), scan(totalAcumulador)).subscribe(console.log);

// Redux
interface Usuario {
  id?: string;
  autenticado?: boolean;
  token?: string | null;
  edad?: number;
}
const user: Usuario[] = [
  { id: "Fer", autenticado: false, token: null },
  { id: "Fer", autenticado: true, token: "ABC" },
  { id: "Fer", autenticado: true, token: "ABC123" },
];

const state$ = from(user).pipe(
  scan<Usuario, Usuario>(
    (acc, curr) => {
      return { ...acc, ...curr };
    },
    { edad: 33 }
  )
);

const id$ = state$.pipe(map((state) => state.id));

id$.subscribe(console.log);
