//importaciones
import { productosBD } from "../controllers/ControladorDatos.js";

import { pintarProductos } from "./controladorllenado.js";

let buscador = document.getElementById("busqueda");
buscador.addEventListener("keypress", function (evento) {
  console.log(evento.target.value);
});
