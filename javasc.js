let nombreUsuario = prompt("Bienvenido a tu calculador de calorías. Por favor ingresa tu nombre:")
console.log(nombreUsuario)

let pechugaDePollo = 159
let bifeDeRes = 278
let arrozIntegral = 124
let huevoCocido = 146
let huevoFrito = 240
let tomate = 18
let lechuga = 15
let papasFritas = 312
let fideos = 138
let milanesaPollo = 246
let milanesaCarne = 287

let total = 0
let opcionMenu = 0



function menu() {
    let cantidad = prompt("Cuantos alimentos tiene tu plato?")

    for (let i = 0; i < cantidad; i++) {
        
        let opcionMenu = prompt(`Muy bien. A continuación deberás seleccionar los alimentos que están presentes en tu plato para conocer el total de ellos sumados:
                    1.Pechuga de pollo
                    2.Bife De Res
                    3.Arroz Integral
                    4.Huevo Cocido
                    5.Huevo Frito
                    6.Tomate
                    7.Lechuga
                    8.PapasFritas
                    9.Fideos
                    10.Milanesa de Pollo
                    11.Milanesa de Carne
                    12. Finalizar Aplicación`)

            switch (opcionMenu) {
                case "1":
                    total += (pechugaDePollo)
                    console.log("Pechuga de Pollo " + (pechugaDePollo) + " Kcal")
                    break
                case "2":
                    total += (bifeDeRes)
                    console.log("Bife de Res " + (bifeDeRes) + " Kcal")
                    break
                case "3":
                    total += (arrozIntegral)
                    console.log("Arroz Integral " + (arrozIntegral) + " Kcal")
                    break
                case "4":
                    total += (huevoCocido)
                    console.log("Huevo Cocido " + (huevoCocido) + " Kcal")
                    break
                case "5":
                    total += (huevoFrito)
                    console.log("Huevo Frito " + (huevoFrito) + " Kcal")
                    break
                case "6":
                    total += (tomate)
                    console.log("Tomate " + (tomate) + " Kcal")
                    break
                case "7":
                    total += (lechuga)
                    console.log("Lechuga " + (lechuga) + " Kcal")
                    break
                case "8":
                    total += (papasFritas)
                    console.log("Papas Fritas " + (papasFritas) + " Kcal")
                    break
                case "9":
                    total += (fideos)
                    console.log("Fideos " + (pechugaDePollo) + " Kcal")
                    break
                case "10":
                    total += (milanesaPollo)
                    console.log("Milanesa de Pollo " + (milanesaPollo) + " Kcal")
                    break
                case "11":
                    total += (milanesaCarne)
                    console.log("Milanesa de Carne " + (milanesaCarne) + " Kcal")
                    break
            }    
    }
    alert("El total de las calorías de los alimentos es de " + (total) + "Kcal")
        console.log("Total " + (total) + " Kcal")

        if (total > 2000) {
        alert("Atención! Las calorías ingeridas superan una dieta basada en los 2000 kcal diarios!!!")
        } else {
        alert("Tu ingestas calóricas estan dentro de los parámetros normales segun una dieta de 2000 kcal diarios")
        }
}

menu()
