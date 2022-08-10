
export function pintarResumenCompra(fotoURL,fotoURL2,nombreMensaje,banderaBoton,banderaBotonRemueve,banderaPrecio,banderaCantidad,precioProducto,cantidadProducto,elSubTotal){
  let contadorProducto=  sessionStorage.getItem('contadorProducto')
  console.log(contadorProducto)
    let contenedor = document.getElementById('contenedor')

    let fila1=document.createElement
    ('div')
    fila1.classList.add('row','my-3')
    fila1.setAttribute('id','filaProducto')
    
    let columna1=document.createElement('div')
        columna1.classList.add('col-12','col-md-6','border-end')

    let columna2=document.createElement('div')
        columna2.classList.add('col-12','col-md-3','text-center','mt-4','align-self-center')

    let foto=document.createElement('img')
    foto.classList.add('img-fluid' ,'w-100' )
    foto.src=fotoURL

    let nombre=document.createElement('h3')
    nombre.classList.add('text-center')
    nombre.textContent= nombreMensaje

    let boton=document.createElement('a')
    boton.classList.add('btn','btn-primary','w-50','d-block','mx-auto')
    boton.textContent='Ir a la Tienda'
    boton.setAttribute('href',"../views/productos.html")
    
    let botonRemueve=document.createElement('button')
    botonRemueve.classList.add('btn','btn-black','my-5','text-center')
    botonRemueve.textContent='Eliminar Producto'
    botonRemueve.setAttribute('type','button')



    let precio = document.createElement('h4')
    precio.setAttribute
    precio.classList.add('border-end')
    precio.textContent = 'Precio Und =' +  precioProducto 


    let cantidad = document.createElement('h3')
    cantidad.textContent = 'Cantidad = '+ cantidadProducto + ' Par' 
   
   
    let sumaPrecioProducto = document.createElement('h2')
    sumaPrecioProducto.textContent = 'Sub Total del Articulo es $ '+elSubTotal+' COP'

    //console.log(elSubTotal )

    //padres e hijos
    columna1.appendChild(foto)
    if(banderaBotonRemueve==true){
    columna1.appendChild(botonRemueve)
    }
    columna2.appendChild(nombre)

    if(banderaBoton == true){
        columna2.appendChild(boton)
    }
    if(banderaPrecio == true){
        columna2.appendChild(precio)
    }
    if(banderaCantidad == true){
        columna2.appendChild(cantidad)
    }
    if(elSubTotal !=false){
        columna2.appendChild(sumaPrecioProducto)
    }
   

    fila1.appendChild(columna1)
    fila1.appendChild(columna2)
    contenedor.appendChild(fila1)

    foto.addEventListener('mouseover',function(evento){
        foto.src=fotoURL2 
        })
    columna1.addEventListener('mouseleave',function(evento){
         foto.src=fotoURL
        })

botonRemueve.addEventListener('click',function(evento){
console.log('funciona')
//resto la cantidad del carrito
contadorProducto=contadorProducto-cantidadProducto
//actualizo el contador del carrito
sessionStorage.setItem('contadorProducto',contadorProducto)
let contadorDeProductos = sessionStorage.getItem('contadorProducto')
document.getElementById('numeroProducto').innerHTML = Number(contadorDeProductos)
//descontar el subtotal de el total




//bajar el carrito actializar sus productos y devolverlo
let carritoParaActualizar=JSON.parse(sessionStorage.getItem('carrito'))
console.log(carritoParaActualizar)
let numeroVuelta=0


WHILE (carritoNuevo.cantidad==cantidadProducto&&carritoNuevo.precio==precioProducto&&carritoNuevo.nombre==nombreMensaje)
	{
        
        numeroVuelta=numeroVuelta+1
    }
console.log('vuelta ' + numeroVuelta)












//remuevo la fila donde se dibujo el producto
document.getElementById('filaProducto').remove()

})


}   