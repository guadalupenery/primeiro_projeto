// aula de métodos de strings - funções
let frase = "estudando JavaScript em 2022"

//LENGTH tamanho da cadeia de texto
console.log(frase.length)

//INDEXOF busca do primeiro caracter na string
console.log(frase.indexOf("Java"))
//se não encontrar retorna -1
console.log(frase.indexOf("eu"))

//SLICE retorna o texto dentro dos limites especificados por suas respectivas posições de início e final
console.log(frase.slice(10,20))

// combinando funções
console.log(frase.slice(frase.indexOf("Java"),frase.length))

// TRIM retira espaços do começo e do final da frase
let test= "  testando o trim   "
console.log(test.trim())

//SPLIT gera um array a partir de uma string
console.log(frase.split()) //um único array com toda a string
console.log(frase.split(' '))//espaços para dividir a string
console.log(frase.split('a'))//letra "a" como divisor da string, não incluirá  mais a letra "a"

//REPLACE subtituir um valor dentro da string
console.log(frase.replace(' ','-'))//sbstitui apenas a primeira ocorrência dentro da string
console.log(frase.replace("2022","2021"))//não altera o valor da variavel original
console.log(frase)
