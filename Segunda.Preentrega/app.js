/**
 * Tengo algunos errores que decidi dejarlos para que me los corrijas en la devolucion :)
 * Los productos ingresados en el carrito se sobreescriben y no se acumulan.
 */



// Arrays y constructores

class Pantalones {
    constructor (id, marca, colores, stock, precio){
        this.id = id;
        this.marca = marca;
        this.colores = colores;
        this.stock = stock;
        this.precio = precio;

    }
}

const pantalonesArray = [];
pantalonesArray.push(new Pantalones(9, "Nike", "Negro, gris", 5, 8000));
pantalonesArray.push(new Pantalones(10, "Adidas", "Negro y rojo. // Negro y blanco", 3, 7500));
pantalonesArray.push(new Pantalones(11, "Kappa", "Negro y blanco.", 5, 8000));
pantalonesArray.push(new Pantalones(12, "Nike", "Camuflado negro y gris", 7, 8500));

const listaProd = [];

// Defino el DOM

let bienvenida = document.getElementById('alertUno')

bienvenida.innerHTML = "<h1>Bienvenidx a nuestro catalogo.</h1>"

let categoria = document.getElementById("categoria")

categoria.innerHTML = "<h2>Elija la categoria que desea ver.</h2>"

let botonUno = document.getElementById("btnUno")

let botonDos = document.getElementById("btnDos")

let botonTres = document.getElementById("btnTres")

let gorras = document.getElementById("gorras")

let camisetas = document.getElementById("camisetas")

let pantalones = document.getElementById("pantalones")

let compra = document.getElementById("alertDos")

compra.innerHTML = "<p>Si tu compra supera los $3000 obtenes un 10% de descuento</p><p>Si tu compra supera los $6000 obtenes un 20% de descuento.</p><p>Si tu compra supera los $10000 ademas del 20% te ganas un regalo!"

let catalogo = document.getElementById('catalogo')

let formulario = document.getElementById("form")
console.log(formulario)

let bandera = false;

let iCarrito = document.getElementById("carrito")

iCarrito = formulario.children[0].value

let carrito = formulario.children[0]

let mostrarProdSolos = document.getElementById('mostrarProdSolos')

// Eventos

botonUno.onclick = () => gorras.innerHTML = "<li>1. Gorra Champion. Disponible en: Negro, azul francia, bordo. Unidades: 5. $3000.</li><li>2. Gorra Nike. Disponible en: Negro, azul francia, rosa. Unidades: 2. $4000</li><li>3. Gorra Lacoste. Disponible en: Blanco, negro, azul francia. Unidades: 7. $2600</li><li>4. Gorra Adidas. Disponible en: Blanco, negro, rosa. Unidades: 5. $3500</li>"

botonDos.onclick =() => camisetas.innerHTML = "<li>5. Camiseta Adidas, River Plate Suplente Temporada 2022/23. // 9 Julian Alvarez. Disponible en: Negro y rojo. Unidades: 5 $10000</li><li>6. Camiseta Adidas, River Plate Suplente Temporada 2021/22 // 24 Enzo Perez. Disponible en: Negro y rojo. Unidades: 10. $8500</li><li>7. Camiseta Nike, Jersey Chelsea World Champions 2021/22. // 27 Kante. Disponible en: Azul. Unidades: 7. $12000</li><li>8. Camiseta Nike, Alternate Jersey PSG 2021/22. // 30 Messi. Disponible en: Azul y celeste. // Negro y gris. Unidades: 4. $12000</li>"

botonTres.addEventListener("click", mostrarPant)

formulario.addEventListener('submit', agregarProd)

// Funciones

carrito.focus();

function validarDatos() {
    iCarrito = formulario.children[0].value;
    console.log(iCarrito)
    if(carrito == ''){
        alert("Agrega un producto para continuar")
        carrito.focus()
        bandera = false;
    } else {
        bandera = true;
    }
}

const mostrarUnProd = (listaProd) =>{
    listaProd.forEach(iCarrito => {
        mostrarProdSolos.innerHTML = `
        <h3>Tus productos:</h3>
        <p><strong>Articulo n°</strong>${iCarrito}</p>`
    });
}


function agregarProd(e){
    e.preventDefault()
    validarDatos();
    if(bandera == true){
        let opcion = confirm("Desea agregar este producto?")
        if(opcion == true){
            let datos = e.target
            listaProd.push(iCarrito)
            datos.children[0].value = "";
            mostrarProdSolos.innerHTML = ""
            mostrarUnProd(listaProd)
            carrito.focus()
        } else {
            alert("No se agregara el producto")
        }

        } else {
            carrito.focus()
        }

        localStorage.setItem("numeroArticulo", iCarrito)
        localStorage.setItem("listaProd", listaProd)

}

function mostrarPant (e){
    e.preventDefault();
    for(const datos of pantalonesArray){
        pantalones.innerHTML += `
        <li>${datos.id}. Pantalon ${datos.marca}. Disponible en: ${datos.colores}. Unidades: ${datos.stock}. $${datos.precio}</li> `
    }
}

// STORAGE Y JSON

const pantJson = JSON.stringify(pantalonesArray) 
console.log(pantJson)

localStorage.setItem("pantArray", pantJson)

const pantLS = JSON.parse(localStorage.getItem("pantArray"))
console.log(pantLS)

let numArticulo = localStorage.getItem("numeroArticulo")
console.log(typeof numArticulo)

let listaProd2 = localStorage.getItem("listaProd").split(",")