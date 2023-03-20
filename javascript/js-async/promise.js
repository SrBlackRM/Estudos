/* 
Objetivo é fazer com que coisas que não acontecem na hora, pareçam acontecer na hora
com um ordem

a promises tem 3 estados, 
    pending > esta sendo executada
    fullfilled > representação da promise resolvida
    rejected > rejeitada por algum motivo
*/


//exemplo

function esperaTempo(msg, tempo){
    setTimeout(() => {
        console.log(msg);
    }, tempo);
}


function aleatorioTempo(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

//no caso, a ordem vai ser alterada, pois o tempo está aleatório
/* esperaTempo('Frase 1', aleatorioTempo(1, 3));
esperaTempo('Frase 2', aleatorioTempo(1, 3));
esperaTempo('Frase 3', aleatorioTempo(1, 3)); */



//para solucionar, vamos usar uma promise
function esperaTempo(msg, tempo){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

//then sera executado quando a promise for resolvida
//catch sera executado quando a promise for rejeitada
esperaTempo('Frase 1', aleatorioTempo(1, 3))
    .then(resposta => {
    console.log(resposta);
    return esperaTempo('Frase 2', aleatorioTempo(1, 3))
        .then(resposta => {
        console.log(resposta);
        return esperaTempo('Frase 3', aleatorioTempo(1, 3))
            .then(resposta => {
            console.log(resposta);
        });
    });
});


//métodos úteis para promises
//Promise.all Promise.race Promise.resolve Promise.reject

