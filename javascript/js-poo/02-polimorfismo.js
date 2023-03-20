// superclass
function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if(this.saldo < valor){
        console.log('Saldo insuficiente');
        this.verSaldo();
        return;       
    }
    this.saldo -= valor;
};

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
};

Conta.prototype.verSaldo = function(){
    console.log(`Ag/c.: ${this.agencia} / ${this.conta}`);
    console.log(`Saldo: ${this.saldo.toFixed(2)}`);
}

/* const conta1 = new Conta(111, 2222, 10);
conta1.depositar(25);
conta1.sacar(50);
console.log(conta1);
conta1.sacar(10)
console.log(conta1);
conta1.verSaldo(); */


function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor){
    if(valor > (this.saldo + this.limite)){
        console.log("Saldo insuficiente");
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};


function ContaPoupanca(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo);
}
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const conta1 = new ContaCorrente(111, 2222, 40, 20)
const conta2 = new ContaPoupanca(333,4444,2000);

conta1.sacar(50);
conta2.sacar(100);
conta2.verSaldo();