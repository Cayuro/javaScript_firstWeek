let operador = prompt("Ingrese un operador (+: sumar, -: restar, *: multiplicar, /: dividir)");

const calcular = (num1, num2, operador) => {
    switch (operador) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return "Operador no válido";
    }
};

let num1 = parseInt(prompt("Ingrese el primer número: "));
let num2 = parseInt(prompt("Ingrese el segundo número: "));
let resultado = calcular(num1, num2, operador);
alert(`El resultado de ${num1} ${operador} ${num2} es: ${resultado}`);

// const sumar = (num1, num2)=>{
//     return num1 + num2
// }
// const restar = (num1, num2)=>{
//     return num1 - num2
// }
// const multiplicar = (num1,num2) =>{
//     return num1 * num2
// }
// const dividir = (num1, num2)=>{
//     return num1 / num2
// }
// let num1 = parseInt(prompt("ingrese el primer numero"));
// let num2 = parseInt(prompt("ingrese el segundo numero"));
// let finalResult;
// switch (operador) {
//         case "+":
//             finalResult = sumar(num1, num2);
//             break
//         case "-":
//             finalResult = restar(num1, num2);
//             break
//         case "*":
//             finalResult = multiplicar(num1, num2);
//             break
//         case "/":
//             finalResult = dividir(num1, num2);
//             break
//         default:
//             finalResult = "Operador no válido";
//     }
// alert(`El resultado de ${num1} ${operador} ${num2} es: ${finalResult}`);