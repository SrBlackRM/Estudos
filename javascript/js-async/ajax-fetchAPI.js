// diferente do XMLHttpRequest, o fetch por padrão já retorna uma promise

fetch('ajax-pag1.html').then(resp => {
    // sempre que se está dentro de um then e lança um erro, faz automaticamente
    // o código ir para o catch
    if(resp.status !== 200) throw new Error('ERRO 404');
    return resp.text();
}).then(html => console.log(html)).catch(e => console.error(e));

// sem async e await
/* function carregaPagina(el){
    const href = el.getAttribute('href');
    fetch(href)
    .then(resp => {
        if(resp.status !== 200) throw new Error('Erro 404!');
        return resp.text();
    })
    .then(html => carregaResultado(html))
    .catch(e => console.log(e));
} */

//com async e await
async function carregaPagina(el){
    try{
        const href = el.getAttribute('href');
        const response = await fetch(href);
        if(response.status !== 200) throw new Error('ERRO 404!');
        const html = await response.text();
        carregaResultado(html);
    }
    catch(e){
        console.error('ERRO 404!');
    }
}

function carregaResultado(resp){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = resp;
}

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    if(tag === 'a'){
        e.preventDefault();
        carregaPagina(el);
    }
});