function saludo(nombre, miCallback){
    setTimeout(() => {
        console.log('hola ',nombre)
        miCallback(nombre)
    }, 1000);
}

function despedida(nombre, otroCallback){
    setTimeout(() => {
        otroCallback()
        console.log('adios', nombre)
    }, 1000);
}

saludo('Jesus', function (nombre) {
    despedida(nombre, function(){
        console.log('Proceso de ejecucion')
    })
});