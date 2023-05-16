let nombre = process.env.NOMBRE || 'No tengo nombre'
let empresa = process.env.EMPRESA || 'No tengo empresa'

console.log('Mi nombre es',nombre)
console.log('Mi empresa es =>',empresa)


//creacion de un proceso demonio el cual un proceso en cual cada vez que detecte cambios en el codigo trabajado o deprendencias va a volver a ejecutar ese codigo
//comando => npm install -g nodemon