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

botonUno.onclick = () => gorras.innerHTML = "<li>1. Gorra Champion. Disponible en: Negro, azul francia, bordo. Unidades: 5. $3000.</li><li>2. Gorra Nike. Disponible en: Negro, azul francia, rosa. Unidades: 2. $4000</li><li>3. Gorra Lacoste. Disponible en: Blanco, negro, azul francia. Unidades: 7. $2600</li><li>4. Gorra Adidas. Disponible en: Blanco, negro, rosa. Unidades: 5. $3500</li>"

botonDos.onclick =() => camisetas.innerHTML = "<li>5. Camiseta Adidas, River Plate Suplente Temporada 2022/23. // 9 Julian Alvarez. Disponible en: Negro y rojo. Unidades: 5 $10000</li><li>6. Camiseta Adidas, River Plate Suplente Temporada 2021/22 // 24 Enzo Perez. Disponible en: Negro y rojo. Unidades: 10. $8500</li><li>7. Camiseta Nike, Jersey Chelsea World Champions 2021/22. // 27 Kante. Disponible en: Azul. Unidades: 7. $12000</li><li>8. Camiseta Nike, Alternate Jersey PSG 2021/22. // 30 Messi. Disponible en: Azul y celeste. // Negro y gris. Unidades: 4. $12000</li>"

botonTres.onclick = () => pantalones.innerHTML = "<li>9. Pantalon Nike. Disponible en: Negro, gris. Unidades: 5. $8000</li><li>10. Pantalon Adidas. Disponible en: negro y rojo. // Negro y blanco. Unidades: 3. $7500</li><li>11. Pantalon Kappa. Disponible en negro y blanco. Unidades: 5. $8000</li><li>12. Pantalon Nike camuflado. Disponible en negro y gris. Unidades: 7. $8500</li>"

let compra = document.getElementById("alertDos")

compra.innerHTML = "<p>Si tu compra supera los $3000 obtenes un 10% de descuento</p><p>Si tu compra supera los $6000 obtenes un 20% de descuento.</p><p>Si tu compra supera los $10000 ademas del 20% te ganas un regalo!"


let catalogo = document.getElementById('catalogo')

let formulario = document.getElementById("seleccionar")
console.log(formulario)

function datosForm(e){
    e.preventDefault();
    let datos = e.target
    console.log(datos.children[0].value)
    console.log(datos.children[1].value)
}

formulario.addEventListener('submit', datosForm)
