const _volume = Symbol('volume');
class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this[_volume] = 10;
    }

    get volume(){
        return this[_volume];
    }

    set volume(valor){
        if(typeof valor !== 'number') return;
        if(valor >= 20 || valor <= 0) return;
        this[_volume] = valor;
    }

    // Métodos de instância
    aumentarVolume(){
        if(this.volume >= 20) return;
        this[_volume] += 2;
    }
    diminuirVolume(){
        if(this.volume <= 0) return;
        this[_volume] -= 2;
    }

    // Método estático
    static trocaPilha(){
        console.log('Ok, vou trocar.');
    }
}

const controle1 = new ControleRemoto('LG');
// controle1.trocaPilha(); // errado
ControleRemoto.trocaPilha(controle1); // certo
console.log(controle1);