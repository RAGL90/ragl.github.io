// let time1 = 0.0;
// let time2 = 0.0;

// document.body.addEventListener("click", (event) => {
//   //console.log(event);
//   if (time1 == 0.0) {
//     time1 = event.timeStamp;
//     console.log(`Time 1 = ${time1}`);
//   }
//   console.log(event.currentTarget);
//   document.body.style.backgroundColor = "black";
// });

// setTimeout(() => {
//   document.body.addEventListener("click", (event) => {
//     time2 = event.timeStamp;
//     console.log(event.currentTarget);
//     console.log(`Time 2 = ${time2}`);
//     console.log(`Diference: ${time2 - time1}`);
//   });
// }, 2000);

////Handler es el manejador de eventos.
////Cuando un evento ocurre, el navegador crea un
////objeto con toda la información (es el navegador el que lo crea)
////y lo pasa al HANDLER. Es decir: el objeto "event" es creado por
////el navegador al ejecutarse, y lo manejamos con el handler.

////En el objeto event, hay una propiedad llamada timeStamp que es el tiempo que transcurre
////Restando el timeStamp de un evento con el de otro, puedes ver cuanto tiempo ha transcurrido.

////La propiedad "isTrusted:true" si el evento ha sido ha sido disparado por el navegador
////si indicase ":false" implicaría que habría sido activado por JS.

//// CANCELACION de Eventos: Algunos eventos producen acciones realizadas por el navegador una URL o enviar un formulario.
console.log(document.forms);
document.forms[0].onsubmit = (event) => {
    event.preventDefault(); //Impedimos que ocurra su comportamiento natural, en este caso dispara pero no recarga la página
    console.log("Heloo World");
}