const fs = require('fs/promises');

async function leer(){
    try {
        const data = await fs.readFile('archivo.txt', { encoding: 'utf8' })
        console.log(data)
    } catch(error) {
        console.log(error)
    }
}

function escribir(content){
    let info = content.split(' ').join(';')
    fs.writeFile('archivo.txt', info+'\n', {flag:'a+'}, (err) => {
        console.error(err)
    })
}

function borrarArchivo(){
    fs.unlink('archivo.txt',(err) => {
        console.log(err)
    })
}
leer()
/* escribir('Nueva linea') */
/* 
borrarArchivo() */