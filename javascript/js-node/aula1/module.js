/* 
const nome = 'Michel';
const sobrenome = ' R Mota';
const falaNome = () => nome + sobrenome;

// 3 formas diferentes de expotar
exports.nome = nome;
this.sobrenome = sobrenome;
module.exports.falaNome = falaNome;

console.log(module.exports);
*/

class Pessoa{
    constructor(nome){
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa;