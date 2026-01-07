const contenedor = document.querySelector(".flex-container");

function crearLlave(nombre,modelo,precio){
    img= `<img class="llave-img" src="./assets/llave.webp">`;
    nombre= `<h2>${nombre}</h2>`;
    modelo= `<h3>${modelo}</h3>`;
    precio= `<p>Precio: ${precio}</p>`;
    return [img,nombre,modelo,precio];
}

let documentFragment = document.createDocumentFragment();

for (let i = 0; i <= 20; i++) {
    let modeloRandom = Math.round(Math.random()*10000);
    let precioRandom = Math.round(Math.random()*10+30);
}