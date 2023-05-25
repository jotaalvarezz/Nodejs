//let buffer = Buffer.alloc(1)
//let buffer = Buffer.from([1,4,8])
let buffer = Buffer.from('hola mundo')
let abcdario = Buffer.alloc(52)

for (let i = 0; i < abcdario.length; i++) {
    let bandera = i+65;
    if(bandera > 90){
        abcdario[i] = i+65+6;
    }else{
        abcdario[i] = i+65;
    }   
}

console.log(abcdario.toString())