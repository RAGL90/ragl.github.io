//Forma que SIEMPRE hay que añadir
window.addEventListener("load", () => {
  let id = 0;
  let text = "";
  let alert = document.querySelector(".alert");
  let closeButton = alert.firstElementChild; //Siguiente elemento a alert es Close
  let input = document.querySelector("#task");
  let arrow = document.querySelector(".arrow");

  
  //console.log(arrow);

  closeButton.addEventListener("click", () => {
    alert.classList.add("dismissible");
  });

  //Conocer cuando el usuario se situa en el input
  input.addEventListener("focus", () => {
    document.addEventListener("keydown", (event) => {
        //console.log(event.code);
        //Desactivamos el Intro numerico
        if (event.code=="NumpadEnter" || event.code=="Enter") {
            event.preventDefault();
        }
      //Conocer cuando se pulsa una tecla
    });
  });
  //Ventana de notificación
  arrow.addEventListener('click',(e) => {
    if (input.value.trim() == "") {
      //El atributo .value es el que contiene el contenido de cualquier input
      //Con la funcion .trim() evitamos los espacios que introduzca el usuario al principio y final del string
      console.log("Empty");
      e.preventDefault();
      input.value = ''; // Resetemamos el valor si está vacio
      alert.classList.remove("dismissible");
    } else {
      text = input.value;//  Esta variable está creada arriba
      input.value = ''; //Reseteamos para cuando le da el botón
      // console.log(text);
      id = parseInt(document.querySelector("tbody")?.lastElementChild?.id)+ 1 || 0;
      /* !!!!!!
      El símbolo "?" es condicional, lo intenta si lo encuentra y si no arroja el error.
      "|| 0" , es por si no hubiese ID en las tablas, no existe, el id será 0.
      */
      //console.log(id);

      //Creamos una nueva FILA un nuevo elemento TR
      let newRow = document.createElement('tr');
      newRow.setAttribute("id",id); //Añadimos a la etiqueta html id el valor de la variable id
      newRow.innerHTML = `
      <td>
                  <i class="fa-solid fa-circle-check fa-2x"></i>
                  <span class="task" contenteditable="true">${text}</span>
                </td>
                <td>
                  <span class="fa-stack fa-2x">
                    <i class="fa-solid fa-square fa-stack-2x"></i>
                    <i class="fa-solid fa-pencil fa-stack-1x fa-inverse"></i>
                  </span>
                </td>
                <td>
                  <span class="fa-stack fa-2x">
                    <i class="fa-solid fa-square fa-stack-2x"></i>
                    <i class="fa-solid fa-trash fa-stack-1x fa-inverse"></i>
                  </span>
      </td>
      `; //Añadimos todo el HTML desde despues de TR e incluimos la variable "text"

      //newRow tiene añadido el ID, el TR y el contenido. AHORA LO INSERTAMOS tras tbody:
      document.querySelector('tbody').appendChild(newRow);
      
      //Eliminamos la etiqueta de alerta o instrucciones
      if (!alert.classList.contains("dismissible")) {
        alert.classList.add ("dismissible"); 
      }
    }

  });

});
