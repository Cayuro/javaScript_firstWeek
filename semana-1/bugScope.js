// === Scope ===
function kitchen() {
  let knife = "🔪";
  console.log("Dentro de la cocina:", knife);
}
// console.log(knife); // ❌ Error

// === Hoisting ===
console.log(student); // undefined
var student = "Juanees";

sayHello(); // ✅ funciona
function sayHello() {
  console.log("Hola!");
}

// === Closures ===
function backpack() {
  let secret = "🔑 clave";
  return function() {
    console.log("Acceso con:", secret);
  };
}
const myClosure = backpack();
myClosure();

// === Bugs comunes ===
// 1. Variables globales accidentales
function test() {
  x = 10; // ❌ sin let/const/var → se vuelve global
}
test();
console.log(x); // existe globalmente, bug potencial


// 2. var vs let en loops
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// ❌ imprime 3, 3, 3 (var no respeta bloque)

// 3. Closures en loops
function makeCounters() {
  let counters = [];
  for (var i = 0; i < 3; i++) {
    counters.push(() => console.log(i));
  }
  return counters;
}
const c = makeCounters();
c[0](); // ❌ imprime 3
c[1]();
