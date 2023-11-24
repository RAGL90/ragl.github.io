//Seleccionamos uno de los elementos de la web, todo empieza en document
let nav = document.querySelector("nav"); //Seleccionamos el PRIMER elemento nav, si hay dos o más nav al no indicar clase se seleccionará también
console.log(nav);

let active = document.querySelector(".active"); //Para seleccionar solo active (lo usamos como CSS)
console.log(active);

//Seleccionar multiples elementos con la misma etiqueta, y varios elementos en una misma seleccion

let headerAndParagraph = document.querySelectorAll("p,h1"); //Selecciona todos los paragraph y h1 en un ARRAY
console.log(headerAndParagraph[0].innerText);//Sin nada muestra el array con los elementos, [0] Seleccionamos solo H1. Y con innerText (solo el contenido.