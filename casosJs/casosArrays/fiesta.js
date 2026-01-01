// Ejercicio de función mayorEdad y gratuito 
// para el primero que entren después de las 2am y antes de las 7am

function mayorEdad() {
    let edad = parseInt(prompt("Ingrese su edad: "));
    if (edad >= 18) {
        //alert("PUEDES INGRESAR, eres mayor de edad.");
        return true;
    } else {
        //alert("NO PUEDES INGRESAR, eres menor de edad.");
        return false;
    }
}
function ingreso(hora) {
    let free = false;
    let edadUsuario = mayorEdad();
    {
        if (edadUsuario && (hora >= 2 && hora < 7) && !free) {
        alert("El ingreso es gratuito. para tí por ser la primera persona en entrar luego de las 2am.");
        free = true;
        } else if (edadUsuario) {
        alert("el ingreso vale $10 dolares.");
        } 
        else {
        alert("No puedes ingresar por ser menor de edad.");
        }
    }
}

ingreso(9);
ingreso(10);
ingreso(11);
ingreso(12);
ingreso(1);
ingreso(2);
ingreso(3);
ingreso(4);