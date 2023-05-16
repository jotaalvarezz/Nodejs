
const {exec, spawn} = require('child_process');

/* exec('dir', (err, stdout, sterr) => {
    if(err){
        console.error(err.message)
        return false;
    }
    console.log(stdout)
}) */

let proceso = spawn('Dir');

//console.log(proceso)

proceso.stdout.on('data', (data) => {
    console.log(data)
})
