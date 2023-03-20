// fetch para buscar os dados do json
/* fetch('./json/pessoas.json')
    // converte para um objeto javascript o objeto json, retorna uma nova promise
    .then(resp => resp.json())
    // pega o objeto convertido e manda para a função que vai tratar os dados
    .then(json => carregaElementosNaPagina(json)); */

axios('./json/pessoas.json')
    .then(resp => carregaElementosNaPagina(resp.data));

// essa função é simplesmente para carregar os elementos do objeto na página
function carregaElementosNaPagina(json){
    // seleciona a div que vamos plotar a tabela
    const divResultado = document.querySelector('.dados-list');

    // crio a tabela
    const table = document.createElement('table');

    // para cada elemento do objeto
    for(let pessoa of json){
        // criamos uma table row
        const tr = document.createElement('tr');
        
        // uma table data
        let td = document.createElement('td');
        // mudamos o conteudo do table data para o nome do objeto
        td.innerHTML = pessoa.nome;
        //adicionamos a dado a linha
        tr.appendChild(td);

        // feito da mesma forma que acima para os demais dados, usando a mesmo linha
        // para fazer a adição
        td = document.createElement('td');
        td.innerHTML = pessoa.email;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = pessoa.empresa;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = pessoa.salario;
        tr.appendChild(td);

        // por fim, adiciona a linha na tabela
        table.appendChild(tr);
    }

    // adiciona a tabela na div selecionada inicialmente
    divResultado.appendChild(table);
}