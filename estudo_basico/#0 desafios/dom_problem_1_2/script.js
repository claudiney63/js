(function () {

    var nome = prompt("Digite seu nome: ")



    document.querySelector('#msg')
        .innerHTML = 'Bem vindo, <b>' + nome + '</b>!.'

})()