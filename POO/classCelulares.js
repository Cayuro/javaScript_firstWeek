class celulares {
    constructor(color, peso, rdp, rdc, ram) {
        this.color = color;
        this.peso = peso;
        this.resolucionDePantalla = rdp;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }
    botonEncendido() {
        if (this.encendido == false) {
            alert("celular encendido");
            this.encendido = true;
        } else {
            alert("celular apagado");
            this.encendido = false;
        }
    }
    reiniciar() {
        if (this.encendido == true){
            alert("Reiniciando el celular");
        } else {
            alert("celular apagado");
        }
    }
    tomarFoto(){
        alert(`foto tomada en resolución de: ${this.resolucionDeCamara}`);
    }
    grabarVideo(){
        alert(`Video grabado en resolución de: ${this.resolucionDeCamara}`);
    }
    mostrarInfo(){
        return `
        Color: <b style="color: blue;"> ${this.color}</b> <br>
        Peso: <b style="color: blue;"> ${this.peso}</b> <br>
        Tamaño: <b style="color: blue;"> ${this.resolucionDePantalla}</b> <br>
        Resolución de cámara: <b style="color: blue;"> ${this.resolucionDeCamara}</b> <br>
        Memoria RAM: <b style="color: blue;"> ${this.memoriaRam}</b> <br>
        `;
    }
}
class celularAltaGama extends celulares {
    constructor(color, peso, rdp, rdc, ram, rdce) {
        super(color, peso, rdp, rdc, ram);
        this.resolucionDeCamaraExtra = rdce;
    }
    grabarVideoLento(){
        alert("estás grabando en cámara lenta");
    }
    reconocimientoFacial(){
        alert("reconocimiento facial activado");
    }
    infoAltaGama(){
        return this.mostrarInfo() + `Resolución de cámara extra: <b style="color: blue;"> ${this.resolucionDeCamaraExtra}</b> <br>`;
    }
}

const iphone = new celularAltaGama("rojo", "150gr", "5'", "4K", "2GB", "FULL HD");
const samsung = new celularAltaGama("negro", "155gr", "5.5'", "FULL HD", "3GB", "HD");
const nokia = new celulares("blanco", "160gr", "4.7'", "HD", "1GB");

// iphone.botonEncendido();
// iphone.reiniciar();
// iphone.tomarFoto();
// iphone.grabarVideo();

// samsung.botonEncendido();
// samsung.reiniciar();
// samsung.tomarFoto();
// samsung.grabarVideo();

// nokia.botonEncendido();
// nokia.reiniciar();
// nokia.tomarFoto();
// nokia.grabarVideo();

// document.write(`
// <h3>Características del Iphone</h3>
// ${iphone.mostrarInfo()}
// <h3>Características del Samsung</h3>
// ${samsung.mostrarInfo()}
// <h3>Características del Nokia</h3>
// ${nokia.mostrarInfo()}
// `);

document.write(`
<h3>Características del Iphone de alta gama</h3>
${iphone.infoAltaGama()}
<h3>Características del Samsung de alta gama</h3>
${samsung.infoAltaGama()}
`);