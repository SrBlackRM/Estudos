// podemos instalar pacotes através do npm
// com o comando npm i 'nome_pacote'

// no arquivo package.json, temos informações sobre o projeto
// nessas informações, encontramos a chave de dependencias

// podemos alterar em qual tipo de dependencia, dev ou prod, um pacote será instalado
// com o comando npm i 'nome_pacote' --save-dev || --save-prod

// podemos instalar uma versão especifica de pacote usando o @
// exemplo 
// npm i 'nome_pacote'@2.1.0
// npm i 'nome_pacote'@2.x     instala qualquer versão do minor

// a sequencia 2.1.0 significa:
// 2.       1.       0
// major    minor    patch

// patch para atualizações de correção de bugs
// minor é quando recurso novo é adicionado
// major é quando quebra compatibilidade com as versões anteriores

// podemos listar os pacotes instalados com o npm ls
// se um pacote possui outras dependencias elas também serão listadas
// para não lista-las, usamos o comando
// npm ls --depth=0
// ou caso queiramos ver uma pasta a mais
// npm ls --depth=1

// para ver se existem pacotes desatualizados, usamos o npm outdated
// para atualizar, npm update

// para desinstalar uninstall