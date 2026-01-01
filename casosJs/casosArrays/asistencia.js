let cantidad = prompt("ingrese la cantidad de alumnos");
let alumnos = [];

for (let i = 0; i < cantidad; i++) {
    alumnos[i]= [prompt("ingrese el nombre del alumno " + (i + 1)),0];
}
const tomarAsistencia = ()=> {
    let asistencia = prompt("ingrese A para ausente y P para presente de: " + alumnos[i][0]);
    if (asistencia in "pP") {
        alumnos[i][1]++;
    }
}

for (let i = 0; i < 20; i++) {
    for (alumno in alumnos) {
        tomarAsistencia();
    }
}
for (alumno in alumnos) {
    let resultado = `${alumnos[alumno][0]}: 
    ${alumnos[alumno][1]} asistencias. 
    Porcentaje de asistencia: 
    ${(alumnos[alumno][1] / 20) * 100}%`;

    if ((alumnos[alumno][1] / 20) * 100 >= 90) {
        resultado += " <br> <br>";
    } else {
        resultado += " REPROBADO POR INASISTENCIA \n";
    }}
