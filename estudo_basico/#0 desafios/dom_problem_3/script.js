var nome = document.querySelector('#nome')

function escreve() {
    document.querySelector('#msg')
    .innerHTML = 'Bem vindo, <b>' + nome.value + '</b>!.'
}

var nome1 = 'Claudiney'

var sobrenome = 'Ryan'

document.querySelectorAll('input')[1].value = nome1 +' '+sobrenome