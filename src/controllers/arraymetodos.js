
let plato1={
nombre: "Lomo de Cerdo Enclilado",
precio:38000,
descripcion: 'Exquisito lomo de cerdo enchilado acompañado con papas cambray',
categoria:1,
foto:''

}

let plato2={
    nombre: "Tacos de Quelite vy requesón",
    precio:39000,
    descripcion: 'quelites con un poco de aceite, el diente de ajo, la cebolla, las hojas de epazote',
    categoria:2,
    foto:''
}

let plato3={
    nombre: "Albondigas a la mexicana",
    precio:36000,
    descripcion: 'Albondigas de Cerdo Ensalsadas en chile casero con perejin',
    categoria:1,
    foto:''
}

let plato4={
    nombre: "Tacos de Jicana",
    precio:35000,
    descripcion: 'Combinados con la Cocina Española los tacos destacan la conbinacion de especias',
    categoria:2,
    foto:''
}

let plato5={
    nombre: "Pizza de  Verduras Frescas",
    precio:33000,
    descripcion: 'una preparación culinaria que consiste en un pan plano, habitualmente de forma circular',
    categoria:3,
    foto:''
}

let platos=Array(plato1,plato2,plato3,plato4,plato5)
//1.forEach
platos.forEach(function(plato){
    console.log(plato.nombre)
})

//2. Filter

let resultado=platos.filter(function(plato){
   // return(plato.categoria==2)
    return(plato.precio>35000)
})

console.log(resultado)

resultado=platos.filter(function(plato){
    return(plato.precio>35000 && plato.categoria==1)
})
console.log(resultado)

//3 find

let busqueda=platos.find(function(plato){
    return(plato.precio==33000)
})

console.log(busqueda)

busqueda=platos.find(function(plato){
    return(plato.categoria=1)
})

console.log(busqueda)
// 4.map

let mapa=platos.map(function(plato){
    return(plato.categoria=100)
})

console.log(mapa)

//5. push

let plato6={
    nombre: "Mondongo",
    precio:280000,
    descripcion: 'sopa',
    categoria:1,
    foto:''
}
platos.push(plato6)
console.log(platos)