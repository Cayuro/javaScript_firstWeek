/* (let) por ejemplo las variables actualmente se utiliza let porque limita 
el alcance de la variable al bloque en que la utilizamos, 
solo dentro de ese bloque va aser valido

constante nunca cambia valor, por ejemplo pi. const
undefined, es un tipo de dato que ha sido declarado pero no inicializado
normalmente se declara y se inicializa en la misma linea. 
es una buena practica utilizar el punto y coma

Scope es el alcance que tiene la variable - let y var tienen diferente scope
 
¿cómo crear multiples variables? puedo declarar varias variables con 
" let nu1, nu2, nu3, nu4, etc"
ya ahí por ejemplo tenemos varias variables declaradas
otra forma de varias variables no muy utilizada por orden es
"let nu1=10 , nu2=20, nu3=30, nu4=40, etc" 
Hoisting es que un programa se puede ver afectado en la creación 
y la ejecución cuando se hace por ejemplo

hacer pruebas con prompt - */

/* recipiente = "barbijo"
recipiente = "jabon"

alert(recipiente *5 + " comprado" + " y guardado" + " en la alacena.");
*/

prompt("Ingrese su nombre: "); // como un input y cómo lo guardo?
let nombreUsuario = prompt("Ingrese su nombre: ");
alert(`Bienvenido ${nombreUsuario} a nuestra tienda virtual`); //concatenación o interpolación o 

document.writeln(nombreUsuario + ", gracias por visitar nuestra tienda virtual.");

/* operadores aritméticos: + - * / % **
prioridad de operadores: 1° () 2° ** 3° * / % 4° + - +
operadores de asignación: = += -= *= /= %= **= 
operadores de asignacion: desplazamientos <<= >>= >>>= 
and xor or: &= ^= |=
operadores de incremento y decremento: ++ -- (también son de asignación)
operadores de comparación: == === != !== > < >= <=
operadores lógicos: && || !
operadores especiales: ? : , . [] ()
tipos de datos: number, string, boolean, null, undefined, object, symbol
conversiones de tipos de datos: parseInt(), parseFloat(), toString(), String(), Number(), Boolean()
funciones matemáticas: Math.round(), Math.ceil(), Math.floor(), Math.random(), Math.max(), Math.min()
funciones de cadena: .length, .toUpperCase(), .toLowerCase(), .indexOf(), .substring(), .slice(), .replace(), .trim()
estructuras de control: if, else if, else, switch, for, while, do while, break, continue
estructuras de datos: arrays, objetos
manipulación del DOM: document.getElementById(), document.querySelector(), document.createElement(), element.appendChild(), element.removeChild()
manejo de eventos: addEventListener(), onclick, onmouseover, onmouseout, onsubmit
manejo de errores: try, catch, finally, throw
programación orientada a objetos: clases, herencia, encapsulamiento, polimorfismo
*/
// Ejemplo de uso de operadores aritméticos
let a = 10;
let b = 3;
let loco = "" + a + b ; // concatenación así funciona a forzar string, debe ir primero el string
alert("El valor de loco es: " + loco);
let suma = a + b;
let resta = a - b;
let multiplicacion = a * b;
let division = a / b;
let modulo = a % b;
let potencia = a ** b;
console.log("Suma: " + suma);
console.log("Resta: " + resta);
console.log("Multiplicación: " + multiplicacion);
console.log("División: " + division);
console.log("Módulo: " + modulo);
console.log("Potencia: " + potencia);

// Ejemplo de uso de estructuras de control
if (a > b) {
    console.log(a + " es mayor que " + b);
} else if (a < b) {
    console.log(a + " es menor que " + b);
} else {
    console.log(a + " es igual que " + b);
}

// 1. Selección
let boton = document.getElementById("boton-cambiar");
let titulo = document.getElementById("saludo");

// 2. Evento
boton.addEventListener("click", function() {
    // 3. Acción
    titulo.textContent = "¡Bienvenido al Gym! 🏋️‍♂️";
}); 

