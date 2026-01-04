let materias = {
        fisica: [90,8,5,"fisica"],
        programacion: [98,10,8,"programacion"],
        logica: [100,10,5,"logica"],
        matematicas: [91,8,6,"matematicas"],  
        quimica: [70,6,3,"quimica"],  
        calculo: [90,8,5,"calculo"],  
        algebra: [92,4,2,"algebra"],  
        basesDatos: [99,8,5,"basesDatos"],  
        matDiscretas: [90,6,13,"matDiscretas"],  
        ecuaciones: [82,7,7,"ecuaciones"],   
    }

const aprobo = ()=>{
    for (materia in materias){
        let asistencias = materias[materia][0];
        let calificacion = materias[materia][1];
        let trabajos = materias[materia][2];
        let asignatura = materias[materia][3]
        console.log(asignatura.toUpperCase());
        if (asistencias >= 90) {
            console.log("%c     Estás bien de asistencias", "color:green;background:white; padding: 5px 100px")
    } else  {
        console.log("%c     Estás mal de asistencias", "color:red;background:white; padding: 5px 100px")
    }
     if (calificacion >= 7) {
            console.log("%c     Aprobaste la materia", "color:green;background:white; padding: 5px 100px")
    } else  {
        console.log("%c     Reprobaste la materia", "color:red;background:white; padding: 5px 100px")
    }
     if (trabajos >= 5) {
            console.log("%c     Aprobaste los trabajos", "color:green;background:white; padding: 5px 100px")
    } else  {
        console.log("%c     te faltaron trabajos", "color:red;background:white; padding: 5px 100px")
    }
}
}
aprobo()