import "../css/componentes.css";
import webpacklogo from "../assets/images/webpack-logo.png";

export const saludar = (nombre) => {
  const h1 = document.createElement("h1");
  h1.innerText = `Hola ${nombre}`;
  document.body.append(h1);

  // img
  console.log(webpacklogo);
  const img = document.createElement("img");
  img.src = webpacklogo;
  document.body.append(img);
};
