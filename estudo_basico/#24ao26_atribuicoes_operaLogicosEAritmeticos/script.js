let x = 10
let y = 20

let result = document.getElementById("result")
//result.innerHTML = x + y //+ * ** %

result.innerHTML = x !== 10 && y >= 30 || x <= '20' && x == '10' || y === '20' //demonstração

x--
y++
x += y
y -= x

//operador ternario
result.innerHTML = (x > y) ? x+" é maior que "+y : x+" não é maior que "+y