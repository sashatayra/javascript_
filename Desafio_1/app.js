function dctoUno (monto){
    let dctoDiez = monto - (monto * 0.1);
    return dctoDiez;
}

function dctoDos (monto){
    let dctoVeinte = monto - (monto * 0.2);
    return dctoVeinte;
}

alert("Bienvenidx al simulador de descuento. \nSi tu compra supera los $3000 obtenes un 10% en efectivo/transferencia. \nSi tu compra supera los $6000 obtenes un 20% en efectivo/transferencia.")
let entrada = "SI"
while (entrada != "no"){
    let monto = Number(prompt("Ingresa el monto de tu compra"))
    if (monto >= 3000 && monto < 6000){
        alert("Precio final: $" + dctoUno(monto))
        entrada = prompt("Desea seguir utilizando el simulador de descuento? Escriba si/no")
    } else if (monto >= 6000){
        alert("Precio final: $" + dctoDos(monto))
        entrada = prompt("Desea seguir utilizando el simulador de descuento? Escriba si/no")
    }
    if (monto < 3000){
        alert("Agrega productos a tu compra para poder acceder a nuestros descuentos.")
    }
}
