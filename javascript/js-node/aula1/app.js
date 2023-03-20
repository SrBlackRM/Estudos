// const mod1 = require('./module');
// const falaNome = mod1.falaNome;
/* 
const { nome, sobrenome, falaNome } = require('./module');

console.log(falaNome()) */

const { Pessoa } = require('./module');
const path = require('path');
const axios = require('axios');

/* const p1 = new Pessoa('Michel');

console.log(p1); */

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
    .then(resp => console.log(resp.data))
    .catch(e => console.log(e));


// para iniciar o node, na pasta do projeto abra o terminal
// $ npm init -y

// para instalar modulos, no caso instalamos axios
// $ npm i axios