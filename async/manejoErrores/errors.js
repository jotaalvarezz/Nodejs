const { error } = require("console");

function serompe(){
    return z + 3
}

//Manejo de errores con funciones asincronas

async function serompe2(callback){
    setInterval(() => {
        try {
            return z+3
        } catch (error) {
            callback(error)
        }   
    }, 5000);
}

try {
    serompe2((error) => {
        console.log(error.message)
    });
} catch(error) {
    console.log('el error es: ',error.message)
} 

