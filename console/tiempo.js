/* ORGANIZANDO LAS TAREAS QUE TIENE QUE DISTRIBUIR Y SE TIENEN QUE VER EN CONSOLA, CUANTO TIEMPO GASTAR EN CADA COSA Y COMO ORDENARLO*/
let trabajo = "240 minutos de trabajo"
let tareasPracti = "100 minutos de tareas practicas"
let descanso = "10 minutos de descanso"
let estudio = "100 minutos de estudiar"
let homeMade = "30 minutos de tareas del hogar"

console.log("TAREAS");

for (let index = 0; index < 14; index++) {
    if (index == 0){
        console.group("SEMANA 1");
    }
    console.groupCollapsed("DIA " + (index+1));
    console.log(trabajo);
    console.log(tareasPracti);
    console.log(descanso);
    console.log(estudio);
    console.log(homeMade);
    console.groupEnd();
    if (index == 6) {
        console.groupEnd();
        console.groupCollapsed("SEMANA 2");
    }
}
console.groupEnd();
console.groupEnd();