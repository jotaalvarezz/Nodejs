//const window = require()

function conexion(){
    window.addEventListener('online',function (){
       console.log('conectado') 
    });
     
    window.addEventListener('offline',function (){
        console.log('desconectado') 
     });
}

conexion()