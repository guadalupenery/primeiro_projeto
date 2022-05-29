//chamando as funções que foram criadas

const adicionarFilme = require ('./adicionarFilme')

const catalogo = [
    {
        codigo:01,
        titulo: "4 vidas de um cachorro",
        duracao: 120,
        atores: ["ator1", "ator2", "ator3"],
        anoDeLancamento: 2015,
        emCartaz: true},
    {
        codigo:02,
        titulo: "uma linda mulher",
        duracao: 120,
        atores: ["ator4", "ator5", "ator6"],
        anoDeLancamento: 1986,
        emCartaz: false}
    ]


console.log(catalogo[0].atores[0]) //imprimindo a primeira posição da propriedade atores do primeiro filme (posição de uma array dentro de um objeto dentro de uma array) 
//catalogo.push(filme2);

console.log("antes de inserir:")// imprimindo toda a array de objetos 
console.log (catalogo)
//function adicionarFilme (codigo, titulo, duracao, atores, anoDeLancamento, emCartaz) {
//    catalogo[]  
//}
const novoFilme = adicionarFilme (4,"Mostro SA",1.45,['ator7','ator8','ator9','ator10'],2001,false)
catalogo.push (novoFilme)
console.log ("depois de inserir:")
console.log (catalogo)
console.log ("------------------------------- buscar filme")

function buscarFilme (identificador) {
 for (var i = 0; i < catalogo.length ; i++){
     if (catalogo[i].codigo == identificador){
        console.log(catalogo[i])
     }
     }
} 

buscarFilme(2)

console.log ("------------------------------- alterar cartaz")
function alterarEmCartaz (identificador) {
    for (var i=0; i < catalogo.length; i++) {
        if (catalogo[i].codigo==identificador){
            if (catalogo[i].emCartaz) {
                catalogo[i].emCartaz = false
                console.log(catalogo[i])
            } else {
                catalogo[i].emCartaz = true
                console.log(catalogo[i])
            }
        }
    }
}

alterarEmCartaz (2)
