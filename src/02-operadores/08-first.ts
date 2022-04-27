import { fromEvent } from "rxjs";
import { first, map, tap } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, "click");

click$
  .pipe(
    tap<MouseEvent>(console.log),
    map(({ clientX, clientY }) => ({
      clientY,
      clientX,
    })),
    first(({ clientY }) => clientY >= 150)
  )
  .subscribe({
    next: (val) => console.log("next:", val),
    complete: () => console.log("complete"),
  });
