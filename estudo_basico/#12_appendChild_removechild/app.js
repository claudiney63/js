var p = document.createElement("p")
p.innerHTML = "Olá pessoal"

var img = document.createElement("img")
img.src = "html.png"

//appendChild serve para adicionar um elemento dentro de outro,
//um filho que se extende do pai

document.getElementById("conteudo").appendChild(p)
document.getElementById("conteudo").appendChild(img)

//removeChild é usado para remover um elemento do elemento pai
document.getElementById("conteudo").removeChild(img)