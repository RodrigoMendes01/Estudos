//declarada com a palavra reservada function
//se nao retornar nada, por padráo é undefined e se retornar, assume o tipo de dado retornado
// function criada com a palavra reservada tem seu proprio this.

function myFunction () {
  this.name = 'Rodrigo'
} 

//----->myFunction()

//----->console.log(new myFunction)

/*---------------------------------------------------------------------*/

//deve ser declarada em uma váriavel
//pode ser omitido o return em caso de escrita em uma linha e se for mais que uma, envolver por parenteses o corpo da funcao
// pode omitir o parenteses do parametro se houver somente um
// arrow function herdam o this de onde ela foi criada (escopos) e tambem a variavel arguments

const myFunctionTwo = () => {
  this.name = 'Rodrigo'
}

//----->myFunctionTwo()

//----->console.log(this)

/*---------------------------------------------------------------------*/

// PARAMETRO NA FUNCAO ---> (VARIALVEL ARGUMENTS) (REST OPERATOR)

function somaVar() {
  console.log(Object.values(arguments))
}

//----->somaVar(0, 1, 2, 3, 4, 5, 6, 7)  

/*---------------------------------------------------------------------*/

function somaRest(...arguments) {
  console.log(arguments)
} 

//----->somaRest(0, 1, 2, 3, 4, 5, 6, 7)

/*---------------------------------------------------------------------*/

// PARAMETROS PADRAO FUNCAO

//se for definido um parametro e na execucao da funcao nao ser passado nada, vai retornar undefined
//o parametro pode receber um valor padrao caso nao seja informado nada e ele assumira esse valor pre defindo

function printGreetings(message = 'Mensagem padrao') {
  console.log(message)
}

//----->printGreetings('Seja muito bem-vindo')

/*---------------------------------------------------------------------*/