// fs e path são módulos padrão do node
const fs = require('fs').promises;
const { stat } = require('fs');
const path = require('path');


// le os arquivos presentes na pasta atual
// não usamos o ./ pois se não seria lido todas as pastas mesmo que sem estarem na atual
// para resolver esse problema usamos o path
/* 
fs.readdir(path.resolve(__dirname))
    .then(files => console.log(files))
    .catch(e => console.log(e));
 */


// criamos uma função async pois pode levar um tempo para listar os arquivos da pasta
// essa função espera o parametro rootDir, ou seja, podemos passar um diretorio
// para que seja lido
async function readdir(rootDir){
    // caso não passemos um diretorio, ele vai considerar o diretorio atual usando o path.resolve(__dirname)
    rootDir = rootDir || path.resolve(__dirname);
    
    // criamos uma variavel files que vai conter a lista de arquivos do diretorio
    const files = await fs.readdir(rootDir);

    // enviamos essa lista para a função walk
    walk(files, rootDir);
}

let contagem = 0;
// a função walk vai receber a lista de arquivos e pastas, e o caminho do diretorio
async function walk(files, rootDir){
    // para cada arquivo/pasta da lista
    for(let file of files){
        // vamos pegar o caminho completo do arquivo/pasta especifico
        const fileFullPath = path.resolve(rootDir, file);
        // a função stat coleta dados do arquivo/pasta, nosso interesse é saber se é ou não dir
        // fs.stat() tem um método bool que retorna se é ou não diretorio
        const stats = await fs.stat(fileFullPath);

        // não listar conteudo da pasta especifica
        if( /node_modules/g.test(fileFullPath)) continue;

        // o que for diretorio, ele vai tentar listar o conteudo
        if(stats.isDirectory()){
            readdir(fileFullPath);
            // o continue é para não passar daqui
            continue;
        }

        // exibe o nome do arquivo, se é diretório, conta quantos arquivos foram listados
        console.log(file, stats.isDirectory(), contagem);
        id ++;
    }
}

readdir("C:\\Users\\miche\\OneDrive\\Documentos\\Michel\\Estudos\\javascript\\");