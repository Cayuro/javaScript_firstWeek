# 🎯 Los Conceptos MÁS DIFÍCILES de tu Código - Explicados desde CERO

## 📚 Índice de Conceptos Complejos

1. [Asincronía: async/await](#1-asincronía-asyncawait)
2. [Promesas y fetch()](#2-promesas-y-fetch)
3. [El Event Loop (Por qué JavaScript espera)](#3-el-event-loop)
4. [Closures y Scope](#4-closures-y-scope)
5. [Template Literals y Interpolación](#5-template-literals)
6. [Destructuring](#6-destructuring)
7. [Array Methods: map, filter, forEach](#7-array-methods)
8. [Arrow Functions](#8-arrow-functions)
9. [El DOM y querySelector](#9-el-dom)
10. [Event Listeners y Callbacks](#10-event-listeners)
11. [Hash Routing](#11-hash-routing)
12. [JSON.stringify vs JSON.parse](#12-json)
13. [localStorage](#13-localstorage)

---

## 1. Asincronía: async/await

### ❓ El Problema que Resuelve

Imagina que le pides a tu mamá que te prepare un sándwich. Tienes dos opciones:

**Opción A (Bloqueante - MALO):**
```
Tú: "Mamá, hazme un sándwich"
[Te quedas parado esperando... 5 minutos... no haces nada más]
Mamá: "Aquí está"
Tú: [Ahora sí puedes comer]
```

**Opción B (No bloqueante - BUENO):**
```
Tú: "Mamá, hazme un sándwich"
[Mientras tanto, sigues viendo TV, jugando, haciendo tarea]
Mamá: "¡Ya está listo!"
Tú: [Vas por el sándwich]
```

JavaScript usa la Opción B. **async/await** es la forma de decir "haz esto, pero mientras tanto yo sigo haciendo otras cosas".

---

### 🔍 Análisis del Código Real

```javascript
export async function proyectoCard(proyecto){
    const datos = await getClima(proyecto.lon, proyecto.lat)
    // ... resto del código
}
```

#### Desglose palabra por palabra:

**1. `async` antes de la función**
```javascript
async function proyectoCard(proyecto)
```

Esto significa: **"Esta función va a hacer algo que tarda tiempo"**

- Sin `async`: La función es normal, todo pasa instantáneamente
- Con `async`: La función puede "pausarse" para esperar cosas

**Regla de oro:** Si usas `await` dentro de una función, DEBES ponerle `async` adelante.

---

**2. `await` antes de getClima()**
```javascript
const datos = await getClima(proyecto.lon, proyecto.lat)
```

Esto significa: **"Espera a que getClima() termine antes de continuar"**

Sin `await`:
```javascript
const datos = getClima(proyecto.lon, proyecto.lat)
console.log(datos)  // ❌ Imprime: Promise {<pending>}
```

Con `await`:
```javascript
const datos = await getClima(proyecto.lon, proyecto.lat)
console.log(datos)  // ✅ Imprime: {temp: 23.5, wind: 12.3, precipitation: 0.2}
```

---

### 🎬 Flujo Completo Explicado

```javascript
console.log("1. Inicio")

export async function proyectoCard(proyecto){
    console.log("2. Entrando a proyectoCard")
    
    const datos = await getClima(proyecto.lon, proyecto.lat)
    // ⏸️ PAUSA AQUÍ - Espera la respuesta del servidor
    
    console.log("3. Ya tengo los datos:", datos)
    
    const card = document.createElement("div");
    // ... crear la tarjeta
    
    return card
}

console.log("4. Fin")
```

**Orden de ejecución:**
```
1. Inicio
2. Entrando a proyectoCard
[JavaScript hace la petición HTTP]
[JavaScript NO se queda esperando, sigue con otras cosas]
4. Fin
[... pasa 1 segundo ...]
[Llega la respuesta del servidor]
3. Ya tengo los datos: {temp: 23.5, ...}
```

**¡Importante!** El código NO se ejecuta en orden lineal cuando usas `async/await`.

---

### 💡 Ejemplo del Mundo Real

```javascript
// Imagina que vas a un restaurante:

async function irAlRestaurante() {
    console.log("1. Entro al restaurante")
    console.log("2. Pido una hamburguesa")
    
    const comida = await cocinar("hamburguesa")
    // ⏸️ Mientras tanto, puedes ver tu celular, hablar con amigos
    
    console.log("3. Me trajeron la comida:", comida)
    console.log("4. Como la hamburguesa")
}

console.log("0. Salgo de casa")
irAlRestaurante()
console.log("5. Mientras tanto, llegan más clientes")
```

**Salida:**
```
0. Salgo de casa
1. Entro al restaurante
2. Pido una hamburguesa
5. Mientras tanto, llegan más clientes
[... 10 minutos después ...]
3. Me trajeron la comida: 🍔
4. Como la hamburguesa
```

---

## 2. Promesas y fetch()

### ❓ ¿Qué es una Promesa?

Es literalmente como una promesa en la vida real:

```javascript
// Tu amigo te dice:
"Te PROMETO que mañana te presto mi bicicleta"

// Pueden pasar 3 cosas:
1. ✅ Cumple la promesa (te presta la bici)
2. ❌ No cumple la promesa (se le olvidó)
3. ⏳ Todavía no sabes (es de noche, aún no llega mañana)
```

En JavaScript:
```javascript
const promesa = fetch("https://api.example.com/data")

// Estados posibles:
// ⏳ pending: La petición está en proceso
// ✅ fulfilled: La petición fue exitosa
// ❌ rejected: La petición falló
```

---

### 🔍 Análisis de fetch() Línea por Línea

```javascript
export async function getClima(lon, lat){
    const response = await fetch(`
        https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,precipitation,wind_speed_10m
    `)
    const responseJSON = await response.json();
    const datos = responseJSON.current;
    
    return {
        temp : datos.temperature_2m,
        precipitation: datos.precipitation,
        wind: datos.wind_speed_10m
    }
}
```

#### Paso a Paso:

**PASO 1: La Petición HTTP**
```javascript
const response = await fetch(URL)
```

Esto es como hacer una llamada telefónica:
```
Tú: "Hola API del clima, dame el clima de Medellín"
[Esperas en la línea]
API: "Ok, aquí está la información"
```

**¿Qué devuelve fetch()?**
```javascript
{
    ok: true,                    // ¿La petición fue exitosa?
    status: 200,                 // Código de estado (200 = OK)
    headers: {...},              // Información adicional
    body: ReadableStream {...}   // Los datos (aún no legibles)
}
```

**⚠️ IMPORTANTE:** Los datos vienen en un formato RAW (crudo), no puedes usarlos todavía.

---

**PASO 2: Convertir a JSON**
```javascript
const responseJSON = await response.json();
```

Esto convierte los datos crudos en un objeto JavaScript:

```javascript
// Antes (.json()):
"{"current":{"temperature_2m":23.5}}"  // ← Texto plano

// Después:
{
    current: {
        temperature_2m: 23.5
    }
}  // ← Objeto JavaScript
```

**¿Por qué otro `await`?**
Porque convertir datos también puede tardar (si son muchos datos).

---

**PASO 3: Extraer Solo lo que Necesitas**
```javascript
const datos = responseJSON.current;
```

La API te da MUCHOS datos:
```javascript
{
    latitude: 6.2442,
    longitude: -75.5812,
    timezone: "America/Bogota",
    current: {  // ← Solo queremos esto
        temperature_2m: 23.5,
        precipitation: 0.2,
        wind_speed_10m: 12.3
    },
    hourly: {...},
    daily: {...}
}
```

Entonces sacas solo `current`:
```javascript
const datos = responseJSON.current
// Ahora datos = {temperature_2m: 23.5, precipitation: 0.2, ...}
```

---

**PASO 4: Devolver un Objeto Limpio**
```javascript
return {
    temp : datos.temperature_2m,
    precipitation: datos.precipitation,
    wind: datos.wind_speed_10m
}
```

¿Por qué hacer esto? Para tener nombres más cortos y claros:

```javascript
// En vez de:
datos.temperature_2m  // ¿Qué significa "_2m"?

// Mejor:
datos.temp  // ¡Más claro!
```

---

### 🎯 Ejemplo Completo con Explicación Visual

```javascript
async function obtenerClima() {
    console.log("📞 Llamando a la API...")
    
    const response = await fetch(URL)
    console.log("📦 Respuesta recibida (cruda)")
    
    const data = await response.json()
    console.log("✅ Datos convertidos:", data)
    
    return data
}
```

**Flujo Visual:**
```
Tu código --[fetch]--> Internet ---> Servidor API
   ⬇️                                    ⬇️
Espera...                          Procesa petición
   ⬇️                                    ⬇️
   ⬇️                              Busca en base de datos
   ⬇️                                    ⬇️
   ⬇️  <----[response]---- Envía respuesta
   ⬇️
.json()
   ⬇️
Objeto JavaScript listo para usar
```

---

## 3. El Event Loop (El Corazón de JavaScript)

### ❓ ¿Por Qué JavaScript Puede Hacer Varias Cosas a la Vez?

JavaScript es **single-threaded** (un solo hilo). Imagina que tienes un solo empleado en una tienda:

**Problema:**
```
Cliente 1: "Quiero comprar esto" [tarda 5 minutos]
Cliente 2: [esperando...]
Cliente 3: [esperando...]
Cliente 4: [esperando...]
```

**Solución de JavaScript:**
```
Cliente 1: "Quiero comprar esto"
Empleado: "Ok, procesando tu pago... [da un ticket] Espera allá"
Cliente 2: "Quiero comprar esto"
Empleado: "Ok, procesando... [da ticket] Espera allá"
Cliente 3: ...
[Cuando termina el pago de Cliente 1]
Empleado: "¡Cliente 1, tu pedido está listo!"
```

---

### 🔄 El Event Loop Explicado

```javascript
console.log("1")

setTimeout(() => {
    console.log("2")
}, 0)  // ← ¡Incluso con 0 segundos!

console.log("3")
```

**Resultado:**
```
1
3
2  ← ¿Por qué al final si tiene 0 segundos?
```

**Explicación:**

JavaScript tiene **dos colas**:

**Cola Síncrona (Main Stack):**
```
1. console.log("1")      ✅ Ejecuta inmediatamente
2. setTimeout(...)       ⏸️ "Lo ejecutaré después"
3. console.log("3")      ✅ Ejecuta inmediatamente
```

**Cola Asíncrona (Task Queue):**
```
[Espera a que la cola síncrona esté vacía]
1. console.log("2")      ✅ Ahora sí ejecuta
```

---

### 🎬 Ejemplo con tu Código

```javascript
console.log("A")

async function proyectoCard(proyecto){
    console.log("B")
    const datos = await getClima(proyecto.lon, proyecto.lat)  // ⏸️
    console.log("C")
}

proyectoCard(miProyecto)
console.log("D")
```

**Orden de ejecución:**
```
A
B
D  ← ¡Se ejecuta ANTES que C!
[... espera respuesta del servidor ...]
C
```

**¿Por qué?**

1. `console.log("A")` → Se ejecuta
2. Llama a `proyectoCard()`
3. `console.log("B")` → Se ejecuta
4. `await getClima()` → Se PAUSA y va a la cola asíncrona
5. `console.log("D")` → Se ejecuta (mientras espera la respuesta)
6. [Llega respuesta]
7. `console.log("C")` → Ahora sí se ejecuta

---

## 4. Closures y Scope

### ❓ ¿Qué es el Scope?

El **scope** es como las habitaciones de una casa. Cada habitación tiene sus propias cosas, y no puedes ver lo que hay en otras habitaciones desde donde estás.

```javascript
// CASA (Scope Global)
let dueno = "Juan"

// HABITACIÓN 1 (Scope de función)
function habitacion1() {
    let juguete = "Pelota"
    console.log(dueno)    // ✅ Puedo ver al dueño (está afuera)
    console.log(juguete)  // ✅ Puedo ver mi juguete
}

// HABITACIÓN 2
function habitacion2() {
    console.log(dueno)    // ✅ Puedo ver al dueño
    console.log(juguete)  // ❌ ERROR - No puedo ver el juguete de habitación1
}
```

---

### 🔍 Closures en tu Código

```javascript
export function homeView(){
    const main = document.createElement("main");
    
    const projectsGrid = main.querySelector(".projects-grid");
    const iptFiltroEstado = main.querySelector(".select-input")
    const iptFiltroPalabra = main.querySelector(".search-input")
    
    async function renderProyectos() {
        // ✨ ¡Aquí está el closure!
        // Puede acceder a projectsGrid, iptFiltroEstado, iptFiltroPalabra
        // aunque fueron declaradas en homeView()
        
        const filtro = iptFiltroEstado.value
        const palabra = iptFiltroPalabra.value
        // ...
    }
    
    const btnFiltro = main.querySelector(".filter-button")
    btnFiltro.addEventListener("click", renderProyectos)
    
    return main
}
```

**¿Por qué funciona?**

`renderProyectos()` **recuerda** las variables de `homeView()` aunque `homeView()` ya terminó de ejecutarse.

Es como si `renderProyectos()` fuera un niño que creció en la casa `homeView()` y aunque se mudó, todavía recuerda dónde estaban las cosas.

---

### 💡 Ejemplo Más Simple

```javascript
function crearContador() {
    let contador = 0  // Esta variable vive aquí
    
    return function() {
        contador++  // ← Puede acceder a 'contador'
        console.log(contador)
    }
}

const miContador = crearContador()
miContador()  // 1
miContador()  // 2
miContador()  // 3

// ¿Por qué no se resetea a 0?
// Porque la función RECUERDA el valor de 'contador'
```

**Caso de Uso Real:**

```javascript
// Contador de clicks
function crearBoton() {
    let clicks = 0
    
    const boton = document.createElement("button")
    
    boton.addEventListener("click", function() {
        clicks++  // ← Closure: recuerda 'clicks'
        boton.textContent = `Clicks: ${clicks}`
    })
    
    return boton
}
```

---

## 5. Template Literals (Las comillas raras ` `)

### ❓ ¿Por Qué Usar `` en vez de "" o ''?

```javascript
// Forma ANTIGUA (concat):
const nombre = "Juan"
const edad = 25
const mensaje = "Hola, soy " + nombre + " y tengo " + edad + " años"

// Forma MODERNA (template literal):
const mensaje = `Hola, soy ${nombre} y tengo ${edad} años`
```

---

### 🔍 Tu Código Real

```javascript
card.innerHTML = `
    <article class="project-card">
        <h3>${proyecto.ciudad}</h3>
        <span>${datos.temp}°C</span>
        <a href="#/home/${proyecto.id}">Ver detalle</a>
    </article>
`
```

**¿Qué pasa aquí?**

1. **Las comillas `` permiten varias líneas:**
```javascript
// ❌ NO funciona con comillas normales:
const html = "
    <div>
        <p>Hola</p>
    </div>
"

// ✅ SÍ funciona con template literals:
const html = `
    <div>
        <p>Hola</p>
    </div>
`
```

2. **`${}` inserta variables:**
```javascript
const ciudad = "Bogotá"
const html = `<h3>${ciudad}</h3>`
// Resultado: "<h3>Bogotá</h3>"
```

3. **Puedes poner expresiones completas:**
```javascript
const temperatura = 20

const html = `
    <p>La temperatura es: ${temperatura}°C</p>
    <p>En Fahrenheit: ${temperatura * 9/5 + 32}°F</p>
    <p>¿Hace frío? ${temperatura < 15 ? "Sí" : "No"}</p>
`
```

---

### 💡 Casos de Uso

**1. URLs dinámicas:**
```javascript
const lat = 6.2442
const lon = -75.5812

const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}`
// Mucho más limpio que:
// const url = "https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + lon
```

**2. HTML dinámico:**
```javascript
const usuarios = ["Juan", "María", "Pedro"]

const html = `
    <ul>
        ${usuarios.map(usuario => `<li>${usuario}</li>`).join('')}
    </ul>
`
```

**3. Condicionales:**
```javascript
const usuario = { nombre: "Juan", premium: true }

const html = `
    <div>
        <h2>${usuario.nombre}</h2>
        ${usuario.premium ? '<span class="badge">Premium</span>' : ''}
    </div>
`
```

---

## 6. Destructuring (Extraer Valores)

### ❓ ¿Qué Problema Resuelve?

Imagina que tienes una caja con varios objetos y solo quieres algunos:

```javascript
// Forma ANTIGUA:
const caja = { lapiz: "azul", borrador: "blanco", regla: "30cm" }

const lapiz = caja.lapiz
const borrador = caja.borrador
// Tienes que repetir mucho

// Forma MODERNA (destructuring):
const { lapiz, borrador } = caja
// Sacas todo de una vez
```

---

### 🔍 En tu Código

```javascript
export function cargarLocalstorage(){
    const user = JSON.parse(localStorage.getItem("user"));
    const sesion_iniciada = JSON.parse(localStorage.getItem("sesion_iniciada")); 
    
    return {user, sesion_iniciada}
}

// Cuando lo usas:
const {user, sesion_iniciada} = cargarLocalstorage()

// En vez de:
const resultado = cargarLocalstorage()
const user = resultado.user
const sesion_iniciada = resultado.sesion_iniciada
```

---

### 📦 Tipos de Destructuring

**1. Objetos:**
```javascript
const persona = {
    nombre: "Juan",
    edad: 25,
    ciudad: "Bogotá",
    profesion: "Programador"
}

// Extraer solo lo que necesitas:
const { nombre, edad } = persona

console.log(nombre)  // "Juan"
console.log(edad)    // 25
```

**2. Arrays:**
```javascript
const colores = ["rojo", "verde", "azul"]

const [primero, segundo] = colores

console.log(primero)   // "rojo"
console.log(segundo)   // "verde"
```

**3. Valores por defecto:**
```javascript
const persona = { nombre: "Juan" }

const { nombre, edad = 18 } = persona

console.log(nombre)  // "Juan"
console.log(edad)    // 18 (valor por defecto)
```

**4. Renombrar variables:**
```javascript
const persona = { nombre: "Juan" }

const { nombre: nombreCompleto } = persona

console.log(nombreCompleto)  // "Juan"
```

---

### 💡 Caso Práctico en tu Código

```javascript
// Sin destructuring:
export async function iniciarStore() {
    const resultado = cargarLocalstorage()
    store.user = resultado.user
    store.sesion_iniciada = resultado.sesion_iniciada
}

// Con destructuring (más limpio):
export async function iniciarStore() {
    const {user, sesion_iniciada} = cargarLocalstorage()
    store.user = user
    store.sesion_iniciada = sesion_iniciada
}
```

---

## 7. Array Methods (map, filter, forEach)

### ❓ ¿Para Qué Sirven?

Son como **herramientas mágicas** para trabajar con listas. En vez de hacer bucles manualmente, usas estas funciones.

---

### 🔄 forEach (Hacer algo con cada elemento)

```javascript
const numeros = [1, 2, 3, 4, 5]

// Forma ANTIGUA:
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i])
}

// Forma MODERNA:
numeros.forEach(numero => {
    console.log(numero)
})
```

**En tu código:**
```javascript
for (const pro of store.proyectos){
    const card = await proyectoCard(pro);
    div.appendChild(card)
}

// Equivalente moderno:
store.proyectos.forEach(async (pro) => {
    const card = await proyectoCard(pro);
    div.appendChild(card)
})
```

---

### 🗺️ map (Transformar cada elemento)

`map()` **transforma** un array en otro array.

```javascript
const numeros = [1, 2, 3, 4, 5]

const dobles = numeros.map(numero => numero * 2)

console.log(dobles)  // [2, 4, 6, 8, 10]
```

**Visualización:**
```
[1, 2, 3, 4, 5]
 ↓  ↓  ↓  ↓  ↓  (multiplicar por 2)
[2, 4, 6, 8, 10]
```

**Ejemplo con tu código:**
```javascript
// Obtener solo los nombres de ciudades:
const ciudades = store.proyectos.map(proyecto => proyecto.ciudad)
// ["Medellín", "Bogotá", "Cali"]

// Crear elementos HTML:
const cards = store.proyectos.map(proyecto => proyectoCard(proyecto))
```

---

### 🔍 filter (Filtrar elementos)

`filter()` **elimina** elementos que no cumplan una condición.

```javascript
const numeros = [1, 2, 3, 4, 5]

const pares = numeros.filter(numero => numero % 2 === 0)

console.log(pares)  // [2, 4]
```

**Visualización:**
```
[1, 2, 3, 4, 5]
 ✗  ✓  ✗  ✓  ✗  (¿Es par?)
    [2,    4]
```

**En tu código:**
```javascript
// Obtener solo proyectos activos:
const activos = store.proyectos.filter(pro => pro.estado === "activo")

// Buscar por palabra:
const resultados = store.proyectos.filter(pro => 
    pro.ciudad.toLowerCase().includes("mede")
)
```

---

### 🎯 Comparación Visual

```javascript
const numeros = [1, 2, 3, 4, 5]

// forEach: HAZ ALGO con cada uno (no devuelve nada)
numeros.forEach(n => console.log(n))
// Imprime: 1, 2, 3, 4, 5

// map: TRANSFORMA cada uno (devuelve nuevo array)
const dobles = numeros.map(n => n * 2)
// dobles = [2, 4, 6, 8, 10]

// filter: FILTRA según condición (devuelve nuevo array)
const pares = numeros.filter(n => n % 2 === 0)
// pares = [2, 4]
```

---

### 💡 Encadenar Métodos

Puedes combinarlos:

```javascript
const numeros = [1, 2, 3, 4, 5]

const resultado = numeros
    .filter(n => n > 2)        // [3, 4, 5]
    .map(n => n * 2)           // [6, 8, 10]
    .forEach(n => console.log(n))  // Imprime: 6, 8, 10
```

**En tu código:**
```javascript
// Obtener ciudades de proyectos activos:
const ciudadesActivas = store.proyectos
    .filter(pro => pro.estado === "activo")
    .map(pro => pro.ciudad)
```

---

## 8. Arrow Functions (=>) - Las Funciones Flecha

### ❓ ¿Por Qué Existen?

Son una forma **más corta** de escribir funciones.

```javascript
// Función TRADICIONAL:
function sumar(a, b) {
    return a + b
}

// Arrow Function:
const sumar = (a, b) => a + b
```

---

### 📝 Sintaxis Completa

**1. Con un solo parámetro:**
```javascript
// Puedes omitir los paréntesis:
const doble = numero => numero * 2

// Es lo mismo que:
const doble = (numero) => numero * 2

// Y lo mismo que:
function doble(numero) {
    return numero * 2
}
```

**2. Con varios parámetros:**
```javascript
const sumar = (a, b) => a + b

// Si es una línea, el return es implícito
```

**3. Con varias líneas:**
```javascript
const calcular = (a, b) => {
    const suma = a + b
    const promedio = suma / 2
    return promedio
}

// Necesitas llaves {} y return explícito
```

**4. Sin parámetros:**
```javascript
const saludar = () => console.log("Hola")

// Los paréntesis son obligatorios
```

---

### 🔍 En tu Código

```javascript
// Antes:
btnFiltro.addEventListener("click", async function(){
    renderProyectos(projectsGrid, iptFiltroEstado.value, iptFiltroPalabra.value);
})

// Después (con arrow function):
btnFiltro.addEventListener("click", async () => {
    renderProyectos(projectsGrid, iptFiltroEstado.value, iptFiltroPalabra.value);
})
```

---

### ⚠️ Diferencia Importante: `this`

Las arrow functions NO tienen su propio `this`:

```javascript
const persona = {
    nombre: "Juan",
    
    // Función tradicional:
    saludar: function() {
        console.log(this.nombre)  // ✅ "Juan"
    },
    
    // Arrow function:
    despedir: () => {
        console.log(this.nombre)  // ❌ undefined
    }
}
```

**Regla general:**
- Usa **arrow functions** para callbacks y funciones cortas
- Usa **funciones tradicionales** para métodos de objetos

---

## 9. El DOM (Document Object Model)

### ❓ ¿Qué es el DOM?

El DOM es el **árbol de tu página HTML** que JavaScript puede manipular.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Mi Página</title>
    </head>
    <body>
        <div id="app">
            <h1>Hola</h1>
            <p>Mundo</p>
        </div>
    </body>
</html>
```

**JavaScript ve esto como un árbol:**
```
document
  └─ html
      ├─ head
      │   └─ title
      └─ body
          └─ div#app
              ├─ h1
              └─ p
```

---

### 🔍 querySelector y querySelectorAll

```javascript
// Buscar UN elemento:
const app = document.querySelector("#app")
// Busca el primer elemento con id="app"

const boton = document.querySelector(".btn-primary")
// Busca el primer elemento con class="btn-primary"

// Buscar TODOS los elementos:
const botones = document.querySelectorAll(".btn")
// Devuelve un array con TODOS los elementos con class="btn"
```

**En tu código:**
```javascript
const projectsGrid = main.querySelector(".projects-grid");
const iptFiltroEstado = main.querySelector(".select-input")
const iptFiltroPalabra = main.querySelector(".search-input")
```

Es como buscar elementos específicos en tu página usando **selectores CSS**.

---

### 🎨 Crear y Manipular Elementos

**1. Crear:**
```javascript
const div = document.createElement("div")
```

**2. Agregar contenido:**
```javascript
div.innerHTML = "<h1>Hola</h1>"
div.textContent = "Hola"
```

**3. Agregar al DOM:**
```javascript
document.body.appendChild(div)
```

**4. Modificar clases:**
```javascript
div.classList.add("activo")     // Agrega clase
div.classList.remove("activo")  // Quita clase
div.classList.toggle("activo")  // Alterna (on/off)
```

---

## 10. Event Listeners (Escuchar Eventos)

### ❓ ¿Qué es un Evento?

Un evento es algo que pasa en tu página: clicks, escritura, movimiento del mouse, etc.

```javascript
boton.addEventListener("click", () => {
    console.log("¡Me hicieron clic!")
})
```

---

### 🔍 En tu Código

```javascript
form.addEventListener("submit", async (e) => {
    e.preventDefault();  // ← MUY IMPORTANTE
    
    // Tu código...
})
```

**¿Qué es `e.preventDefault()`?**

Previene el comportamiento por defecto del evento.

**Ejemplo con formulario:**
```javascript
// Sin preventDefault():
form.addEventListener("submit", (e) => {
    console.log("Formulario enviado")
})
// La página se RECARGA (comportamiento por defecto)

// Con preventDefault():
form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log("Formulario enviado")
})
// La página NO se recarga
```

---

### 📋 Tipos de Eventos Comunes

```javascript
// Click:
boton.addEventListener("click", () => {})

// Escribir:
input.addEventListener("input", (e) => {
    console.log(e.target.value)  // Lo que escribió
})

// Cambio en select:
select.addEventListener("change", (e) => {
    console.log(e.target.value)  // Opción seleccionada
})

// Enviar formulario:
form.addEventListener("submit", (e) => {
    e.preventDefault()
})

// Tecla presionada:
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        // Usuario presionó Enter
    }
})
```

---

## 11. Hash Routing (Navegación con #)

### ❓ ¿Qué es el Hash en la URL?

```
http://localhost:3000/#/home
                       ↑
                    El hash
```

El hash es todo lo que viene después del `#`. Es como un marcador dentro de tu página.

---

### 🔍 En tu Código

```javascript
export async function router(){
    const hash = location.hash;  // Lee el hash actual
    
    if (hash.startsWith("#/home/")) {
        // Usuario está en #/home/123
    }
    
    switch (hash) {
        case "#/login":
            // Muestra login
            break;
        case "#/home":
            // Muestra home
            break;
    }
}

window.addEventListener("hashchange", router)
```

**¿Cómo funciona?**

1. Usuario hace clic en `<a href="#/home">Inicio</a>`
2. La URL cambia a `http://localhost:3000/#/home`
3. El evento `hashchange` se dispara
4. El `router()` se ejecuta
5. Lee el hash y muestra la página correcta

---

### 💡 Extraer Parámetros del Hash

```javascript
// URL: #/home/123

const hash = location.hash  // "#/home/123"

const partes = hash.split("/")
// ["#", "home", "123"]

const id = partes[2]  // "123"
```

---

## 12. JSON.stringify vs JSON.parse

### ❓ ¿Por Qué Necesitas Esto?

JavaScript tiene objetos, pero **localStorage y APIs solo entienden texto**.

```javascript
// Objeto JavaScript:
const persona = { nombre: "Juan", edad: 25 }

// No puedes guardar esto directamente:
localStorage.setItem("persona", persona)
// ❌ Se guarda como: "[object Object]"

// Necesitas convertirlo a texto:
localStorage.setItem("persona", JSON.stringify(persona))
// ✅ Se guarda como: '{"nombre":"Juan","edad":25}'
```

---

### 🔄 Flujo Completo

```javascript
// 1. Tienes un objeto:
const usuario = { nombre: "María", edad: 30 }

// 2. Lo conviertes a texto (stringify):
const texto = JSON.stringify(usuario)
console.log(texto)  // '{"nombre":"María","edad":30}'

// 3. Lo guardas:
localStorage.setItem("usuario", texto)

// ... Cierras el navegador ...
// ... Vuelves a abrir ...

// 4. Lo recuperas:
const textoGuardado = localStorage.getItem("usuario")
console.log(textoGuardado)  // '{"nombre":"María","edad":30}' (es texto)

// 5. Lo conviertes de vuelta a objeto (parse):
const usuarioRecuperado = JSON.parse(textoGuardado)
console.log(usuarioRecuperado.nombre)  // "María" ✅
```

---

### 🔍 En tu Código

```javascript
// GUARDAR:
export function guardarLocalstorage(){
    localStorage.setItem("user", JSON.stringify(store.user));
    //                           ↑ Objeto → Texto
}

// CARGAR:
export function cargarLocalstorage(){
    const user = JSON.parse(localStorage.getItem("user"));
    //           ↑ Texto → Objeto
}
```

---

## 13. localStorage (Almacenamiento del Navegador)

### ❓ ¿Qué es localStorage?

Es como una **caja de almacenamiento** que el navegador guarda en tu computadora. La información persiste aunque cierres la página.

```javascript
// Guardar:
localStorage.setItem("nombre", "Juan")

// Leer:
const nombre = localStorage.getItem("nombre")

// Borrar:
localStorage.removeItem("nombre")

// Borrar todo:
localStorage.clear()
```

---

### ⚠️ Limitaciones

1. **Solo guarda texto (strings)**
```javascript
// ❌ NO funciona:
localStorage.setItem("numero", 42)

// ✅ Funciona:
localStorage.setItem("numero", "42")
```

2. **Límite de espacio: ~5-10MB** por dominio

3. **No es seguro** para información sensible (contraseñas, tokens)

---

### 🔍 En tu Código

```javascript
// Al iniciar sesión:
export function iniciarSesion(){
    store.user = "antonio";
    store.sesion_iniciada = true;
    
    localStorage.setItem("user", JSON.stringify("antonio"))
    localStorage.setItem("sesion_iniciada", JSON.stringify(true))
}

// Al cargar la página:
export function cargarLocalstorage(){
    const user = JSON.parse(localStorage.getItem("user"))
    const sesion_iniciada = JSON.parse(localStorage.getItem("sesion_iniciada"))
    
    return {user, sesion_iniciada}
}
```

**Resultado:**
Aunque cierres el navegador, la próxima vez que abras la página seguirás con sesión iniciada.

---

## 🎓 Resumen de Conceptos Clave

| Concepto | Para Qué Sirve | Cuándo Usarlo |
|----------|---------------|---------------|
| **async/await** | Esperar operaciones que tardan | Peticiones HTTP, timers |
| **Promesas** | Manejar operaciones asíncronas | fetch(), setTimeout() |
| **Closures** | Recordar variables del contexto padre | Event listeners, callbacks |
| **Template Literals** | Strings con variables y múltiples líneas | HTML dinámico, URLs |
| **Destructuring** | Extraer valores de objetos/arrays | Simplificar código |
| **map/filter** | Transformar/filtrar arrays | Procesar listas de datos |
| **Arrow Functions** | Funciones más cortas | Callbacks, array methods |
| **DOM** | Manipular HTML con JavaScript | Crear/modificar elementos |
| **Event Listeners** | Responder a acciones del usuario | Clicks, input, submit |
| **Hash Routing** | Navegación sin recargar página | SPAs (Single Page Apps) |
| **JSON** | Convertir objetos ↔ texto | localStorage, APIs |
| **localStorage** | Guardar datos en el navegador | Sesiones, preferencias |

---

## 💭 Preguntas Frecuentes

### 1. "¿Por qué tanto `await`?"
Porque las operaciones de red (fetch) tardan tiempo. Sin `await`, intentarías usar datos que aún no llegaron.

### 2. "¿Cuándo usar `const` vs `let`?"
- `const`: Cuando el valor NO va a cambiar
- `let`: Cuando el valor SÍ va a cambiar
- Nunca uses `var` (es obsoleto)

### 3. "¿Por qué `e.preventDefault()` en formularios?"
Porque los formularios recargan la página por defecto. Tú quieres manejar el envío con JavaScript.

### 4. "¿Cuál es la diferencia entre `.innerHTML` y `.textContent`?"
- `innerHTML`: Interpreta HTML
- `textContent`: Solo texto plano (más seguro)

### 5. "¿Por qué usar arrow functions?"
Son más cortas y no crean su propio `this`, lo que evita errores.

---

## 🚀 Próximos Pasos

Para dominar estos conceptos:

1. **Práctica con async/await**: Crea funciones que llamen APIs
2. **Juega con array methods**: Transforma arrays de diferentes formas
3. **Crea componentes**: Practica manipular el DOM
4. **Implementa routing**: Crea una mini SPA

¿Necesitas que profundice en algún concepto específico?