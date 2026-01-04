class App {
    constructor(descargas,puntuacion,peso){
        this.descargas =  descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }
    abrir(){
        if(this.iniciada== false && this.instalada == true){
            this.iniciada = true;
            alert("Iniciando aplicación")
        }
    }
    cerrar(){
        if(this.iniciada == true && this.instalada == true){
            this.iniciada = false;
            alert("cerrando la app")
        }
    }
    instalar(){
        if(this.instalada == false){
            this.instalada = true;
            alert("la aplicación ha sido instalada correctamente")
        }
    }
    desinstalar(){
        if(this.instalada == true){
            this.instalada = false;
            alert("Aplicación desinstalada correctamente")
        }
    }
    appInfo(){
        return `<br>
        <h3>Aplicación información: </h3>
        Descargas: <b style="color: blue;"> ${this.descargas}</b> <br>
        Puntuación: <b style="color: blue;"> ${this.puntuacion}</b> <br>
        Peso: <b style="color: blue;"> ${this.peso}</b> <br>
        `;
    }
}

const app = new App("20", "4.5", "900mb");
const app2 = new App("12.000", "4.2", "800mb");
const app3 = new App("18.000", "4.7", "1gb");
const app4 = new App("20.000", "4.8", "250mb");
const app5 = new App("900", "5", "750mb");
const app6 = new App("22.000", "4.9", "1.8gb");
const app7 = new App("42.981", "2.9", "2.0gb");

app.instalar();
app.abrir();
app.cerrar();
app.desinstalar();

// let array = [app2, app3, app4, app5, app6, app7];
// for (let i = 0; i < array.length; i++){
//     document.writeln(array[i].appInfo());
//     array[i].instalar();
//     array[i].abrir();
//     array[i].cerrar();
//     array[i].desinstalar();
// }


document.write(app.appInfo());

for (let i = 2; i <=7; i++){
    document.write(eval("app"+i+".appInfo()"));
}
alert(2+"50")