function adicionarFilme (codigofilme,titulofilme,duracaofilme, atoresfilme, anoDeLancamentofilme, emCartazfilme) {
    const filme ={
        codigo: codigofilme,
        titulo: titulofilme,
        duracao:duracaofilme,
        atores: atoresfilme,
        anoDeLancamento: anoDeLancamentofilme,
        emCartaz: emCartazfilme
    }
    return filme
}

module.exports = adicionarFilme