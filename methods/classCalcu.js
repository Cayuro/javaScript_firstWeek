class Calculadora{
    constructor(num1, num2){
        this.num1 = num1;
        this.num2 = num2;
    }
    sumar(){
        return parseInt(this.num1) + parseInt(this.num2);
    }
    restar(){
        return parseInt(this.num1) - parseInt(this.num2);
    }
    multiplicar (){
        return parseInt(this.num1) * parseInt(this.num2);
    }
    dividir (){
        return parseInt(this.num1) / parseInt(this.num2);
    }
    exponente(){
        // let numero1 = parseInt(this.num1);
        // for (let index = 1; index < this.num2; index++) {
        //     numero1 = numero1 * parseInt(this.num1);
            
        // }
        return  this.num1 ** this.num2; // Math.pow(parseInt(this.num1), parseInt(this.num2));
    }
    raizCuadrada(){
        return  this.num1**1/2;// Math.sqrt(parseInt(this.num1));
    }
    raizCubica(){
        return  this.num1**1/3;// Math.cbrt(parseInt(this.num1));
    }
}
let num1 = prompt("Ingrese el primer número para operar: ");
let num2 = prompt("Ingrese el segundo número para operar: ");

const calculadora = new Calculadora(num1, num2);

// pedimos el operador
let operador = prompt("Ingrese un operador (1: sumar, 2: restar, 3: multiplicar, 4: dividir, 5: exponente, 6: raiz cuadrada, 7: raiz cubica)");
let resultado;

if (operador == "1") {
    resultado = calculadora.sumar();
}
if (operador == "2") {
    resultado = calculadora.restar();
}
if (operador == "3") {
    resultado = calculadora.multiplicar();
}
if (operador == "4") {
    resultado = calculadora.dividir();
}
if (operador == "5") {
    resultado = calculadora.exponente();
}
if (operador == "6") {
    resultado = calculadora.raizCuadrada();
}
if (operador == "7"){
    resultado = calculadora.raizCubica();
}
document.write(`<h2 style="color: red; font-size: 30px">El resultado es: ${resultado}</h2>`);

// switch (operador) {
//     case "+":
//         resultado = calculadora.sumar();
//         break;
//     case "-":
//         resultado = calculadora.restar();
//         break;
//     case "*":
//         resultado = calculadora.multiplicar();
//         break;
//     case "/":
//         resultado = calculadora.dividir();
//         break;
//     case "^":
//         resultado = calculadora.exponente();
//         break;
//     default:
//         resultado = "Operador no válido";
// }
