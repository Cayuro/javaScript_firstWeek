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

function add(a, b) {
     return a + b;
}
function multiply(a, b) {
     return a * b;
}
function subtract(a,b){
    return a - b;
}
function division(a,b){
    return a / b;
}
function operation(func, a, b) {
     return func(Number(a),Number(b));
}

function calculate(){
    
    let operator = prompt('Select (1-4): 1-add 2-substract 3-division 4-multiply');
    let n1 = prompt('insert the first number: ');
    let actions = {
        '1': add,
        '2': subtract,
        '3': division,
        '4': multiply,
    };
    
    let selectFuntion = actions[operator];

    if (selectFuntion) {
        let n2 = prompt('insert the second number')
    
        let result = operation(selectFuntion,n1,n2)
        alert(`The result is: ${result}`)
    } else {
        alert(`Invalid selection`)
    }    
}
calculate()

// ANONIMITY - FUNCTION WITHOUT NAME
function opera(func, first, second) {
     return func(first, second);
}
let myAdd = function(a, b) {
     return a + b;
}
console.log(opera(myAdd, 10, 20)); // -> 30
console.log(opera(function(a, b) {
     return a * b;
}, 10, 20)); // -> 200


// ------- SYNCHRONOUS CALLBACKS ------------
let inner = function() {
     console.log('inner 1');
}
let outer = function(callback) {
     console.log('outer 1');
     callback();
     console.log('outer 2');
}
console.log('test 1');
outer(inner);
console.log('test 2');

// --------- ASYNCHRONOUS CALLBACKS ------------
let outerCall = function(callback) { //ANOTHER OUTER
console.log('outer 1');
setTimeout(callback, 1000) /*ms*/;
console.log('outer 2');
}
console.log('test 1');
outerCall(inner); // THE SAME INNER - ASYNCHRONOUS FOR OUTER2
console.log('test 2');


// ----- CALLBACK WITH setInterval && setTimeout ----------
let outerCallSet = function(callback) {
console.log('outer 1');
let timerId = setInterval(callback, 1000) /*ms*/;
console.log('outer 2');
setTimeout(function(){
     clearInterval(timerId);
}, 5500);
}
console.log('test 1');
outerCallSet(inner);
console.log('test 2');

// ARROW FUNCTION SIMPLIFICATIONS -- FACTORIAL
let factorialArrow = n => n > 1 ? n * factorial(n - 1) : 1;
// in arrow function is not needed the parentheses when only one
//    parameter is taken 
console.log(factorialArrow(5))

let x = 10;
function test(x){
    console.log(x);
}
test(20)

