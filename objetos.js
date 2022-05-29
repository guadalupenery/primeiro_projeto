// aula objetos literais e suas funções
var pais = {
    nome: "Brasil",
    populacao: 200000000,
    capital: "Brasilia",
    nacionalidade: function() {
        return "Sou do " + this.nome
    },
}
console.log(pais)

//imprimindo as propriedades de um objeto
console.log(pais.nome)// sintaxe com ponto
console.log(pais["capital"]) // com o nome da propriedade, deve escrever corretamente a propriedade

console.log(pais.nacionalidade()) //imprimindo a função nacionalidade


