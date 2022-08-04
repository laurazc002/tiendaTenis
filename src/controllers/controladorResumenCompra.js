
import{pintarResumenCompra} from './controladorPintarResumen.js'
// accedemos a la variable local del carrito
let carrito=JSON.parse(localStorage.getItem('carrito'))

//limpiar
//contenedor.innerHTML=''

// comparamos si el  carrito esta vacio
if(carrito==null){
    pintarResumenCompra('../../assets/img/carrovacio.jpg','Carrito Vacio',true,false,null,false,null,false)
}

else{
    //recorro el carrito de compras
    let acumuladorValorTotal=0
    let  subTotal
    carrito.subTotal=subTotal
     console.log(carrito.subTotal)
    carrito.forEach(function(producto){
        producto.subTotal=Number(producto.precio)*Number(producto.cantidad)
        acumuladorValorTotal=acumuladorValorTotal+producto.subTotal
        pintarResumenCompra(producto.foto,producto.nombre,false,true,true,producto.precio,producto.cantidad,producto.subTotal)

    })
   

    console.log(acumuladorValorTotal)

    let contenedorTotal=document.getElementById('total')
     let fila=document.createElement('div')
    fila.classList.add('row','my-5')
    let columna=document.createElement('div')
    columna.classList.add('col-12','cold-md-6','text-center','border-end')
    let titulo=document.createElement('h2')
    titulo.classList.add('text-center')
    titulo.textContent='TOTAL DE LA COMPRA'
    let ValorTotal=document.createElement('h3')
    ValorTotal.classList.add('text-center','border-end')
    ValorTotal.textContent='$ '+ acumuladorValorTotal + ' COP'
   //padres e Hijos
    columna.appendChild(titulo)
    columna.appendChild(ValorTotal)
    fila.appendChild(columna)        
    contenedorTotal.appendChild(fila)



}









//Rutina para limpiar resumen de la compra
let botonLimpiar = document.getElementById('botonLimpiar')
botonLimpiar.addEventListener("click", function(){
    localStorage.removeItem("carrito")
    localStorage.removeItem('contadorProducto')
    let contenedor = document.getElementById('contenedor')
    contenedor.innerHTML= ""
    pintarResumenCompra('../../assets/img/carrovacio.jpg','Carrito Vacio', true, false, null, false, null,false)
    document.getElementById('numeroProducto').innerHTML= 0
    document.getElementById('total').innerHTML=''
})
// voy al LocalStorage y bajo el valor de la clave contadorProducto que es el conteo de los productos en el carrito
let contadorDeProductos=localStorage.getItem('contadorProducto')
document.getElementById('numeroProducto').innerHTML = Number (contadorDeProductos)



