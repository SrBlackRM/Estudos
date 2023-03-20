// Asynchronous JavasSript and XML - Ajax
// atraves da função XMLHttpRequest podemos fazer a pesquisa de qualquer tipo de dados

const request = obj => {
    // xml http request -> usualmente chamado de xhr
    // o método open recebe 3 parametros
    // o primeiro é o método http que usaremos para fazer o request
    // o segundo é a url
    // o terceiro é se é async ou sync (async - trye, sync - false)
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);

    // se fosse método Post, precisaria ser enviado os dados como parametros
    xhr.send();

    // vamos colocar um listener para quando for carregado o xhr, ou seja, a response
    xhr.addEventListener('load', () => {
        // se o status (código da resposta) estiver entre 200 e 300, significa que a requi
        // sição foi aceita com sucesso e retornada a reposta pelo servidor
        if(xhr.status >= 200 && xhr.status < 300){
            obj.success(xhr.responseText);
        } else {
            obj.error({
                code: xhr.status,
                msg: xhr.statusText,
            });
        }
    });
};

// função para carregar a página depois de clicado no link
function carregaPagina(el){
    const href = el.getAttribute('href');
    request({
        method: 'GET',
        url: href,
        
        success(response){
            carregaResultado(response);
        },

        error(errorText){
            console.log(errorText);
        }
    })
}


function carregaResultado(response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}

// vamos colocar um listener no document inteiro e filtrar os clicks
// caso o click venha de uma tag a, vamos previnir que redirecione com o preventDefault
// e chamar a função que vai carregar a nova página da forma que acharmos melhor
document.addEventListener('click', e =>{
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    if(tag === 'a'){
        e.preventDefault();
        carregaPagina(el);
    }
})

