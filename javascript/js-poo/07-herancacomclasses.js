class DispositivoEletronico {
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado) return;
        this.ligado = true;
    }

    desligar(){
        if(!this.ligado) return;
        this.ligado = false;
    }
}


/* const d1 = new DispositivoEletronico('relogio')
d1.ligar();
console.log(d1.ligado); */


class Smartphone extends DispositivoEletronico{
    constructor(nome, cor){
        super(nome);
        this.cor = cor;
    }
}

const s1 = new Smartphone('iPhone', 'preto');
console.log(s1);