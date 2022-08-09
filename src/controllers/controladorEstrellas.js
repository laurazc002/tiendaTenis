let popularidad = document.getElementById('star')

export function ponerEstrellas(estrellas){
    
    switch (estrellas) {
        case '1':{
           let estrella1=document.createElement('i') 
           estrella1.classList.add('bi' ,'bi-star-fill')
           let estrella2=document.createElement('i') 
           estrella2.classList.add('bi' ,'bi-star')
           let estrella3=document.createElement('i') 
           estrella3.classList.add('bi' ,'bi-star')
           let estrella4=document.createElement('i') 
           estrella4.classList.add('bi' ,'bi-star')
           let estrella5=document.createElement('i') 
           estrella5.classList.add('bi' ,'bi-star')
           popularidad.appendChild(estrella1)
           popularidad.appendChild(estrella2)
           popularidad.appendChild(estrella3)
           popularidad.appendChild(estrella4)
           popularidad.appendChild(estrella5)
           break;
        }
     
        case '2':
           {
              let estrella1=document.createElement('i') 
              estrella1.classList.add('bi' ,'bi-star-fill')
              let estrella2=document.createElement('i') 
               estrella2.classList.add('bi' ,'bi-star-fill') 
               let estrella3=document.createElement('i') 
           estrella3.classList.add('bi' ,'bi-star')
           let estrella4=document.createElement('i') 
           estrella4.classList.add('bi' ,'bi-star')
           let estrella5=document.createElement('i') 
           estrella5.classList.add('bi' ,'bi-star')
     
               popularidad.appendChild(estrella1)
               popularidad.appendChild(estrella2) 
               popularidad.appendChild(estrella3)
               popularidad.appendChild(estrella4)
               popularidad.appendChild(estrella5)
              break;
           }
     
        case '3':{
           let estrella1=document.createElement('i') 
           estrella1.classList.add('bi' ,'bi-star-fill')
           let estrella2=document.createElement('i') 
           estrella2.classList.add('bi' ,'bi-star-fill')
           let estrella3=document.createElement('i') 
           estrella3.classList.add('bi' ,'bi-star-fill')
           let estrella4=document.createElement('i') 
           estrella4.classList.add('bi' ,'bi-star')
           let estrella5=document.createElement('i') 
           estrella5.classList.add('bi' ,'bi-star')
           
           popularidad.appendChild(estrella1)
           popularidad.appendChild(estrella2)
           popularidad.appendChild(estrella3)
           popularidad.appendChild(estrella4)
           popularidad.appendChild(estrella5)
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
              let estrella5=document.createElement('i') 
              estrella5.classList.add('bi' ,'bi-star')
              
              popularidad.appendChild(estrella1)
              popularidad.appendChild(estrella2)
              popularidad.appendChild(estrella3)
              popularidad.appendChild(estrella4) 
              popularidad.appendChild(estrella5)
              break
           }
           
           case '5':
              {
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
}