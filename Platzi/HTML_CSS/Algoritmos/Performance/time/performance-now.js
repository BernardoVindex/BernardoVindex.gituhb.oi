const performance =require('perf_hooks')

function contar(n) {
    for (let i = 0; i < n; i++) {
        console.log(i)
    }
}

let startTime = performance.performance.now()
contar(5)
let endTime = performance.performance.now()
let result = endTime -  startTime

console.log(`El algoritmo ha durado ${result}`)