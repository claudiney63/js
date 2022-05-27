let n1 = prompt("Digite um numero: ")
let resultado

if(n1 == "" || n1 == undefined || n1 == null || n1 == NaN) {
    alert("Não houve número digitado")
    
} else {

    document.getElementById("n1").innerHTML = parseInt(n1)

    function calcular(simbolo) {

        let n2 = prompt("Digite um numero: ")

        if(n2 == "" || n2 == undefined || n2 == null || n2 == NaN) {
            alert("Não houve número digitado")

        } else {
            switch (simbolo) {
                case '+':
                    resultado = parseInt(n1) + parseInt(n2)
                    break;
                case '-':
                    resultado = parseInt(n1) - parseInt(n2)
                    break;
                case '*':
                    resultado = parseInt(n1) * parseInt(n2)
                    break;
                case '/':
                    resultado = parseInt(n1) / parseInt(n2)
                    break;
                default:
                    break;
            }

            document.getElementById("n1").innerHTML =
            n1 +" "+ simbolo + " " + n2 + " = " + resultado

            n1 = resultado
        }
    }
}

function resetar() {
    document.getElementById("n1").innerHTML = ""
}

