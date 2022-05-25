//Array 
//É uma estrutura de dados que armazena uma coleção de elementos

let meuArray = [
    "Notebook",
    1500.00,
    { memoria: '16gb', hd: '500gb' },
    ['notebook dell', 'notebook samsung']

]

//Objetos
/**
 * Um objeto é uma coleção de propriedades, e uma propriedade
 * é uma associação entre um nome(uma chave) e um valor.
 * Um valor de propriedade pode ser uma função, que é então 
 * considerada um método do objeto.
 */

let myObject = {
    nome: "Claudiney",
    sobrenome: "Ryan",
    solteiro: true,
    idade: 19,
    altura: 1.76,
    cursos: [
        "Tecnico em Info",
        "Administração",
        "TCC"
    ],
    carros: {
        camaro: {
            placa: "9876tr",
            modelo: "5352rvgf"
        },
        toro: {
            placa: "765r3y",
            modelo: "6578uh"
        }
    }
}

alert(myObject.carros.camaro.placa)