async function saludo(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("hola", name);
      resolve(name);
    }, 1000);
  });
}

async function proceso() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("PROCESO EN EJECUCION...");
      resolve();
    }, 1000);
  });
}

async function despedida(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('adios',name)
        resolve()
    }, 1000);
  });
}

async function main() {
  let name = await saludo("jesus");
  await proceso();
  await proceso();
  await proceso();
  await proceso();
  await despedida(name);
}

main();
