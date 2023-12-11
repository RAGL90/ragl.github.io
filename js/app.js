//Forma que SIEMPRE hay que añadir
window.addEventListener("load", () => {
  let id = 0;
  let text = "";
  let alert = document.querySelector(".alert");
  let closeButton = alert.firstElementChild; //Siguiente elemento a alert es Close
  let input = document.querySelector("#task");
  let arrow = document.querySelector(".arrow");
  let done = document.querySelectorAll(".fa-circle-check");
  let remove = document.querySelectorAll(".fa-trash");
  let edit = document.querySelectorAll(".fa-pencil");
  let task = document.querySelectorAll(".task");
  //console.log(done); //Es una "NodeList"
  //console.log(arrow);

  closeButton.addEventListener("click", () => {
    alert.classList.add("dismissible");
  });

  //Conocer cuando el usuario se situa en el input
  input.addEventListener("focus", () => {
    document.addEventListener("keydown", (event) => {
      //console.log(event.code);
      //Desactivamos el Intro numerico
      if (event.code == "NumpadEnter" || event.code == "Enter") {
        event.preventDefault();
      }
      //Conocer cuando se pulsa una tecla
    });
  });
  //Ventana de notificación
  arrow.addEventListener("click", (e) => {
    if (input.value.trim() == "") {
      //El atributo .value es el que contiene el contenido de cualquier input
      //Con la funcion .trim() evitamos los espacios que introduzca el usuario al principio y final del string
      console.log("Empty");
      e.preventDefault();
      input.value = ""; // Resetemamos el valor si está vacio
      alert.classList.remove("dismissible");
    } else {
      text = input.value; //  Esta variable está creada arriba
      input.value = ""; //Reseteamos para cuando le da el botón
      // console.log(text);
      id =
        parseInt(document.querySelector("tbody")?.lastElementChild?.id) + 1 ||
        0;
      /* !!!!!!
      El símbolo "?" es condicional, lo intenta si lo encuentra y si no arroja el error.
      "|| 0" , es por si no hubiese ID en las tablas, no existe, el id será 0.
      */
      //console.log(id);

      //newRow es una función al que enviamos los parámetros ID y <tr> y el contenido. AHORA LO INSERTAMOS tras tbody:
      document.querySelector("tbody").appendChild(generateRow(id, text));

      //Eliminamos la etiqueta de alerta o instrucciones
      if (!alert.classList.contains("dismissible")) {
        alert.classList.add("dismissible");
      }
    }
  });
  //Listener para Check de Tareas

  //Done como "queryselectorAll" es una colección de elementos no puede ser tratado como una función

  // done.addEventListener('click',(e) => {
  //   console.log("Working");
  //   });

  //Listener para borrar filas (PAPELERA)
  done.forEach((item) => {
    //Teniendo en cuenta que DONE son arrays y por tanto ha que hacer un ForEach para cada elemento
    item.addEventListener("click", (e) => {
      taskDone(e); //Llamada a taskDone
    });
  });

  remove.forEach((item) => {
    item.addEventListener("click", (e) => {
      removeTask(e, false); //Llamada a removeTask
    });
  });

  edit.forEach((item) => {
    item.addEventListener("click", (e) => {
      editTask(e, false); //Llamada a editTask (90)
    });
  });

  //Bucle para Task
  task.forEach((item) => {
    item.addEventListener("focus", (e) => {
      editTask(e, true); //Llamada a editTask (90)
    });
  });
});

// Functions (Funciones que no deben cargarse hasta ser llamadas)

//Funcion EditTask para editar tareas del Checklist
const editTask = (e, onFocus) => {
  let editable = e;
  if (onFocus) {
    //console.log(e.target);
    editable.target.classList.add("editable");
    document.addEventListener("keydown", (e) => {
      //console.log(e.code);
      if (e.code == "Escape") {
        editable.target.classList.remove("editable");
        editable.target.blur(); //Evento para quitar el foco
        if (editable.target.innerHTML == "" || editable.target.textContent.trim() == "") {
          removeTask(editable, true);
          console.log("Línea borrada");
        }
      }
    });
    editable.target.addEventListener("blur", () => {
      editable.target.classList.remove("editable");
      if (editable.target.innerHTML == "" || editable.target.textContent.trim() == "") {
        removeTask(editable, true);
        console.log("Línea borrada");
      }
    });
  } else {
    let editable =
      e.target.parentNode.parentNode.previousElementSibling.lastElementChild;
    editable.classList.add("editable");
    editable.focus();
  }
  //console.log(task);
};

//Funcion removeTask para eliminar tareas del Checklist
const removeTask = (e, editing) => {
  if (editing) {
    e.target.parentNode.parentNode.remove(); //Cuando se le llama desde "editTask"
  } else {
    e.target.parentNode.parentNode.parentNode.remove(); //Cuando es llamado desde el Icono de Borrar
  }
};

//Funcion taskDone para tachar tareas realizadas pulsando el botón verde
const taskDone = (e) => {
  let task = e.target.nextElementSibling;
  console.log(task);
  text = task.innerHTML;

  if (text.includes("<del>")) {
    console.log("DEL tag detected!");
    task.innerHTML = task.firstElementChild.textContent;
    task.setAttribute("data-completed", "false");
    // task.innerHTML = text.firstElementChild.textContent; NO puede ser porque estamos haciendo referencia al innerHTML
    // task.innerHTML = `${text}`; Tampoco puede ser, porque estamos reescribiendo TODO el <SPAN>
  } else {
    console.log("Without DEL tag");
    task.innerHTML = `<del>${text}</del`;
    task.setAttribute("data-completed", "true");
  }
};

//Funcion generateRow para crear nuevas tareas del Checklist
const generateRow = (id, text) => {
  let newRow = document.createElement("tr");
  newRow.setAttribute("id", id); //Añadimos a la etiqueta html id el valor de la variable id
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
      `;
     newRow.firstElementChild.firstElementChild.addEventListener("click",(e) => {
      taskDone(e);
     });
     newRow.firstElementChild.lastElementChild.addEventListener("click", (e) => {
      //console.log("Aqui escucho!");
      editTask(e, true);
     });
     newRow.firstElementChild.nextElementSibling.firstElementChild.addEventListener("click", (e) => {
      //console.log("Aqui escucho desde el icono!");
      editTask(e, false);
     });
     newRow.lastElementChild.firstElementChild.addEventListener("click", (e) => {
      removeTask(e, false);
     });
  return newRow;
};

//Añadir Done, To Do