class Estudante {
    constructor(nome1, sobrenome1) {
        var nome = nome1 || undefined
        var sobrenome = sobrenome1 || undefined
        this.getNome = () => nome
        this.setNome = (name) => nome = name
        this.getSobrenome = () => sobrenome
        this.setSobrenome = (secondName) => sobrenome = secondName
        this.nomeCompleto = () => nome + " " + sobrenome
    }
}

var aluno1 = new Estudante("João", "Emanuel")
var aluno2 = new Estudante("Pedro", "Victor")
var aluno3 = new Estudante("Claudiney", "Ryan")

var alunos = [aluno1, aluno2, aluno3]

for(let i = 0; i < 3; i++) {
    console.log(alunos[i].nomeCompleto())
}