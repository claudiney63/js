function imc(peso, altura) {
    return peso / (altura ** 2)
}

function tipoCorporeo(imc) {

    if (imc < 18.5)
        console.log("ABAIXO DO PESO")
    else if (imc >= 18.5 && imc <= 24.9)
        console.log("PESO NORMAL")
    else if (imc >= 25 && imc <= 29.9)
        console.log("SOBREPESO")
    else if (imc >= 30 && imc <= 34.9)
        console.log("OBESIDADE GRAU 1")
    else if (imc >= 35 && imc <= 39.9)
        console.log("OBESIDADE GRAU 2")
    else if (imc > 40)
        console.log("OBESIDADE GRAU 3")
}