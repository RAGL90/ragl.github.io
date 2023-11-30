//El JavaScript debe de estar insertado todo el codigo HTML y CSS antes de que se cargue JS.

/*
Se pueden añadir eventos a cualquier elemento.
Al documento, siempre le añadimos un evento para compprobar que todo se ha cargado
*/
document.addEventListener("DOMContentLoaded", ()=>{
    let icon = document.querySelector(".fa-solid");
    
    let header = document.querySelector("h1");

   
    icon.addEventListener("click", (event)=>{
       console.log(event.target);
       console.log(event.type);
       document.body.classList.toggle("light");
       document.body.classList.toggle("dark");
       document.body.classList.toggle("tour");
       icon.classList.toggle("fa-sun");
       icon.classList.toggle("fa-moon");
       icon.classList.toggle("spin");
       header.classList.toggle("smack");
      /*
       if (header.textContent == "Good Morning!") {
        header.textContent = "Good Night!";
        } else {
        header.textContent = "Good Morning!";
        }
        //Condición alternativa, pero funcional
      */
        if (header.textContent.includes("Good Morning!")) {
            header.textContent = "Good Night!";
        } else {
            header.textContent = "Good Morning!";
        }
    })
});

/* Se activa cuando se ha cargado el DOM sin esperar a Hoja de estilos, 
pero como antes de cargar este JS, se ha cargado antes CSS, está bien utilizado */

