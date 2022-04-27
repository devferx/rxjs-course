import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const texto = document.createElement("div");
texto.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut nisl fringilla, congue risus tempus, aliquet ligula. Donec eu arcu libero. Pellentesque finibus malesuada convallis. Nunc fringilla tortor nec neque tincidunt, a finibus tellus euismod. Pellentesque eu lacinia ex. Mauris lacinia rhoncus fermentum. Vestibulum scelerisque tempor odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. <br /><br /> Nulla in tincidunt augue. Nullam augue mauris, semper non rhoncus at, efficitur dapibus purus. Phasellus gravida sed odio quis dictum. Fusce mollis eros velit, at feugiat arcu viverra at. Integer mollis lorem ac ornare bibendum. Nunc pulvinar lacinia egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus feugiat nunc ac pharetra ornare. Donec posuere, felis nec finibus pharetra, elit urna vehicula enim, a eleifend sapien ligula eget nulla. Aenean dictum orci nisi, et aliquet ante iaculis et. Fusce vulputate massa vitae lobortis bibendum. Maecenas eu tempor risus. Vestibulum sit amet varius nulla, ac dictum justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sed pharetra erat. <br /><br /> Morbi neque massa, ultricies in vestibulum id, blandit ornare ante. Cras iaculis scelerisque magna ut hendrerit. Vivamus venenatis arcu ex, quis cursus arcu auctor sed. Nullam vel egestas leo. Duis vel nisi ac eros condimentum aliquet a vehicula elit. Aenean vel justo ac enim accumsan viverra id interdum ligula. Suspendisse ut semper nunc. Vestibulum tempus odio in orci finibus, eget auctor orci euismod. <br /><br /> Sed sem tellus, dictum sit amet blandit nec, facilisis non felis. Nam porttitor elit justo, facilisis sodales erat porttitor in. Vestibulum imperdiet mi nisi, ac hendrerit quam tempus vel. Integer placerat efficitur eleifend. Donec sed tortor non mi fermentum rutrum. Vestibulum sagittis libero ac ipsum elementum, id lobortis tortor malesuada. Aliquam bibendum, purus nec lobortis congue, nunc sapien accumsan dolor, in faucibus purus nisi non neque. <br /><br /> Fusce ullamcorper justo eu neque venenatis, eu euismod eros efficitur. Sed facilisis maximus est, sed lobortis velit. Suspendisse non semper felis. Donec venenatis ex elit, eu venenatis sapien tempus non. Sed finibus mauris urna, at facilisis massa dictum in. Nam dignissim lorem dui, quis dapibus libero pretium ac. Quisque sed est sodales, sodales felis non, venenatis ipsum. Duis ut velit consectetur, tempus enim vel, ornare ex. Vestibulum tincidunt nunc nec vehicula commodo.`;

const body = document.querySelector("body");
body?.append(texto);

const progressBar = document.createElement("div");
progressBar.classList.add("progress-bar");
body?.append(progressBar);

// funcion que haga el calculo
const calcularPorcentajeScroll = (event) => {
  const { scrollTop, scrollHeight, clientHeight } =
    event.target.documentElement;

  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

// Streams
const scroll$ = fromEvent(document, "scroll");
const progress$ = scroll$.pipe(
  map((event) => calcularPorcentajeScroll(event)),
  tap(console.log)
);

progress$.subscribe((porcentaje) => {
  progressBar.style.width = `${porcentaje}%`;
});
