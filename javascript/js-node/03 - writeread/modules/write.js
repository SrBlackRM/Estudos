// fs para trabalhar com arquivos por padrão
const fs = require('fs').promises;

// 'module.exports =' significa que estamos exportando a função diretamente
module.exports = (filePath, data) => {
    // a função writeFile do fs, recebe 3 argumentos
    // o caminho: filePath
    // o conteudo: nesse caso data
    // um objeto com flags
    // a função write vai sempre sobreescrever o conteudo do arquivo caso ele já exista
    fs.writeFile(filePath, data, { flag: 'w', encoding: 'utf-8' });
}

// para acrescentar conteudos a um arquivo, usamos a flag 'a', invés de 'w'
// fs.writeFile(filePath, data, {flag: 'a', encoding: 'utf-8' });
// por padrão a função não quebra linha, então podemos usar o \n na string do data para pular
