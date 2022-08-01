let intentos = 3;
while (intentos > 0) {
    alert("Solo se puede acceder al sitio si adivinas el número que estoy pensando. \nTenes " + intentos + " intentos.")
    let numero = 8;
    let numeroUsuario = prompt("Ingresa un numero entre 1 y 15");
    if (numeroUsuario == numero) {
        alert("Bienvenidx al sitio")
        break;
    } else if (numeroUsuario < numero) {
        intentos--;
        alert("Error. Te quedan " + (intentos) + " intentos. \nPista: Tenes que pensar un numero mas grande ;)")
    } else if (numeroUsuario > numero) {
        intentos--;
        alert("Error. Te quedan" + (intentos) + "intentos.\nPista: Tenes que pensar un numero mas chico ;)")
    }
    if (intentos == 0) {
        alert("Te quedaste sin intentos. Volve a intentar en 2hs")
    }
}
