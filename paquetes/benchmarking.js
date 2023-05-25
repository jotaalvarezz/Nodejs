let suma = 0;
let suma2 = 0;
console.time('Todo')
console.time('bucle')
function bucle() {
    for (let i = 0; i < 10000000000; i++) {
        suma++        
    }
}
console.timeEnd('bucle')

console.time('bucle 2')
function bucle2() {
    for (let i = 0; i < 1000000000000000000; i++) {
        suma2++        
    }
}

console.timeEnd('bucle 2')

console.log('Proceso asyncrono comenzando')
console.time('asyncrono')

asyncrona().then(res => {
    console.timeEnd('asyncrono')
})

function asyncrona() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.error('Proceso asyncrono finalizado.')
            resolve();
        }, 3000);
    })
}

console.timeEnd('Todo')