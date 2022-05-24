var titulo = document.querySelector("h1") //pega o elemento
var texto = document.createTextNode("Olá mundo com creatTextNode")
// cria um texto como nó de um elemento

titulo.appendChild(texto) //adicionando esse novo nó dentro do elemento

var novoTitulo = document.querySelector("h2")

novoTitulo.textContent = "Um novo texto com textContent atribuindo"
//adiciona um novo nó apenas atribuindo ao elemento escolhido