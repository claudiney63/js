/* console.log(
    document.getElementById("p1").innerHTML
) */

var paragrafo = document.getElementById("p1")

paragrafo.innerHTML = "Novo Conteudo"

paragrafo.style.color = "RED"
paragrafo.style.backgroundColor = "Green"
paragrafo.style.height = "30px"
paragrafo.style.width = "120px"

var imagem = document.getElementById("imagem")

imagem.src = "naruto.jpg"
imagem.alt = "Teste de Imagem"
imagem.height = "600"
imagem.width = "200"

var imagem2 = document.createElement("img")
var p = document.createElement("p")

console.log (
    imagem.src = "naruto.jpg",

    p
)