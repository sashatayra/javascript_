let catalogo = document.getElementById('catalogo')

console.log(catalogo)

const productos = ["Gorra Champion. Disponible en: Negro, azul francia, bordo. Unidades: 5. $3000", "Gorra Nike. Disponible en: Negro, azul francia, rosa. Unidades: 2. $4000", "Gorra Lacoste. Disponible en: Blanco, negro, azul francia. Unidades: 7. $2600", "Gorra Adidas. Disponible en: Blanco, negro, rosa. Unidades: 5. $3500"]
 
for (const prod of productos) {
    let li = document.createElement('li')
    li.innerHTML = prod
    catalogo.appendChild(li)
}

let camisetas = document.getElementById("camisetas")
camisetas.innerHTML = "<li>Camiseta Adidas, River Plate Suplente Temporada 2022/23. // 9 Julian Alvarez. Disponible en: Negro y rojo. Unidades: 5 $10000</li><li>Camiseta Adidas, River Plate Suplente Temporada 2021/22 // 24 Enzo Perez. Disponible en: Negro y rojo. Unidades: 10. $8500</li><li>Camiseta Nike, Jersey Chelsea World Champions 2021/22. // 27 Kante. Disponible en: Azul. Unidades: 7. $12000</li><li>Camiseta Nike, Alternate Jersey PSG 2021/22. // 30 Messi. Disponible en: Azul y celeste. // Negro y gris. Unidades: 4. $12000</li>"

let pantalones = document.getElementById("pantalones")
pantalones.innerHTML = "<li>Pantalon Nike. Disponible en: Negro, gris. Unidades: 5. $8000</li><li>Pantalon Adidas. Disponible en: negro y rojo. // Negro y blanco. Unidades: 3. $7500</li><li>Pantalon Kappa. Disponible en negro y blanco. Unidades: 5. $8000</li><li>Pantalon Nike camuflado. Disponible en negro y gris. Unidades: 7. $8500"

