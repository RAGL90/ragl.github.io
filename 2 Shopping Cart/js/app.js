let cajaVerde = document.querySelectorAll(".dragTarget");
let cajaAzul = document.querySelector("#dropTarget");
let carro = document.querySelector("#carro");

// cajaVerde.addEventListener("click", () => {
//   //console.log("Div Verde!");
// });

// cajaAzul.addEventListener("click", () => {
//   //console.log("Div Azul!");
// });


let text = " "
let itemArrastrado = null;
//Eventos para Drag (elemento arrastrable)

//LOS ELEMENTOS QUE VAN A SER ARRASTRADOS TIENEN QUE TENER LA ETIQUETA <(elemntoHTML) draggable="true">

cajaVerde.forEach ( caja => { //Caja verde equivale a un conjunto de nodos (dos cajas verdes), por lo que lanzamos un bucle for each
  caja.addEventListener("dragstart",(e)=>{ //Les incluimos el escuchador
    itemArrastrado=e.target; //Asignamos a la variable el valor del elemento objetivo
    text = e.target.textContent; //Marcamos a la vble text el valor del contenido del nodo
    // console.log(itemArrastrado);
  })
})

// cajaVerde.addEventListener('dragstart',(e) => {
//   console.log("Drag Start");
//   // console.log(e.target);
//   itemArrastrado=e.target;
//   console.log(itemArrastrado);
//           // text = e.target.textContent;
//           // e.target.textContent = ""; //Así vaciamos el contenido del DIV
//           // console.log(text);
// });
// cajaVerde.addEventListener('drag',(e) => {
//   console.log("Drag");
// });
// cajaVerde.addEventListener('dragend',(e) => {
//   console.log("Drag End");
// });


//Eventos Drop para recibir el elemento arrastrado
cajaAzul.addEventListener('dragenter',(e) => {
  e.preventDefault();
  console.log("Drag Enter");
});

cajaAzul.addEventListener('dragover',(e) => {
  e.preventDefault();
  console.log("Drag Over");
});

cajaAzul.addEventListener('drop',(e) => {
  // // e.target.textContent = e.dataTransfer.getData("text/plain");
  // // e.preventDefault();
  // // console.log("Drop");
  console.log(itemArrastrado); //Vemos que se ha transferido el "itemarrastrado"
  let span = document.createElement("span"); //Creamos el DIV sin incluirlo en el código HTML
  span.innerHTML = itemArrastrado.textContent; //Indicamos que el contenido de Div en HTML será el contenido de Caja Verde
  
  // e.target.appendChild(span); //Para llevar el contenido a la caja azul //Incluimos el div en el código HTML
  
  carro.appendChild(span); //Creamos un elemento hijo en carro que llevará el contenido de la vble span
  itemArrastrado.innerHTML =""; //Vaciamos el contenido de la variable "itemArrastrado" colocada en la caja verde
  e.target.textContent = text; //Volcamos el contenido en el carro
});

cajaAzul.addEventListener('dragleave',(e) => { //Para indicar algo en la salida de la zona Drop
  console.log("Drag Leave");
});

