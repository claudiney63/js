function media() {
    var x = 0
    var result = 0

    while(typeof arguments[x] === 'number') {
        result += arguments[x]
        x++
    }

    return (result/arguments.length)
}

console.log(media(2, 4, 0))