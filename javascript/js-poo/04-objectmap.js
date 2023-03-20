const pessoas = [
    { id: 1, nome: 'michel'},
    { id: 2, nome: 'jade'},
    { id: 3, nome: 'simone'},
    { id: 4, nome: 'mauro'},
];


const novasPessoas = {};
for (const pessoa of pessoas){
    const { id } = pessoa;
    novasPessoas[id] = { ...pessoa };
}

console.log(novasPessoas);