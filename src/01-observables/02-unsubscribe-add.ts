import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (next) => console.log("next: ", next),
  error: (error) => console.warn("error: ", error),
  complete: () => console.info("complete"),
};

const intervalo = new Observable<number>((subscriber) => {
  // Crear un contador 1,2,3,4,5,.....
  let contador = 0;
  const interval = setInterval(() => {
    // cada segundo
    contador += 1;
    subscriber.next(contador);
    console.log(contador);
  }, 1000);

  return () => {
    clearInterval(interval);
    console.log("Intervalo destruido");
  };
});

const subscription1 = intervalo.subscribe((num) => console.log("Num:", num));
const subscription2 = intervalo.subscribe((num) => console.log("Num:", num));
const subscription3 = intervalo.subscribe((num) => console.log("Num:", num));

subscription1.add(subscription2);
subscription2.add(subscription3);

setTimeout(() => {
  subscription1.unsubscribe();
  // subscription2.unsubscribe();
  // subscription3.unsubscribe();

  console.log("Completado timeout");
}, 3000);
