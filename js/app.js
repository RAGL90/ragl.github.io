//Seleccionamos uno de los elementos de la web, todo empieza en document
let nav = document.querySelector("nav"); //Selecciona un solo elemento, el PRIMER elemento nav, si hay dos o más nav al no indicar clase se seleccionará también
// console.log(nav);

let active = document.querySelector(".active"); //Para seleccionar solo active (lo usamos como CSS)
//console.log(active);

//Seleccionar multiples elementos con la misma etiqueta, y varios elementos en una misma seleccion

let headerAndParagraph = document.querySelectorAll("p,h1"); //Selecciona todos los paragraph y h1 en un ARRAY
//console.log(headerAndParagraph[0].innerText);//Sin nada muestra el array con los elementos, [0] Seleccionamos SOLO el primero es decir, el H1 en nuestro HTML. Y con innerText (solo el contenido.

//console.log(nav.children[0].children[0].children[0]); //Accediendo al elemento hijo mediante .children[nºhijo]

// console.log(nav.firstElementChild.firstElementChild.firstElementChild.textContent); //Es diferente "textContent" de "inner.text"

// Mismo resultado pero de DISTINTA forma, la forma de firstElementChild es más correcta para moverse hacia atrás.
//console.log(nav.firstElementChild.firstElementChild.nextElementSibling.innerText); //Es diferente "textContent" de "inner.text", pero al ignorar todo no sabe retroceder llegado a este punto.
//console.log(nav.firstElementChild.firstElementChild.nextElementSibling.firstElementChild); //Inner ignora toda las etiquetas, este comando está más ubicado aún, más exacto.

//console.log(headerAndParagraph[2]);
//console.log(headerAndParagraph[0].nextElementSibling.nextElementSibling.nextElementSibling); //La otra forma

let main = document.querySelector("#first");
//console.log(main);
//console.log(nav.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.firstChild);

//console.log(nav.firstElementChild.childElementCount); //Contar el numero de elementos
//console.log(nav.firstElementChild.children.length); //Otra forma de contar el número de elementos

//console.log(nav.firstElementChild.childNodes); //Otra forma de contar el número de elementos
//console.log(nav.firstElementChild.firstChild.nodeValue); //Vemos el salto de Línea
//console.log(nav.firstElementChild.nodeName.toLowerCase()); // Nombre del Nodo en mayúsculas (con toLowerCase lo minuscularizamos)
console.log(nav.firstElementChild.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling);
