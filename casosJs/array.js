let pc = {
    nombre: "PC Gamer",
    procesador: "Intel Core i7",
    ram: "16GB",
    almacenamiento: "1TB SSD",
    tarjetaGrafica: "NVIDIA GeForce RTX 3060",
    espacio: "1TB"
};

let celulares = [
    { marca: "Apple", modelo: "iPhone 13", almacenamiento: "128GB", camara: "12MP" },
    { marca: "Samsung", modelo: "Galaxy S21", almacenamiento: "256GB", camara: "64MP" },
    { marca: "Google", modelo: "Pixel 6", almacenamiento: "128GB", camara: "50MP" }
];

document.write("<h2>Detalles del PC:</h2>");
for (let key in pc) {
    document.write(`<p><span>${key}:</span> ${pc[key]}</p>`);
} // recorre todo el arreglo y va imprimiendo la llave y el valor que guarda la llave.
document.write("<h2>Lista de Celulares:</h2>");
for (let i = 0; i < celulares.length; i++) {
    let celular = celulares[i];
    document.write(`<h3>Celular ${i + 1}:</h3>`);
    for (let key in celular) {
        document.write(`<p><span>${key}:</span> ${celular[key]}</p>`);
    }
} // recorre el arreglo de objetos y por cada objeto recorre sus llaves y valores.
/* Métodos útiles para arrays:
.push() - agrega uno o más elementos al final del array
.pop() - elimina el último elemento del array
.shift() - elimina el primer elemento del array
.unshift() - agrega uno o más elementos al inicio del array
.slice() - devuelve una copia de una parte del array
.splice() - cambia el contenido del array eliminando o reemplazando elementos existentes y/o agregando nuevos elementos
.indexOf() - devuelve el primer índice en el que se encuentra un elemento dado
.includes() - determina si un array incluye un determinado elemento
.sort() - ordena los elementos del array
.reverse() - invierte el orden de los elementos del array
.concat() - une dos o más arrays
.join() - une todos los elementos del array en una cadena de texto
.forEach() - ejecuta una función proporcionada una vez por cada elemento del array
.map() - crea un nuevo array con los resultados de la llamada a una función proporcionada aplicada a cada elemento del array
.filter() - crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada
.reduce() - aplica una función a un acumulador y a cada valor del array (de izquierda a derecha) para reducirlo a un único valor
.find() - devuelve el valor del primer elemento que cumple la función de prueba proporcionada
.findIndex() - devuelve el índice del primer elemento que cumple la función de prueba proporcionada
*/
