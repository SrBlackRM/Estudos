// async e await é usado na função, para determinar que essa função vai funcionar "separado" do resto do código, pois é uma promise

function aleatorioTempo(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}


function esperaTempo(msg, tempo){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}


// ao determinar que a função é assincrona, podemos usar o await para "pausar" o código até que a promise seja resolvida
async function executa(){
    const fase1 = await esperaTempo('Fase 1', aleatorioTempo(1,5));
    console.log(fase1);
    const fase2 = await esperaTempo('Fase 2', aleatorioTempo(1,5));
    console.log(fase2);
    const fase3 = await esperaTempo('Fase 3', aleatorioTempo(1,5));
    console.log(fase3);
}

executa();