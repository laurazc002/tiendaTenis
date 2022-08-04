//construyendo arreglos

// 1 forma--TRadicional
let numeros=[1,2,3,4,5]

//2.forma--Orientada a objetos(poo)

let numerosPoo=Array(1,2,3,4,5)
let nombresPoo=Array('juan','andres','camila')

//imprimir los elementos del arreglo

console.log(numeros)
console.log(nombresPoo)

// accerder a un solo elemento
console.log(numeros[2]-1)
console.log(nombresPoo[1])

//objetos js
let persona={
    nombre:'luis',
    edad:26,
    hinchaDelNacional:false,
    foto:'url'
}
console.log(persona)

//acceder a un solo elemento

console.log(persona.nombre)

// crear un objeto   // https://www.expansion.com/fueradeserie/moda-y-caprichos/2022/05/31/6287a164e5fdea851c8b456d.html pagina de tenis


let nombre = "juan"


//controlando etiquetas
// 1. almaceno una etiqueta en una variable
let titulo = document.getElementById('titulo')
console.log(titulo)
let imagen = document.getElementById('foto')
let titulo2=document.getElementById('titulo2')
let boton=document.getElementById('boton')
// 2. identifico que quiero controlar

// 3 MODIFICANDO ESTILOS
//3.1 AGG UNA CLASE
titulo.classList.add('text-danger','titul')
//3.2 quitando una clase
titulo2.classList.remove('text-info')
titulo2.classList.add('text-danger')
//4. ESCUCHANDO EVENTOS
boton.addEventListener('click',function(){   // aqui en los parametros se llamo una funcion anonima"que no tienen nombre"
    // 2.1 cambiando el texto
    titulo.textContent="CHAO"
    //  alert('hola')
    // 2.2 cambiando la fuente (SRC)
    imagen.src="https://firebasestorage.googleapis.com/v0/b/livtiendatcc.appspot.com/o/Forum84.png?alt=media&token=52c7ae41-64f1-4e00-80b5-4f7cd6855e15"
     console.log('esta es la funcion anonima, se activa con el boton')    
    })     

 
    
    AdidasForum84Low={
    nombre:'Adidas Forum 84 Low ADV',
    precio: 499990,
    cantidad:3,
    foto:'../assets/img/Adidas Forum 84 Low ADV.png',
    Descripcion:'Adidas se suma a la estética retro con sus Adidas Forum 84 Low ADV, uno de sus modelos más populares para este año, con colores blanco y crudo.'
}




