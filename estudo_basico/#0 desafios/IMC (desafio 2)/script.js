function imc(peso, altura, callback) {
    var imc =  peso / (altura ** 2)

    if(callback && typeof callback === 'function') {
        return callback(imc)
    }
    
    return imc
}

function tipoCorporeo(imc) {

    if (imc < 18.5)
        return "ABAIXO DO PESO"
    else if (imc >= 18.5 && imc <= 24.9)
        return "PESO NORMAL"
    else if (imc >= 25 && imc <= 29.9)
        return "SOBREPESO"
    else if (imc >= 30 && imc <= 34.9)
        return "OBESIDADE GRAU 1"
    else if (imc >= 35 && imc <= 39.9)
        return "OBESIDADE GRAU 2"
    else if (imc > 40)
        return "OBESIDADE GRAU 3"
}

var peso = 61
var altura = 1.76

console.log('imc: ', imc(peso, altura, tipoCorporeo))