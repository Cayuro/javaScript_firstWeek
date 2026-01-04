const materias = {
        fisica: ["Profesor perez", "pedro", "pepito", "carlos"],
        programacion: ["Profesor Dalto", "ana", "julian", "pepito","cofla"],
        logica: ["Profesor Rodriguez", "pedro", "julian", "carlos","cofla"],
        quimica: ["Profesor Gómez", "ana", "julian", "pepito","cofla"],   
    }

const inscribir = (alumno,materia)=>{
    let alumnos = materias[materia];
    alumnos.shift();
    if (alumnos.length >= 4){
        document.write(`lo siento ${alumno}, la materia ${materia} está llena`);
    // } else if !(alumno in ){

    }
}

inscribir("flaco","fisica");
inscribir("flaco","programacion");