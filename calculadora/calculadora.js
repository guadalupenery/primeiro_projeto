// chamando as outras funções

const dividir = require('./dividir.js')
const multiplicar = require('./multiplicar.js')
const somar = require ('./somar.js')
const subtrair = require('./subtrair.js')

//excecutando a função invocada
let resultadoSoma = somar (1,4)
let resultadoSubtracao = subtrair (5,13)
let resultadoDivisao = dividir (6,0)
let resultadoMultiplicacao = multiplicar (4,0)

//imprimindo os resultados
console.log ("Resultado soma: " +resultadoSoma)
console.log ("Resultado subtração: " + resultadoSubtracao)
console.log ("Resultado divisão por zero: " + resultadoDivisao)
resultadoDivisao = dividir (5,4)
console.log ("Resultado divisão: " + resultadoDivisao)
console.log ("Resultado multiplicação por zero: " + resultadoMultiplicacao)
resultadoMultiplicacao = multiplicar (4,5)
console.log ("Resultado multiplicação: " + resultadoMultiplicacao)


