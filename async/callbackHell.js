function saludo(nombre, miCallback){
    setTimeout(() => {
        console.log('hola ',nombre)
        miCallback(nombre)
    }, 1000);
}

function despedida(nombre, callbackDespedida){
    setTimeout(() => {
        console.log('adios', nombre)
        callbackDespedida()
    }, 1000);
}

function hablar(callbackHablar){
    setTimeout(() => {
        console.log('Bla Bla Bla...')
        callbackHablar()
    }, 1000);
}

function conversacion(nombre, veces, callbackConversacion){
    if(veces > 0){
        hablar(function name() {
            conversacion(nombre, --veces, callbackConversacion)
        })
    }else{
        despedida(nombre, callbackConversacion)
    }
}



saludo('Jesus', function(nombre){
    conversacion(nombre, 10, function name() {
        console.log('Final...')
    })
})