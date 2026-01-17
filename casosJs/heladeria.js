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

/* ahora vamos a hacer lo mismo pero de otra forma, con función anonima y arrow function */
/* let pidiendoDinero = (precioHelados, nombreUsuario) => {
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
} */

/* const definirCompra = (n) => {
    let din= prompt(`Ingrese el dinero que tiene ${n}: `);
    if (din >= 0 && din < 600) {
        return(`<p>${n}, no te alcanza para ningun helado</p>`);
    } else if (din >= 600 && din < 1000) {
        return(`<p>${n}, puedes comprar el helado de agua</p>`);
    } else if (din >= 1000 && din < 1600) {
        return(`<p>${n}, puedes comprar el helado de crema</p>`);
    } else if (din >= 1600 && din < 1700) {
        return(`<p>${n}, puedes comprar el bombon helado marca heladix</p>`);
    } else if (din >= 1700 && din < 1800) {
        return(`<p>${n}, puedes comprar el bombon helado marca heladovich</p>`);
    } else if (din >= 1800 && din < 2900) {
        return(`<p>${n}, puedes comprar el bombon helado marca helardic</p>`);
    } else if (din >= 2900) {
        return(`<p>${n}, puedes comprar el pote de 1/4kg de helado</p>`);
    }
}

document.write(definirCompra("Juanes"));
document.write(definirCompra("Camilo"));
document.write(definirCompra("Cofla")); */

let temperatures;

function getMeanTemp() {
     let sum = 0;
     for (let i = 0; i < temperatures.length; i++) {
      sum += temperatures[i];
     }
     let meanTemp = sum / temperatures.length; 
console.log(`mean: ${meanTemp}`); 
}
temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
getMeanTemp();
temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
getMeanTemp();

function factorial(n){
    let result = 1;
    while (n > 1) {
       result*=n;
       n--;
    }
    return result;
} // haciendo un ciclo for también se hace recursivo este factorial
function factorial2(n){
    if (n ==1){
        return 1
    }
    return n* factorial(n-1)
} // haciendo una recursion

function factorial3(n){
    return n>1 ? n*factorial(n-1) : 1;
} // haciendo una recursión y con operador terneario

function fibonacci(n){
    return n<2 ? n : fibonacci(n-1) + fibonacci(n-2)
}
console.log(factorial(6));
console.log(factorial2(6));
console.log(factorial3(6));
console.log(fibonacci(6))


// OPTIMIZA EL FIBONACCI PORQUE CREA UN ESPACIO EN MEMORIA GUARDADO
const memoryFibo ={};

function fibonacciMemo(n){
    if (n in memoryFibo) { return memoryFibo[n]   
    }
    if (n<2) return n;
    memoryFibo[n]= fibonacciMemo(n-1)+ fibonacciMemo(n-2)
    return memoryFibo[n]
}
const memoryFacto={};
function factorialMemo(n){
    if (n in memoryFacto) {return memoryFacto[n]};
    return n>1 ? memoryFacto[n]= n*factorialMemo(n-1) : 1;
}
console.log(fibonacciMemo(70))
console.log(memoryFibo)
console.log(factorialMemo(60))
console.log(memoryFacto)

function invertirPalabra(texto){
    let pila = [];
    let palabraInvertida = "";
    for (let palabra in texto) {
        pila.push(texto[palabra]);
    }
    while (pila.length > 0) { //funciona el condicional >0 porque pila se reduce
        palabraInvertida += pila.pop() 
    } // ojo .pop() es mutable
    return palabraInvertida
}
console.log(invertirPalabra('Calvito'));

