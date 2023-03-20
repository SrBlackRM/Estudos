const path = require('path');
// filePath é o caminho onde desejamos escrever o arquivo, no caso 'teste.txt'
const filePath = path.resolve(__dirname, 'teste.txt');
const write = require('./modules/write');
const read = require('./modules/read');

// crio um objeto pessoas que será convertido em JSON
const pessoas = [
    { nome: 'michel', email: 'michel@gmail.com' },
    { nome: 'jade', email: 'jade@gmail.com' },
    { nome: 'simone', email: 'simone@gmail.com' },
    { nome: 'mauro', email: 'mauro@gmail.com' },
    { nome: 'arthur', email: 'arthur@gmail.com '}
];

// transformo o objeto acima em um objeto JSON com identação
const data = JSON.stringify(pessoas, '', 2);

// escreve os dados já convertidos no arquivo 'teste.txt'
write(filePath, data);
// por ser uma promise, usamos o then na função read para poder exibir os dados
read(filePath)
    .then(data => console.log(data));