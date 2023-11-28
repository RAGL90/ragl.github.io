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
//let number = box2.dataset.boxNumber; //Caja 2
//let number = box1.dataset.boxNumber; //Caja 1

// Ahora le metemos a la caja uno el dato "month" con valor 10
//console.log(box1.dataset.month);

//document.body.firstElementChild.innerHTML="<h1>Wow!!</h1>"; // Convierte todo Body en este código HTML
//console.log(document.querySelector("section").innerHTML); // Con inner reemplazamos solo el contenido de la etiqueta
//console.log(document.querySelector("section").outerHTML); // Con outer reemplazamos el contenido INCLUIDA la etiqueta
//document.querySelector("section").outerHTML="<h1>Wow!!</h1>"; // Reemplaza el elemento completamente

//Modificamos el contenido HTML desde JS : más bien INYECTAMOS contenido HTML
//------------------
//document.body.insertAdjacentHTML("afterbegin","<nav>Navigation</nav>");
//document.querySelector("nav").insertAdjacentHTML("beforebegin","<h1>Main Header</h1>");
//document.querySelector("nav").insertAdjacentHTML("beforeend","<a href=https://www.google.es/> Link to Google</a>");
//document.querySelector("nav").insertAdjacentHTML("afterend","<p>This is a paragraph</p>");

// ---------INSERTAR / BORRAR / REEMPLAZAR nodos en el árbol---------------

let header = document.createElement("h1"); //Esto crea una etiqueta H1
header.append("Hello World!");
document.body.append(header); //Incluir al final del elemento
header.prepend("¡"); //Antes del elemento

document.querySelector("h1").firstChild.before("¡¡"); //Before y after - Funcionan tanto para elementos como nodos de texto.

let paragraph = document.createElement("p");
paragraph.textContent = "Writting a paragraph";
//createElement - es para crear un único elemento
//append - es para añadir el elemento creado
//before o after - para colocarlo en el lugar deseado.

document.body.append(paragraph); //Esto es una forma de hacerlo
document.querySelector("h1").replaceWith(paragraph); //Esto es otra forma de hacerlo
//paragraph.remove(); //Elimina la variable body
//document.body.remove(); //Has roto el body

//Esto es para que sepamos que podemos hacerlo aunque no es recomendable.
paragraph.style.textAlign="center";
paragraph.style.color ="white";
paragraph.style.textTransform = "capitalize";
paragraph.style.backgroundColor = "#000";
paragraph.style.padding = "2em";

//paragraph.setAttribute("class","light"); //Creamos la clase light del elemento, no coge sus propiedades porque hemos especificado algunas en el elemento
paragraph.setAttribute("class","main"); //Creamos el nombre (izq) y el valor del atribute (dcha)

console.log(paragraph.getAttribute("class")); //Nombre del atributo entrecomillado
paragraph.classList.add("light"); //Añade una clase nueva, SIN SOBREESCRIBIR, setatribute => sobreescribe.

console.log(paragraph.style.cssText);