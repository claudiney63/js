var notas = document.getElementsByClassName('alunos')
var media = 0

for (let i = 0; i < notas.length; i++) {
    var aluno = document.getElementsByClassName('alunos')[i].children
    for (let j = 1; j < aluno.length - 1; j++) {
        media += parseFloat(aluno[j].innerHTML)
        aluno[aluno.length - 1].innerHTML = media / (aluno.length - 2)
    }
    media = 0
}