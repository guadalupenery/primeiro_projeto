// desestruturando uma array
let destinosIncriveis = ['Marrocos', 'Bariloche', 'Barcelona', 'China', 'Grecia'];

let [, bariloche, , china,] = destinosIncriveis
console.log(bariloche)
console.log(china)

//desestruturanco um objeto

let pessoa = {
    nome:'Guadalupe',
    idade: 35,
    altura: 1.65}

let {nome,idade} =pessoa
console.log("a idade de "+nome+" é "+idade+" anos.")