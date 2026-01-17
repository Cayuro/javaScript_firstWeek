// === Scope Bugs Collection ===

// 1. Variable global accidental
function accidentalGlobal() {
  x = 10; // Error: variable global accidental
}
accidentalGlobal();
console.log(x);

// 2. var vs let en loops
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // Error: imprime siempre el mismo valor
}

// 3. Closures en loops
function makeCounters() {
  let counters = [];
  for (var i = 0; i < 3; i++) {
    counters.push(() => console.log(i)); //  Error: todos los closures capturan el mismo valor
  }
  return counters;
}
const c = makeCounters();
c[0]();
c[1]();
c[2]();

// 4. Shadowing (ocultamiento de variables)
let user = "Juanes";
function testShadowing() {
  let user = "Camilo"; //  Error: variable local oculta la externa
  console.log(user);
}
testShadowing();

// 5. Uso incorrecto de `this`
const obj = {
  name: "Juanes",
  greet: function() {
      setTimeout(function() {
      console.log("Hola " +  this.name); //  Error: this no apunta al objeto
    }, 100);
  }
};
obj.greet();

// 6. Hoisting confuso con let/const
console.log(y); //  Error: ReferenceError por temporal dead zone
let y = 5;

// 7. Acceso fuera de bloque
if (true) {
  let temp = 42;
}
console.log(temp); //  Error: variable fuera de su scope

// 8. Callbacks que capturan valores inesperados
for (var j = 0; j < 3; j++) {
  document.body.addEventListener("click", () => console.log(j)); //  Error: imprime siempre el mismo valor
}

// 9. Scope en módulos vs global
// file1.js
let secret = "clave";
// file2.js
console.log(secret); //  Error: variable no existe en este módulo

// 10. Variables no inicializadas
let count;
console.log(count + 1); //  Error: NaN por variable sin inicializar

