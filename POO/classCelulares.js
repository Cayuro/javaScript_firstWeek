class celulares {
    constructor(color, peso, rdp, rdc, ram, rdsistema, precio) {
        this.color = color;
        this.peso = peso;
        this.resolucionDePantalla = rdp;
        this.resolucionDeCamara = rdc;
        this.ram = ram;
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
}

const iphone = new celulares("rojo", "150gr", "5'", "4K", "2GB");

iphone.botonEncendido();
iphone.reiniciar();
iphone.tomarFoto();
iphone.grabarVideo();