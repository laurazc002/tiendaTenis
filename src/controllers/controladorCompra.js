
//console.log(JSON.parse(localStorage.getItem('infoProducto')))
let producto = JSON.parse(localStorage.getItem('infoProducto'))
console.log(producto)
let carrito
//REVISAR VERIFICAR SI HAY PRODUCTOS EN EL CARRITo
if (JSON.parse(localStorage.getItem('carrito')) == null) {
   // agregamos el carrito de compras
   carrito = []
}
else {
   carrito = JSON.parse(localStorage.getItem('carrito'))
}
//console.log(JSON.parse(localStorage.getItem('carrito')))

//pintamos la foto desde el localstorage
let foto = document.getElementById('foto')
let nombre = document.getElementById('nombre')
let precio = document.getElementById('precio')
let descripcion = document.getElementById('descripcion')
let popularidad = document.getElementById('star')
foto.src = producto.foto
nombre.textContent = producto.nombre
precio.textContent = '$ ' + producto.precio
descripcion.textContent = producto.descripcion

// caso para sacar las estrellas de polularidad
switch (producto.popularidad) {
   case '1':{
      let estrella1=document.createElement('i') 
      estrella1.classList.add('bi' ,'bi-star-fill')
      
      popularidad.appendChild(estrella1)
      break;
   }

   case '2':
      {
         let estrella1=document.createElement('i') 
         estrella1.classList.add('bi' ,'bi-star-fill')
         let estrella2=document.createElement('i') 
          estrella2.classList.add('bi' ,'bi-star-fill') 

          popularidad.appendChild(estrella1)
          popularidad.appendChild(estrella2) 
         break;
      }

   case '3':{
      let estrella1=document.createElement('i') 
      estrella1.classList.add('bi' ,'bi-star-fill')
      let estrella2=document.createElement('i') 
      estrella2.classList.add('bi' ,'bi-star-fill')
      let estrella3=document.createElement('i') 
      estrella3.classList.add('bi' ,'bi-star-fill')
      
      popularidad.appendChild(estrella1)
      popularidad.appendChild(estrella2)
      popularidad.appendChild(estrella3)
      break;
   }   
   
   case '4':
      {
         let estrella1=document.createElement('i') 
         estrella1.classList.add('bi' ,'bi-star-fill')
         let estrella2=document.createElement('i') 
         estrella2.classList.add('bi' ,'bi-star-fill')
         let estrella3=document.createElement('i') 
         estrella3.classList.add('bi' ,'bi-star-fill')
         let estrella4=document.createElement('i') 
         estrella4.classList.add('bi' ,'bi-star-fill')
         
         popularidad.appendChild(estrella1)
         popularidad.appendChild(estrella2)
         popularidad.appendChild(estrella3)
         popularidad.appendChild(estrella4) 
         
         break
      }
      
      case '5':
         {
         console.log(producto.popularidad)
       let estrella1=document.createElement('i') 
         estrella1.classList.add('bi' ,'bi-star-fill')
       let estrella2=document.createElement('i') 
      estrella2.classList.add('bi' ,'bi-star-fill')
      let estrella3=document.createElement('i') 
      estrella3.classList.add('bi' ,'bi-star-fill')
      let estrella4=document.createElement('i') 
      estrella4.classList.add('bi' ,'bi-star-fill')
      let estrella5=document.createElement('i') 
      estrella5.classList.add('bi' ,'bi-star-fill')

      popularidad.appendChild(estrella1)
      popularidad.appendChild(estrella2)
      popularidad.appendChild(estrella3)
      popularidad.appendChild(estrella4)
      popularidad.appendChild(estrella5)
         break
      }   
      
}

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
   localStorage.setItem('carrito', JSON.stringify(carrito))
   //localStorage.setItem('contadorCarrito',JSON.stringify(contadorCarrito))
   //document.getElementById('sumaProductos').innerHTML = contadorProducto


   let contadorProducto = 0
   carrito.forEach(function (producto) {

      contadorProducto = (contadorProducto + Number(producto.cantidad))

      localStorage.setItem('contadorProducto', contadorProducto);

      let contadorDeProductos = localStorage.getItem('contadorProducto')
      document.getElementById('numeroProducto').innerHTML = Number(contadorDeProductos)

      console.log(contadorDeProductos)
   })
})

let contadorDeProductos = localStorage.getItem('contadorProducto')
document.getElementById('numeroProducto').innerHTML = Number(contadorDeProductos)