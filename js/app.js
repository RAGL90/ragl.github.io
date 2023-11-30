document.body.addEventListener("click", ()=> {
   // alert("This is the body");
})
document.querySelector("section").addEventListener("click", ()=> {
   //alert("This is the section");
});
document.querySelector("div").addEventListener("click", ()=> {
    //alert("This is the div");
});
////Aqui vemos que se propagan los eventos, al hacer un clic en el centro se activa div, luego section y body en un único clic.

//ELIMINAR PREDETERMINADOS - Vamos a Evitar que por ejemplo si pulso F5 recargue la página.
document.addEventListener("keydown",(event)=>{
    event.preventDefault();
    console.log(event.key);
    console.log(event.code);
    if (event.key == "Enter") {
        alert("Hello World");
    }
})
