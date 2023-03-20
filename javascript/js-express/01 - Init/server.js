const express = require('express');
const app = express();

//         criar   ler   editar  apagar
// CRUD -> CREATE, READ, UPDATE, DELETE
//         POST    GET   PUT     DELETE

// ROTAS
// http://meusite.com/ <- GET -> entregue a página
// http://meusite.com/contato <- GET -> entregue a página
// http://meusite.com/contato/envia <- POST -> envia dados
// http://meusite.com/sobre <- GET -> entregue a página


// metodo get
// primeiro parametro é a rota
// segundo paramentro é uma função que vai receber um request e uma response
app.get('/', (req, res)=>{
    res.send(`
    <form action="/" method="POST">
    nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `);
});

// metodo post
app.post('/', (req, res)=>{
    res.send(`recebi o formulário`);
})

app.get('/contato', (req, res)=>{
    res.send('obrigado por entrar em contato.');
})



// listen recebe a porta que ficara escutando, e uma função callback
app.listen(3000, () => {
    console.log("Acessar: http://localhost:3000")
    console.log("Servidor executando na porta: 3000")
});