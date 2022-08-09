import {ponerEstrellas} from './controladorEstrellas.js'
import {productosBD} from '../helpers/basedatos.js'

//console.log(JSON.parse(localStorage.getItem('infoProducto')))
let producto = JSON.parse(sessionStorage.getItem('infoProducto'))
console.log(producto)
let carrito
//REVISAR VERIFICAR SI HAY PRODUCTOS EN EL CARRITo
if (JSON.parse(sessionStorage.getItem('carrito')) == null) {
   // agregamos el carrito de compras
   carrito = []
}
else {
   carrito = JSON.parse(sessionStorage.getItem('carrito'))
}
//console.log(JSON.parse(localStorage.getItem('carrito')))

//pintamos la foto desde el localstorage
let fotoPrincipal = document.getElementById('foto')
let nombre = document.getElementById('nombre')
let precio = document.getElementById('precio')
let descripcion = document.getElementById('descripcion')
let foto1=document.getElementById('foto1')
let foto2=document.getElementById('foto2')
console.log(productosBD[0].nombre)
console.log(producto.nombre)

productosBD.forEach(function(productoNuevo){
   console.log(productoNuevo.nombre)
if(producto.nombre==productoNuevo.nombre){
   producto.foto=productoNuevo.foto
   console.log(producto.foto)
}
})


fotoPrincipal.src = producto.foto[0]
nombre.textContent = producto.nombre
precio.textContent =  producto.precio
descripcion.textContent = producto.descripcion
foto1.src = producto.foto[0]
foto2.src = producto.foto[1]


foto1.addEventListener('mouseover',function(){
   fotoPrincipal.src=producto.foto[0]  
   })
 foto2.addEventListener('mouseover',function(){
      fotoPrincipal.src=producto.foto[1]  
      })
   

ponerEstrellas(producto.popularidad)

// capturar la cantidad del producto seleccionado
// capturamos el value

// agrego un nuevo atributo(cantidad) al objeto atributo
let botonAgregar = document.getElementById('agregar')
//se agrega producto al carrito
botonAgregar.addEventListener('click', function (evento) {
   let alerta = document.getElementById('alerta')

   setTimeout(function () {
      alerta.classList.remove('invisible')

   }, 3000)
   let cantidad = document.getElementById('cantidad').value
   producto.cantidad = cantidad

   //let contadorProducto= 0
   //contadorProducto= producto.cantidad+contadorProducto
   //agregando un producto al carrito de compras
   carrito.push(producto)


   // almaceno el carrito e el localstorage
   sessionStorage.setItem('carrito', JSON.stringify(carrito))
   //localStorage.setItem('contadorCarrito',JSON.stringify(contadorCarrito))
   //document.getElementById('sumaProductos').innerHTML = contadorProducto


   let contadorProducto = 0
   carrito.forEach(function (producto) {

      contadorProducto = (contadorProducto + Number(producto.cantidad))

      sessionStorage.setItem('contadorProducto', contadorProducto);

      let contadorDeProductos = sessionStorage.getItem('contadorProducto')
      document.getElementById('numeroProducto').innerHTML = Number(contadorDeProductos)

      console.log(contadorDeProductos)
   })
})

let contadorDeProductos = sessionStorage.getItem('contadorProducto')
document.getElementById('numeroProducto').innerHTML = Number(contadorDeProductos)