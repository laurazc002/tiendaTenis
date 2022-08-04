// se traen los datos de los productos (Consultar la BD)
import { productosBD } from "../helpers/basedatos.js";
console.log(productosBD);
//llamamos el metodo encargado de ampliar traversing y pintar la tienda
import { pintarProductos } from "./pintarproductos.js";
pintarProductos(productosBD);
//llamamos al metodo encargado de buscar productos por texto coincidente
import { buscarProductos } from "./controlaorbuscar.js";
buscarProductos();

// escuchamos clic en el controlador padre de la tienda
import { ampliarInfoProducto } from "./crearProductos.js";



let contenedor = document.getElementById("fila");
contenedor.addEventListener("click", function (evento) {
  let producto = ampliarInfoProducto(evento);
  console.log(producto)
    


//ALMACENAR EN EL LOCAL STORAGE EL PRODUCTO SELECCIONADO
    localStorage.setItem('infoProducto',JSON.stringify(producto))
// abro nueva ventana
window.location.href='./ampliarinfo.html'

});

let contadorDeProductos=localStorage.getItem('contadorProducto')
document.getElementById('numeroProducto').innerHTML = Number (contadorDeProductos)