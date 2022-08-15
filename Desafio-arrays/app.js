const dctoUno = (monto) => { let dctoDiez = (monto *= 0.9);
    return dctoDiez;
}

const dctoDos = (monto) => { let dctoVeinte = (monto *= 0.8);
    return dctoVeinte;
}

const calculoEnvio = (distancia) => {
    return distancia *= 100
}

const datosCliente = [];

class Regalo {
    constructor (producto, talle, color){
        this.producto = producto;
        this.talle = talle;
        this.color = color;
    }
}

const regalo1 = new Regalo("pantalon", "a eleccion", "negro")

alert("Bienvenidx al simulador de descuento. \nSi tu compra supera los $3000 obtenes un 10% en efectivo/transferencia. \nSi tu compra supera los $6000 obtenes un 20% en efectivo/transferencia. \nSi tu compra supera los $10000 tenes un 20% de descuento en efectivo/transeferencia, y ademas te enviamos un regalo!")

let entrada = "SI"
while (entrada != "no"){
    let monto = Number(prompt("Ingresa el monto de tu compra"))
    if (monto >= 3000 && monto < 6000){
        alert("Precio final: $" + dctoUno(monto))
        let distancia = Number(prompt("Nos encontramos en la calle Mansilla 1500. Escriba la distancia medida en KM desde su domicilio hasta nuestra dirección"))
        alert("El costo de envio es: $" + calculoEnvio(distancia))
        let localidadCliente = prompt("Ingrese su localidad para poder registrarlo en nuestra base de datos.")
        let domicilioCliente = prompt("Ingrese su domicilio.")
        let cPCliente = prompt("Ingrese su codigo postal.")
        datosCliente.push({localidadCliente, domicilioCliente, cPCliente})
        entrada = prompt("Desea seguir utilizando nuestro servicio? Escriba si/no")
    } else if (monto >= 6000 && monto < 10000){
        alert("Precio final: $" + dctoDos(monto))
        let distancia = Number(prompt("Nos encontramos en la calle Mansilla 1500. Escriba la distancia medida en KM desde su domicilio hasta nuestra dirección"))
        alert("El costo de envio es: $" + calculoEnvio(distancia))
        let localidadCliente = prompt("Ingrese su localidad para poder registrarlo en nuestra base de datos.")
        let domicilioCliente = prompt("Ingrese su domicilio.")
        let cPCliente = prompt("Ingrese su codigo postal.")
        datosCliente.push({localidadCliente, domicilioCliente, cPCliente})
        entrada = prompt("Desea seguir utilizando nuestro servicio? Escriba si/no")
    } else if (monto >= 10000){
        alert("Precio final: $" + dctoDos(monto) + "\nAdemas te ganaste un " + regalo1.producto + " talle " + regalo1.talle + ", color " + regalo1.color + "!")
        let distancia = Number(prompt("Nos encontramos en la calle Mansilla 1500. Escriba la distancia medida en KM desde su domicilio hasta nuestra dirección"))
        alert("El costo de envio es: $" + calculoEnvio(distancia))
        let localidadCliente = prompt("Ingrese su localidad para poder registrarlo en nuestra base de datos.")
        let domicilioCliente = prompt("Ingrese su domicilio.")
        let cPCliente = prompt("Ingrese su codigo postal.")
        datosCliente.push({localidadCliente, domicilioCliente, cPCliente})
        entrada = prompt("Desea seguir utilizando nuestro servicio? Escriba si/no")
    }
    if (monto < 3000){
        alert("Agrega productos a tu compra para poder acceder a nuestros descuentos.")
        break;
    } 
}

for (const datos of datosCliente){
    console.log(datos.localidadCliente)
    console.log(datos.cPCliente)
    console.log(datos.domicilioCliente)
}



