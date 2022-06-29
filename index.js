//importação de arquivo de texto e instalação de módulos nativos

const fs = require('fs');
const path = require ('path');
let test = fs.readFileSync(path.join(__dirname, 'dados.txt'),'utf8')
console.log (test)