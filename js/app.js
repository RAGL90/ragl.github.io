//El JavaScript debe de estar insertado todo el codigo HTML y CSS antes de que se cargue JS.

/*
Se pueden añadir eventos a cualquier elemento.
Al documento, siempre le añadimos un evento para compprobar que todo se ha cargado
*/
/* Se activa cuando se ha cargado el DOM sin esperar a Hoja de estilos, 
pero como antes de cargar este JS, se ha cargado antes CSS, está bien utilizado */
document.addEventListener("DOMContentLoaded", ()=>{
    let icon = document.querySelector(".fa-solid");
    let header = document.querySelector("h1");

    //Automatizamos el cambio de color cada 2 segundos (se ajusta en el set interval al final.)
    const randomColor = setInterval(() => {
        let selector = Math.floor((Math.random()*5)+1);
        let selectedId;
        switch (selector) {
            case 1:
                selectedId = "A";
                break;
            case 2:
                selectedId = "B";
                break;
            case 3:
                selectedId = "C";
                break;
            case 4:
                selectedId = "D";
                break;
            case 5:
                selectedId = "E";
                break;
            default:
                break;
        }
        header.id = selectedId;
        console.log(selectedId);
    }, 2000);

    //Añadimos un escuchador de eventos en el área icono
    icon.addEventListener("click", ()=>{        //Cuando hacemos click
       document.body.classList.toggle("light"); //Cambia body e iconos alternando las clases
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


