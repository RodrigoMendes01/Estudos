// ES MODULES import/export

//Uma forma diferente de importar e exportar modulos ECMASCRIPT 6
//Para se usar há algumas formas (mudando o nome dos arquivos para .mjs) ou (criando um package.json e dentro criar um objeto com a propriedade "type": "module")
//Para exportacoes com o nome original se usa export {nome-module}
// Para renomear importacoes nomeadas pode se usar (as)

import sayHello from "./sayHello.js";

sayHello('Rodrigo')

