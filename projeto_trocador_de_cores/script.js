let cores = [
    "red",
    "blue",
    "green",
    "black",
    "pink",
    "orange",
    "yellow",
    "white"
]

document.getElementById("botao")
.addEventListener(
    "click", () => {
        n = Math.floor(Math.random() * cores.length)
        cor = cores[n]

        if(cor == "black") {
            document.querySelector("h1").style.color = "white"
        } else {
            document.querySelector("h1").style.color = "black"
        }

        document.body.style.backgroundColor = cor
        document.querySelector("h1").innerHTML = "Cor de Fundo: " + cor
    }
)