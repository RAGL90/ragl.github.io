// ATRIBUTOS
let box1 = document.querySelector("div"); //Cogerá el primer div
let box2 = box1.nextElementSibling;
let box3 = box2.nextElementSibling;

box1.classList.add("dark"); //Añadimos la clase dark y se activa la clase CSS
box1.classList.remove("dark"); //Eliminamos la clase dark, se desactiva la clase CSS
box2.classList.add("dark"); //Añadimos la clase dark y se activa la clase CSS

//console.log(box3.classList.contains ("dark")); //Comprobamos si es de la clase dark

box3.classList.toggle("dark");
box3.classList.toggle("dark"); //Alterna la clase, si la tiene, la quita y si no la tiene, la pone.
box3.classList.toggle("dark");

//ATRIBUTO dataSet 
/* Atributo definido por el usuario, personalizado para los elementos empezando por data-
Permite añadir info adicional sin afectar a la validez del documento

Añadimos este atributo en las lineas 18 a 20 de HTML y se accede mediante JS, se usa mucho en Calendarios*/ 
let number = box3.dataset.boxNumber; //Caja 3
// let number = box2.dataset.boxNumber; //Caja 2
// let number = box1.dataset.boxNumber; //Caja 1

// Ahora le metemos a la caja uno el dato "month" con valor 10
console.log(box1.dataset.month);

//document.body.firstElementChild.innerHTML="<h1>Wow!!</h1>"; // Convierte todo Body en este código HTML
//console.log(document.querySelector("section").innerHTML); // Con inner reemplazamos solo el contenido de la etiqueta
//console.log(document.querySelector("section").outerHTML); // Con outer reemplazamos el contenido INCLUIDA la etiqueta
//document.querySelector("section").outerHTML="<h1>Wow!!</h1>"; // Reemplaza el elemento completamente

//Modificamos el contenido HTML desde JS : más bien INYECTAMOS contenido HTML

document.body.insertAdjacentHTML("afterbegin","<nav>Navigation</nav>");
document.querySelector("nav").insertAdjacentHTML("beforebegin","<h1>Main Header</h1>");
document.querySelector("nav").insertAdjacentHTML("beforeend","<a href=https://www.google.es/> Link to Google</a>");