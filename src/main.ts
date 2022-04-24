import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (next) => console.log("siguiente [next]: ", next),
  error: (error) => console.warn("error [obs]: ", error),
  complete: () => console.info("complete [obs]"),
};

const obs$ = new Observable<string>((subs) => {
  subs.next("Hola");
  subs.next("Mundo");

  subs.next("Hola");
  subs.next("Mundo");

  // Forzar un error
  // const a = undefined;
  // a.nombre = "Fernando";

  subs.complete();

  subs.next("Hola");
  subs.next("Mundo");
});

// obs$.subscribe({
//   next: (next) => console.log("next: ", next),
//   error: (error) => console.warn("error: ", error),
//   complete: () => console.info("complete"),
// });

obs$.subscribe(observer);

export {};
