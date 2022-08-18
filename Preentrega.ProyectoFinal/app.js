/**
 * Aca empieza el código del catalogo:
 */

class Gorras {
    constructor (id, marca, colores, stock, precio){
        this.id = id;
        this.categoria = "gorras"
        this.marca = marca;
        this.colores = colores;
        this.stock = stock;
        this.precio = precio;

    }
}

const gorraUno = new Gorras(1, "Champion", "Negro, Azul Francia, Bordo", 5, 3000);
const gorraDos = new Gorras(2, "Nike", "Negro, Azul Francia, Rosa", 2, 4000);
const gorraTres = new Gorras(3, "Lacoste", "Blanco, Negro, Azul Francia", 7, 2600);
const gorraCuatro = new Gorras(4, "Adidas", "Blanco, Negro, Rosa", 5, 3500);

class Camisetas {
    constructor (id, marca, modelo, colores, stock, precio){
        this.categoria = "camiseta"
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.colores = colores;
        this.stock = stock;
        this.precio = precio;

    }
}

const camisetaUno = new Camisetas(1, "Adidas", "River Plate suplente temporada 2022/23. // 9 Julian Alvarez", "Negro y rojo", 5, 10000);
const camisetaDos = new Camisetas(2, "Adidas", "Camiseta Suplente de River Plate 2021/22. // 24 Enzo Perez", "Negro y rojo", 10, 8500);
const camisetaTres = new Camisetas(3, "Nike", "Jersey Chelsea World Champions 2021/22. // 27 Kante", "Azul", 7, 12000);
const camisetaCuatro = new Camisetas(4, "Nike", "Alternate Jersey PSG 2021/22. // 30 Messi", "Azul y celeste. // Negro y gris.", 4, 12000);

class Pantalones {
    constructor (id, marca, colores, stock, precio){
        this.categoria = "pantalones"
        this.id = id;
        this.marca = marca;
        this.colores = colores;
        this.stock = stock;
        this.precio = precio;

    }
}

const pUno = new Pantalones(1, "Nike", "Negro, gris", 5, 8000);
const pDos = new Pantalones(2, "Adidas", "Negro y rojo. // Negro y blanco", 3, 7500);
const pTres = new Pantalones(3, "Kappa", "Negro y blanco.", 5, 8000);
const pCuatro = new Pantalones(4, "Nike", "Camuflado negro y gris", 7, 8500);


const gorrasArray = [gorraUno, gorraDos, gorraTres, gorraCuatro]; 
const camisetasArray = [camisetaUno, camisetaDos, camisetaTres, camisetaCuatro];
const pantalonesArray = [pUno, pDos, pTres, pCuatro];

const carrito = []; 

let entradaCat = "SI"
let catalogo = prompt("Bienvenidx a nuestro catalogo express. \nIndique qué categoria desea ver.\nGorras. \nCamisetas. \nPantalones.").toLowerCase()
let prodSeleccionado;
while(entradaCat != "no"){
    if(catalogo == "gorras"){
        let gorCliente = prompt("Para seleccionar un producto debe escribir el numero que tengan a la izquierda. \n1. Gorra " + gorraUno.marca + ". Disponible en " + gorraUno.colores + ". Unidades: " + gorraUno.stock + " $" + gorraUno.precio + "\n2.Gorra " + gorraDos.marca + ". Disponible en " + gorraDos.colores + ". Unidades: " + gorraDos.stock + " $" + gorraDos.precio + "\n3. Gorra " + gorraTres.marca + ". Disponible en " + gorraTres.colores + ". Unidades: " + gorraTres.stock + " $" + gorraTres.precio + "\n4. Gorra " + gorraCuatro.marca + ". Disponible en: " + gorraCuatro.colores + ". Unidades: " + gorraCuatro.stock + " $" + gorraCuatro.precio);
        prodSeleccionado = gorrasArray.find(gorra => gorra.id === Number(gorCliente))
        carrito.push(prodSeleccionado)
        entradaCat = prompt("Usted ingresó: " + gorCliente + ". Desea seguir agregando productos? Escriba si/no.")
    } else if (catalogo == "camisetas"){
        let camCliente = prompt("Para seleccionar un producto debe escribir el numero que tengan a la izquierda. \n1. Camiseta " + camisetaUno.marca + " " + camisetaUno.modelo + ". Color: " + camisetaUno.colores + ". Unidades: " + camisetaUno.stock + " $" + camisetaUno.precio + "\n2. Camiseta " + camisetaDos.marca + " " + camisetaDos.modelo + ". Color:" + camisetaDos.colores + ". Unidades: " + camisetaDos.stock + " $" + camisetaDos.precio + "\n3. Camiseta " + camisetaTres.marca + " " + camisetaTres.modelo + ". Color: " + camisetaTres.colores + ". Unidades: " + camisetaTres.stock + " $" + camisetaTres.precio + "\n4. Camiseta " + camisetaCuatro.marca + " " + camisetaCuatro.modelo + ". Color: " + camisetaCuatro.colores + ". Unidades: " + camisetaCuatro.stock + " $" + camisetaCuatro.precio);
        prodSeleccionado = camisetasArray.find(camiseta => camiseta.id === Number(camCliente));
        carrito.push(prodSeleccionado)
        entradaCat = prompt("Usted ingresó: " + camCliente + ". Desea seguir agregando productos? Escriba si/no.")
        
    }
    if (catalogo == "pantalones"){
        let panCliente = prompt("Para seleccionar un producto debe escribir el numero que tengan a la izquierda. \n1. Chupin " + pUno.marca + ". Disponible en " + pUno.colores + ". Unidades: " + pUno.stock + " $" + pUno.precio + "\n2. Chupin " + pDos.marca + ". Disponible en " + pDos.colores + ". Unidades: " + pDos.stock + " $" + pDos.precio + "\n3. Chupin " + pTres.marca + ". Disponible en " + pTres.colores + ". Unidades: " + pTres.stock + " $" + pTres.precio + "\n4. Chupin " + pCuatro.marca + ". Disponible en " + pCuatro.colores + ". Unidades: " + pCuatro.stock + " $" + pCuatro.precio);
        prodSeleccionado = pantalonesArray.find(pantalon => pantalon.id === Number(panCliente))
        carrito.push(prodSeleccionado)
        entradaCat = prompt("Usted ingresó: " + panCliente + ". Desea seguir agregando productos? Escriba si/no.") 
        
    }
}


console.log(carrito)
let totalCarrito = carrito.reduce((acc, prod) => acc += prod.precio, 0)
console.log(totalCarrito)

/**
 * Hasta aca el catalogo. 
 * Ahora empieza el simulador de descuento y envio.
 */


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

let entradaDcto = "SI"
while (entradaDcto != "no"){
    let monto = Number(prompt("Ingresa el monto de tu compra"))
    if (monto >= 3000 && monto < 6000){
        alert("Precio final: $" + dctoUno(monto))
        let distancia = Number(prompt("Nos encontramos en la calle Mansilla 1500. Escriba la distancia medida en KM desde su domicilio hasta nuestra dirección"))
        alert("El costo de envio es: $" + calculoEnvio(distancia))
        let localidadCliente = prompt("Ingrese su localidad para poder registrarlo en nuestra base de datos.")
        let domicilioCliente = prompt("Ingrese su domicilio.")
        let cPCliente = prompt("Ingrese su codigo postal.")
        datosCliente.push({localidadCliente, domicilioCliente, cPCliente})
        entradaDcto = prompt("Desea seguir utilizando nuestro servicio? Escriba si/no")
    } else if (monto >= 6000 && monto < 10000){
        alert("Precio final: $" + dctoDos(monto))
        let distancia = Number(prompt("Nos encontramos en la calle Mansilla 1500. Escriba la distancia medida en KM desde su domicilio hasta nuestra dirección"))
        alert("El costo de envio es: $" + calculoEnvio(distancia))
        let localidadCliente = prompt("Ingrese su localidad para poder registrarlo en nuestra base de datos.")
        let domicilioCliente = prompt("Ingrese su domicilio.")
        let cPCliente = prompt("Ingrese su codigo postal.")
        datosCliente.push({localidadCliente, domicilioCliente, cPCliente})
        entradaDcto = prompt("Desea seguir utilizando nuestro servicio? Escriba si/no")
    } else if (monto >= 10000){
        alert("Precio final: $" + dctoDos(monto) + "\nAdemas te ganaste un " + regalo1.producto + " talle " + regalo1.talle + ", color " + regalo1.color + "!")
        let distancia = Number(prompt("Nos encontramos en la calle Mansilla 1500. Escriba la distancia medida en KM desde su domicilio hasta nuestra dirección"))
        alert("El costo de envio es: $" + calculoEnvio(distancia))
        let localidadCliente = prompt("Ingrese su localidad para poder registrarlo en nuestra base de datos.")
        let domicilioCliente = prompt("Ingrese su domicilio.")
        let cPCliente = prompt("Ingrese su codigo postal.")
        datosCliente.push({localidadCliente, domicilioCliente, cPCliente})
        entradaDcto = prompt("Desea seguir utilizando nuestro servicio? Escriba si/no")
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

