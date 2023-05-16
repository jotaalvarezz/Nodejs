const isOdd = require('is-odd')


function numImpar(num){
    if(isOdd(num)){
        console.log('el numero ',num,' es impar')
    }else{
        console.log('el numero ',num,' es par')
    }
}

export default numImpar;