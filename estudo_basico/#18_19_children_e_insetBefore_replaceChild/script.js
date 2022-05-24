var lista = document.getElementsByTagName("ul")[0] //pegamos todas as tags ul, porem so a do indice 0
var lista2 = document.getElementsByTagName("ul")[1]

var itens = lista.getElementsByTagName("li") //pegamos todos os li do indice 0
var itens2 = lista2.getElementsByTagName("li")

var novoItem = document.createElement("li") //criamos um novo item com a tag li
novoItem.textContent = "Rafael" //e atribuimos um texto a esse elemento criado

var novoItem2 = document.createElement("li")
novoItem2.textContent = "Ana"

lista.insertBefore(novoItem, itens[2]) //colocamos esse novo elemento como primeiro parametro
//e no segundo a posição que vai ser colocada antes

lista2.insertBefore(novoItem2, itens2[1])

var lista3 = document.getElementsByTagName("ul")[2]
var itens3 = lista3.getElementsByTagName("li")

var novoItem3 = document.createElement("li")
novoItem3.textContent = "Napolitana"

lista3.replaceChild(novoItem3, itens3[2]) //replace child troca o conteudo da posição especificada