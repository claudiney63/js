/**
 * Condicionais:
 * If
 * Else
 * elseif
 * Switch
 */

let pais = "Brasil"
let estado = "BA"

/*if(pais == 'Argentina') {
    console.log("Sou brasileiro")
} else if(estado == "BA") {
    console.log("Sou baiano")
} else {
    console.log("Sou gringo")
}
*/

/*switch (pais) {
    case "Brasil":
        console.log("Sou brasileiro")
        break;
    default:
        console.log("Sou gringo")
        break;
}
*/

/**
 * Condicionais:
 * for
 * while
 */

let paises = document.getElementsByClassName('pais')

/*for(let i = 0; i < paises.length; i++) {
    console.log(paises[i].innerHTML)
}*/

/*let i = 0

while(i < paises.length) {
    console.log(paises[i].innerHTML)
    i++
}*/

//também existe o do while

let fruta = {
    nome: "Banana",
    preco: 1.99,
    unidade: 1
}

let carros = ["Mercedes", "Camaro", "Toro"]

for(let i in fruta) {
    console.log(fruta[i])
}

for(let j of carros) {
    console.log(j)
} 