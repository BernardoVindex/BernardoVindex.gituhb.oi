function contar(n) {
    for (let i = 0; i < n; i++) {
        console.log(i)
    }
}

let startTime = console.time('Duracion')
contar(5)
let endTime = console.timeEnd('Duracion')
