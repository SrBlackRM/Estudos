class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    // diferente dos objetos feitos pelas funcoes, na classe
    // não precisamos criar os metodos atraves do prototype
    // pois já é criado automaticamente nele

    falar(){
        console.log(`${this.nome} esta falando`);
    }
    comendo(){
        console.log(`${this.nome} esta comendo`);
    }
    bebendo(){
        console.log(`${this.nome} esta bebendo`);
    }
}

const p1 = new Pessoa('michel', 'rodrigues');
console.log(p1);


// exemplo com function

function Pessoa2(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function(){
    console.log(`${this.nome} esta falando`);
}

const p2 = new Pessoa2('michel', 'rodrigues');
console.log(p2);