var minutos = document.getElementById("minutos")
var segundos = document.getElementById("segundos")
var comecar = document.getElementById("comecar")
var resultado = document.getElementById("resultado")

var cronometroSeg

var minutoAtual
var segundoAtual

var intervalo

for(var i = 0; i <= 60; i++) {
    minutos.innerHTML += '<option value="'+i+'">'+i+'</option>'
}

for(var i = 0; i <= 59; i++) {
    segundos.innerHTML += '<option value"'+i+'">'+i+'</option>'
}

comecar.addEventListener('click', function() {
    minutoAtual = minutos.value
    segundoAtual = segundos.value

    resultado.innerHTML = "00:"+minutoAtual + ":" + segundoAtual

    intervalo = setInterval(function() {
        segundoAtual-- //vai diminuindo o tempo
        if(segundoAtual <= 0) { //se segundo chegar a zero
            if(minutoAtual > 0) { //verifico se ainda possui minuto
                minutoAtual-- //diminui um minuto
                segundoAtual = 59 //e retorna segundo para 59
            } else { //se minuto e segundo tiver zerado, acabou o tempo
                alert("Fim do Tempo")
                clearInterval(intervalo) //parar o setInterval
            }
        }
        resultado.innerHTML = "00:"+minutoAtual + ":" + segundoAtual
    }, 1000)
})
