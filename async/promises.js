function saludo(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Hola ", nombre);
      resolve(nombre);
    }, 1000);
  });
}

function proceso(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('EN EJECUCION:',nombre);
      resolve()
    }, 1000);
  });
}

function adios(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('adios',nombre)
            resolve()
        }, 1000);
    })
}

console.log("EJECUTAR!");
saludo("jesus")
    .then(proceso('FORMATEAR'))
    .then(adios)
    .then((nombre) => {
    console.log("EJECUTADO!");
    })
