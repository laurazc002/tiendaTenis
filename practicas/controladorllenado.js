//DATOS DE LA BASE DE DATOS

//console.log(productosBD[5].nombre)


//Recorriendo un array(arreglo) esculcar

productosBD.forEach(function(producto){
    //console.log(producto.nombre)
    //console.log(producto.foto)

})

//funcion para pintar productos en la tienda





// PASOS PARA PINTAR (HACER RENDER) DE ETIQUETAS HTML DESDE JS --- TRAVERSING

//1. cREAR UNA REFERENCIA EN MEMORIA (VARIABLE) QUE ALMACENE LA ETIQUETA SONBRE LA CUAL VOY A PINTAR (ETIQUETA PADRE O RAIZ)

let fila=document.getElementById('fila')

// 2. recorro el arreglo de datos y aplico traversing 
productosBD.forEach(function(producto){
    //2.1 creando una columana desde js
    let columna=document.createElement('div')
    columna.classList.add('col')

    //2.2 creando tarjeta
    let tarjeta=document.createElement('div')
    tarjeta.classList.add('card','h1-100','text-center')

    //2.3 creando la foto
    let fotoproducto=document.createElement('img')
    fotoproducto.classList.add('img-fluid','w-100','h-100')
    fotoproducto.src=producto.foto
    //2.4 creando el nombre
    let nombreProducto=document.createElement('h3')
    nombreProducto.textContent=producto.nombre
    //2.5 Creando precio
    let precioProducto=document.createElement('h2')
    precioProducto.classList.add('fw-bold')
    precioProducto.textContent='$'+producto.precio+'COP'

    //2.6 Detectando eventos
    columna.addEventListener('mouseover',function(){
    fotoproducto.src=producto.foto[1]  
    })
    columna.addEventListener('mouseleave',function(){
        fotoproducto.src=producto.foto
    })
    //3. defino los parder e hijos (Jerarquias)
    tarjeta.appendChild(fotoproducto)
    tarjeta.appendChild(nombreProducto)
    tarjeta.appendChild(precioProducto)
    columna.appendChild(tarjeta)

    fila.appendChild(columna)

})

let buscador=document.getElementById('busqueda')
buscador.addEventListener('keypress',function(evento){
    console.log(evento.target.value)
})
