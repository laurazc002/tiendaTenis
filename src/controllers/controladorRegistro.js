import {getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js"

let boton=document.getElementById('botonRegistro')
let email=document.getElementById('email')
let contraseña=document.getElementById('contraseña')

boton.addEventListener('click',function(evento){
 evento.preventDefault()  
 email=email.value
 contraseña=contraseña.value
// enviando datos hacia google
const auth = getAuth();
createUserWithEmailAndPassword(auth, email, contraseña)
.then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
    alert('bienvenido')
  })
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    alert('ups'+errorMessage)
 });

})

let contadorDeProductos=sessionStorage.getItem('contadorProducto')
document.getElementById('numeroProducto').innerHTML = Number (contadorDeProductos)