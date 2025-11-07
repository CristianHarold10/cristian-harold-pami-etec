// Criar interface

// Objeto
exibirLivro({ titulo: 'O Alienista', autor: 'Machado de Assis', anoPublicacao: 1882 });

// Função que exibe o Livro
function exibirLivro(usuario) {
    console.log("T\u00EDtulo: ".concat(usuario.titulo));
    console.log("Autor: ".concat(usuario.autor));
    console.log("Ano de Publica\u00E7\u00E3o: ".concat(usuario.anoPublicacao));
}