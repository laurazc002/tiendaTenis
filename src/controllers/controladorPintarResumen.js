
export function pintarResumenCompra(fotoURL,fotoURL2,nombreMensaje,banderaBoton,banderaPrecio,banderaCantidad,precioProducto,cantidadProducto,elSubTotal){
    let contenedor = document.getElementById('contenedor')

    let fila1=document.createElement
    ('div')
    fila1.classList.add('row','my-3')
    
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

    columna1.addEventListener('mouseover',function(){
        fotoproducto.src=fotoURL2 
        })
    columna1.addEventListener('mouseleave',function(){
         fotoproducto.src=fotoURL
        })

}