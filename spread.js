// juntar rapidamente dois arrays
let frutas1 =["maça", "banana", "caqui"]
let frutas2 = ["melancia", "melao", "mamão"]

let listaDeFrutas = [...frutas1,...frutas2]
console.log(listaDeFrutas)

//juntar objetos
let pessoa = {
    nome:'Guadalupe',
    idade: 35,
    altura: 1.65}

let endereco = {
    rua:"Logo ali",
    numero: 13,
    bairro: "o de sempre"
}

let infoPessoal = {...pessoa,...endereco}
console.log(infoPessoal)

//spread operator em funções
//não precisa delimitar os parametros da função
function teste (...parametros) {
    return parametros
}

console.log(teste(1,'b','guadalupe'))

//usando um array na função
let numeros = [1,10,40,5,8];
console.log(Math.min(...numeros))

