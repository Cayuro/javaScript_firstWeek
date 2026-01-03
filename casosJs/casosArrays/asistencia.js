let cantidad = prompt("ingrese la cantidad de alumnos");
let alumnos = [];

for (i = 0; i < cantidad; i++) {
    alumnos[i]= [prompt("ingrese el nombre del alumno " + (i + 1)),0];
}
const tomarAsistencia = (nombre, posicion)=> {
    let asistencia = prompt("ingrese A para ausente y P para presente de: " + nombre);
    if (asistencia.toLocaleLowerCase() === "p") {
        alumnos[posicion][1]++;
    }
}

for (i = 0; i < 20; i++) {
    for (alumno in alumnos) {
        tomarAsistencia(alumnos[alumno][0], alumno);
    }
}
for (alumno in alumnos) {
    let resultado = `${alumnos[alumno][0]}: 
    ->${alumnos[alumno][1]} asistencias. <br>
    Porcentaje de asistencia: 
    ${(alumnos[alumno][1] / 20) * 100}%`;

    if ((alumnos[alumno][1] / 20) * 100 >= 90) {
        resultado += " <br> <br>";
    } else {
        resultado += ' <b> <style: "color: red"> REPROBADO POR INASISTENCIA </b>\n';
    }}
document.write(resultado);
