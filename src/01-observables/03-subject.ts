import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
  next: (next) => console.log("next: ", next),
  error: (error) => console.warn("error: ", error),
  complete: () => console.info("complete"),
};

const intervalo$ = new Observable((subs) => {
  const intervalId = setInterval(() => subs.next(Math.random()), 1000);

  return () => {
    clearInterval(intervalId);
    console.log("Intervalo destruido");
  };
});

/**
 * 1. Casteo múltiple
 * 2. También es un observer
 * 3. Next, error y complete
 */
const subject$ = new Subject();
const subscription = intervalo$.subscribe(subject$);

// const sub1 = intervalo$.subscribe((rnd) => console.log("subs1", rnd));
// const sub2 = intervalo$.subscribe((rnd) => console.log("subs2", rnd));

const sub1 = subject$.subscribe(observer);
const sub2 = subject$.subscribe(observer);

setTimeout(() => {
  subject$.next(10);
  subject$.complete();
  subscription.unsubscribe();
}, 3500);
