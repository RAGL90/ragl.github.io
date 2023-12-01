//Forma que SIEMPRE hay que añadir
window.addEventListener("load", () => {
  let id = 0;
  let text = "";
  let alert = document.querySelector(".alert");
  let closeButton = alert.firstElementChild; //Siguiente elemento a alert es Close
  let input = document.querySelector("#task");
  let arrow = document.querySelector(".arrow");
  console.log(arrow);

  closeButton.addEventListener("click", () => {
    alert.classList.add("dismissible");
  });

  //Conocer cuando el usuario se situa en el input
  input.addEventListener("focus", () => {
    document.addEventListener("keydown", (event) => {
        console.log(event.code);
        //Desactivamos el Intro numerico
        if (event.code=="NumpadEnter" || event.code=="Enter") {
            event.preventDefault();
        }
      //Conocer cuando se pulsa una tecla
    })
  });
});
