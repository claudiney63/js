document.getElementById("btn-set").addEventListener(
    "click", 
    function() {
        document.getElementById("titulo").setAttribute("class", "red") //passa como parametro o atributo e o nome do atributo
})

document.getElementById("btn-remove").addEventListener(
    "click",
    function (){
        document.getElementById("titulo").removeAttribute("class") //passa como parametro o atributo que desejo remover
    }
)

document.getElementById("btn-get").addEventListener(
    "click",
    function () {
        var value = document.getElementById("titulo").getAttribute("class") //passa como parametro o atributo que eu desejo pegar
        document.getElementById("class").innerHTML = value
    }
)