


import { pintarResumenCompra } from './controladorPintarResumen.js'
// accedemos a la variable local del carrito
let carrito = JSON.parse(sessionStorage.getItem('carrito'))

// comparamos si el  carrito esta vacio
if (carrito == null) {
    pintarResumenCompra('../../assets/img/carrovacio.jpg', 'Carrito Vacio', true, false, null, false, null, false)
}

else {
    let acumuladorValorTotal = 0
    //agrego al carrito el subtotal
    let subTotal
    carrito.subTotal = subTotal
    
    //recorro el carrito de compras
    carrito.forEach(function (producto) {
        producto.subTotal = Number(producto.precio.split('$')[1].split('COP')[0]) * Number(producto.cantidad)
       //suma de subtotales para obtener el total 
        acumuladorValorTotal = acumuladorValorTotal + producto.subTotal
        pintarResumenCompra(producto.foto, producto.nombre, false, true, true, producto.precio, producto.cantidad, producto.subTotal)
    })
    //Boton para cambiar de dolar a pesos (biseversa)
    let interruptor = 'dolar'
    //detecto el click del boton
    let cambioMoneda = document.getElementById('cambioMoneda')
    cambioMoneda.addEventListener('click', function (evento) {
     let contenedor = document.getElementById('contenedor')
    // un SI para Doble Funcion del click   
     if (interruptor == 'dolar') {

        //Detecto los Valores que contienen la etiquetas
            let precioEnPesosSubTotal = contenedor.querySelectorAll('h2')
            // recorro los valores recolectados
            precioEnPesosSubTotal.forEach(function (etiqueta) {
                //Aplico filtros para obtener los valores 
                let filtroSubToltal = etiqueta.textContent.slice(28).split(' ')[0] / 4000
                filtroSubToltal=filtroSubToltal.toFixed(2)
               //pinto el nuevo contenido de la etiqueta 
                etiqueta.textContent = 'Sub Total del Articulo es $ ' + filtroSubToltal + ' USD'
            })

            let precioEnPesos = contenedor.querySelectorAll('h4')
            precioEnPesos.forEach(function (etiqueta) {
                let filtroEnPesos = etiqueta.textContent.slice(13).split('COP')[0]/ 4000 
               filtroEnPesos=filtroEnPesos.toFixed(2)
                etiqueta.textContent = 'Precio Und =$' + filtroEnPesos + 'USD'
                
            })
            //detecto valor de etiqueta Total y aplico filtros necesarios
            let totalDolar = contenedorTotal.querySelector('h3').textContent.split('$')[1].split('COP')[0] / 4000
            totalDolar=totalDolar.toFixed(2)
            document.getElementById('totalEnDolar').innerHTML = '$' + totalDolar + 'USD'
           // inteeruptor para doble funcion del boton
            interruptor = 'pesos'
        } else {

            let precioEnPesosSubTotal = contenedor.querySelectorAll('h2')
            precioEnPesosSubTotal.forEach(function (etiqueta) {

             let filtroSubToltal    = etiqueta.textContent.slice(28).split(' ')[0] *4000
             etiqueta.textContent = 'Sub Total del Articulo es $ ' + filtroSubToltal+ ' COP'    
                  
            })

           let precioEnPesos = contenedor.querySelectorAll('h4')
            precioEnPesos.forEach(function (etiqueta) {
                let filtroEnPesos =etiqueta.textContent.slice(13).split('USD')[0] * 4000
               etiqueta.textContent = 'Precio Und =$' + filtroEnPesos + 'COP'
                   
            }) 
                let totalDolar = contenedorTotal.querySelector('h3').textContent.split('$')[1].split('USD')[0]* 4000
                document.getElementById('totalEnDolar').innerHTML = '$' + totalDolar+ 'COP'
            interruptor = 'dolar'
        }
    })
    //Dibujando el Total 
    let contenedorTotal = document.getElementById('total')
    let fila = document.createElement('div')
    fila.classList.add('row', 'my-5')
    let columna = document.createElement('div')
    columna.classList.add('col-12', 'cold-md-6', 'text-center', 'border-end')
    let titulo = document.createElement('h2')
    titulo.classList.add('text-center')
    titulo.textContent = 'TOTAL DE LA COMPRA'
    let ValorTotal = document.createElement('h3')
    //agrego Id para manipular contenido de la etiqueta
    ValorTotal.setAttribute('id', 'totalEnDolar')
    ValorTotal.classList.add('text-center', 'border-end')
    ValorTotal.textContent = '$' + acumuladorValorTotal + 'COP'

    //padres e Hijos
    columna.appendChild(titulo)
    columna.appendChild(ValorTotal)
    fila.appendChild(columna)
    contenedorTotal.appendChild(fila)
}
//Rutina para limpiar resumen de la compra
    let botonLimpiar = document.getElementById('botonLimpiar')
    botonLimpiar.addEventListener("click", function () {
    sessionStorage.removeItem("carrito")
    sessionStorage.removeItem('contadorProducto')
    let contenedor = document.getElementById('contenedor')
    contenedor.innerHTML = ""
    pintarResumenCompra('../../assets/img/carrovacio.jpg', 'Carrito Vacio', true, false, null, false, null, false)
    document.getElementById('numeroProducto').innerHTML = 0
    document.getElementById('total').innerHTML = ''
    document.getElementById('cambioMoneda').innerHTML=''
})

// voy al LocalStorage y bajo el valor de la clave contadorProducto que es el conteo de los productos en el carrito
let contadorDeProductos = sessionStorage.getItem('contadorProducto')
document.getElementById('numeroProducto').innerHTML = Number(contadorDeProductos)

