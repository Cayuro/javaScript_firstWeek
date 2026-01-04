const obtenerInformacion = (materia) => {
    materias = {
        fisica: ["Profesor perez", "pedro", "pepito", "carlos"],
        programacion: ["Profesor Dalto", "ana", "julian", "pepito","cofla"],
        logica: ["Profesor Rodriguez", "pedro", "julian", "carlos","cofla"],
        quimica: ["Profesor Gómez", "ana", "julian", "pepito","cofla"],   
    }
    if (materias[materia] !== undefined) {
        return [materias[materia], materia,materias];
    } else {
        return materias;
    }
}
const mostrarInfo = (materia) => { // aquí todo lo que teníamos lo metemos en una función flecha
    let informacion = obtenerInformacion(materia);

    if (informacion !== false) {
        let profesor = informacion[0][0];
        let alumnos = informacion[0];
        alumnos.shift();
        document.write(`<br> en la Materia <b>${informacion[1]}</b> impartida por ${profesor} se inscribieron: <b style="color:green">${alumnos}</b>`);
}
}

mostrarInfo("fisica");
mostrarInfo("programacion");
mostrarInfo("logica");
mostrarInfo("quimica");

const cantidadClases = (alumno) =>{
    let informacion = obtenerInformacion();
    let clasesPresente = [];
    let cantidadTotal = 0;
    for (info in informacion){
        if (informacion[info].includes(alumno)) {
            cantidadTotal++;
            clasesPresente.push(" "+info);       
        }
    }
    return `<br><b style="color:blue">${alumno}</b> está en <b>${cantidadTotal} clases </b><br>
    Está cursando las siguientes clases:<b>${clasesPresente}</b><br>`
}

document.write(cantidadClases("cofla"));
document.write(cantidadClases("pedro"));
document.write(cantidadClases("ana"));