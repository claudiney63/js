
var arr = new Array(1, 2, 3)
var obj = new Object()
obj.title = "titulo"

//console.log(obj)

//synatxe formal e literal

var obj1 = new Object()

var obj2 = {
    title: "titulo",
    peso: 67
}

//console.log(obj2)

//console.log([] === []) //comparam o local na memoria(referencia), não por valor

function mudaTamanho(tmn) {
    this.tamanho = tmn
}

var caneta = {
    cor: 'azul',
    tamanho: 2,
    mudaCor: function(mudCor) {this.cor = mudCor}, //se referenciar pelo this ao objeto
    mudaTamanho: mudaTamanho
}

/*console.log(caneta)
caneta.mudaCor("Preta")
console.log(caneta)
caneta.mudaTamanho(78)
console.log(caneta)*/

//objetos construtores

class Caneta {
    constructor(preco, cor) {
        this.preco = preco || 1.00
        var color = cor || "Azul" //propriedade privada
        this.mudaCor = function (cor) {
            color = cor
        }
        this.getColor = () => color
    }
}

var caneta1 = new Caneta(2, "preto")

console.log(caneta1.getColor())