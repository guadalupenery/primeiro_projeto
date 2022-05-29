//conversão de objeto em string 

const parse = require("nodemon/lib/cli/parse")
const { stringify } = require("nodemon/lib/utils")

let arrayJS = ["teste1","teste2","teste3"]
console.log("array em JavaScript:")
console.log(arrayJS)

let stringJson = JSON.stringify(arrayJS) 
console.log("string em JSON:")
console.log(stringJson)

// conversão de string em objeto/array

let arrayDeNovo = JSON.parse(stringJson)
console.log("array de novo:")
console.log(arrayDeNovo)

//conversão de objeto literal em string
let objetoJS = {nome:"teste1",
    idade:15,
    ocupacao: "estudante"}
console.log("Objeto literal em JavaScript:")
console.log(objetoJS)

stringJson = JSON.stringify(objetoJS) 
console.log("string em JSON:")
console.log(stringJson)