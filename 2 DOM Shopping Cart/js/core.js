/* Obtenemos año del sistema para incluirlo en el footer*/
const GenerateContent = class {
  //Propiedades "properties" : Valores asociados a un objeto
  fruits = {
    1: ["01", "grapes", "uvas", 4.95],
    2: ["02", "kiwis", "kiwis", 3.85],
    3: ["03", "grapefruits", "pomelos", 2.25],
    4: ["04", "cherries", "cerezas", 3.39],
    5: ["05", "blackberries", "moras", 7.87],
    6: ["06", "lemons", "limones", 1.25],
    7: ["07", "bananas", "plátanos", 1.95],
    8: ["08", "apples", "manzanas", 1.59],
    9: ["09", "oranges", "naranjas", 1.99],
    10: ["10", "apricots", "albaricoques", 1.5],
    11: ["11", "avocados", "aguacates", 2.25],
    12: ["12", "pears", "peras", 2.99],
    13: ["13", "blueberries", "arándanos", 26.5],
    14: ["14", "limes", "limas", 7.38],
    15: ["15", "plumbs", "ciruelas", 2.39],
    16: ["16", "strawberries", "fresas", 1.75],
    17: ["17", "raspberries", "frambuesas", 13.41],
    18: ["18", "peaches", "melocotones", 1.27],
    19: ["19", "coconuts", "cocos", 6.1],
    20: ["20", "pineapples", "piñas", 1.19],
    21: ["21", "watermelons", "sandías", 0.49],
  };

  //Métodos "methods": Funciones asociados al bojeto
  getYear = () => {
    let year = new Date();
    document.querySelector(".date").innerHTML += year.getFullYear();
  };

  //Una vez hecho el html de un producto lo guardamos en una vble en template literal
  getProductFormat = () => {
    let product = `
    <div
          class="draggable card mb-4 shadow-sm"
          draggable="true"
          product-id="xxx"
        >
          <img
            src="img/fr-nnn.jpg"
            class="card-img-top"
            alt="fruitName"
            draggable="false"
          />
          <div class="card-body">
            <h1 class="card-title pricing-card-tittle">
              yyy € <small class="text-muted">/ Kg</small>
            </h1>
            <div class="d-grid gap-2">
              <button type="button" class="btn btn-lg btn-block btn-warning">
                Add to Cart
              </button>
            </div>
          </div>
          <div class="card-footer bg-info text-white">
            <h4 class="my-0 font-weight-normal">zzz</h4>
          </div>
        </div>
    `;
    return product;
  };

  htmlToElement = (html) => {
    // Lo hacemos de una forma desglosada y limpia => Principios Solid

    // Creamos una Vble con el elemento plantilla
    let card = document.createElement("template");
    // Limpiamos los espacios vacios y saltos de linea de la vble heredada "html"
    html = html.trim();
    // Ahora incluimos el html en la vble Card
    card.innerHTML = html;
    // Devolvemos el contenido del primer elemento hijo
    return card.content.firstElementChild;
  };

  setPageContent = (fruits) => {
    let card = ""; //No da error con la vble anterior porque están encapsulados
    let productContainer = document.querySelector("#product-list");
    /*Creamos una estructura For In
    Recorrer el objeto fruits con cada interacción*/
    for (let productNumber in fruits) {
       card = this.getProductFormat() //Incluimos la plantilla en la variable
       card = card.replace(/xxx/,fruits[productNumber][0]) //Reemplazamos ID: "xxx" de la plantilla por ID Producto
       card = card.replace(/nnn/,fruits[productNumber][0]) //Reemplazamos nombre imagen: "nnn" de la plantilla por ID Producto
       card = card.replace(/fruitName/,fruits[productNumber][1]) //Reemplazamos alt imagen: "fruitName" por nombre del Producto
       card = card.replace(/zzz/,fruits[productNumber][1].trim()) //Reemplazamos Titulo Producto: "zzz" por Nombre del Producto
       card = card.replace(/yyy/,fruits[productNumber][3]) //Reemplazamos Precio de Producto: "YYY" por Precio del Producto

       productContainer.appendChild(this.htmlToElement(card));
    }
  };

};

//Llamamos al metodo constructor
let content = new GenerateContent();
content.getYear();

content.setPageContent(content.fruits);