/* tres chicos entran a una heladería a comprar, pero los precios no están al lado de cada estante con su respectivo helado,
ellos quieren comprar el helado más caro que puedan con el dinero que tienen. 
cada uno tiene distintas cantidades de dinero se les pide ingresar el monto de dinero que tienen y mostrar el más caro, 
si hay 2 o más mostrar ambos, indicar cuanto es la devuelta. */

let precioHelados = {
    "palito de helado de agua": 600,
    "palito de helado de crema": 1000,
    "bombon helado marca heladix": 1600,
    "bombon helado marca heladovich": 1700,
    "bombon helado marca helardic": 1800,
    "potecito de helado con confites": 2900,
    "pote de 1/4kg de helado": 2900
};

function pidiendoDinero(precioHelados, nombreUsuario) {
    let dinero = parseFloat(prompt(`${nombreUsuario}, Ingresa es la cantidad de dinero que tienes: `));
    let productos = Object.entries(precioHelados);
    let productoCaro = 0;
    let heladosPosibles = [];
    for (let index = 0; index < productos.length; index++) {
        let producto = productos[index][1];
        let nombreProducto = productos[index][0];
        if (producto <= dinero && producto > productoCaro) {
            heladosPosibles = [nombreProducto];
            productoCaro = producto;
        } else if (producto === productoCaro) {
            heladosPosibles.push(nombreProducto);
        }
    }
    let devuelta = dinero - productoCaro;
    document.write(`<h3>${nombreUsuario}</h3><p>puedes comprar ${heladosPosibles} y la devuelta es $${devuelta}</p>`);
}
let dinero1 = pidiendoDinero(precioHelados, "Juanes");
let dinero2 = pidiendoDinero(precioHelados, "Camilo");
let dinero3 = pidiendoDinero(precioHelados, "Cofla");