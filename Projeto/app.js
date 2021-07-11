const livros = require('./database')

// pegar o input

const readline = require('readline-sync')
const entrada = readline.question('Deseja buscar um livro? S/N: ')

// se for sim, mostra os gêneros disponíveis e pergunta qual a pessoa escolhe
//se for não, mostra todos os livros pela quantidade crescente de páginas

if (entrada.toLocaleUpperCase() === 'S') {
    console.log('Esses são os gêneros disponíveis: ')
    console.log("Ficção", "Suspense", "Terror", "Auto-Ajuda", "Não-Ficção")

    const entradaGenero = readline.question('Qual gênero você escolhe? ')

    const retorno = livros.filter(livro => livro.genero === entradaGenero)

    console.table(retorno)
} else {
    const livrosEmOrdem = livros.sort((a, b) => a.paginas - b.paginas)

    console.log("Esses são todos os livros disponíveis: ")

    console.table(livrosEmOrdem)
}