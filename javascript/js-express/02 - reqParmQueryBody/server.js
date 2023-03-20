const express = require('express');
const app = express();

// metodo GET
// http://site.com/users/12345?campanha=googleads&nome_campanha=seila
// 12345 é um parametro
// ?campanha e &nome_campanha são query e seu valor é googleads


// metodo POST
//

app.get('/teste/:idUsers?', (req, res)=>{
    const params = req.params;
    const query = req.query;
    res.send(`${params} ${query}`);
});


// listen recebe a porta que ficara escutando, e uma função callback
app.listen(3000, () => {
    console.log("Acessar: http://localhost:3000")
    console.log("Servidor executando na porta: 3000")
});


// EXTRA
// podemos atualizar automaticamente o servidor sempre que algo for modificado usando o nodemon
// para isso, instalaremos ele como DevDependence
// no package.json mudamos o script start de node, para nodemon
// para iniciar, usamos o npm start
// ou manualmente usamos o npx nodemon server.js