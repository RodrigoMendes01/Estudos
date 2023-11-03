const array = [
  { name: 'Iphone', price: 5000, quantity: 2 },
  { name: 'Samsung', price: 3000, quantity: 3 },
  { name: 'Notebook', price: 5000, quantity: 1 }
]

// .find

//Vai buscar dentro do array algo
//Sempre retorna o primeiro elemento que retornar true

const find = array.find((product) => {
  return product.name === 'Iphone'
})

//----->console.log({find})

/*---------------------------------------------------------------------*/

// .findIndex

// Retorna em qual posicao o item está (seu index)
//Sempre retorna o primeiro elemento que retornar true

const findIndex = array.findIndex((product) => {
  return product.price > 3000
})

//----->console.log({findIndex})

/*---------------------------------------------------------------------*/

// .some

//Verifica e retorna algum elemento retorna true para a condicao
//Retorna true or false

const some = array.some((product) => {
  return product.price < 1000
})

//----->console.log(some)

/*---------------------------------------------------------------------*/

// .every

//Verifica se todos os elementos cumprem com a condicao imposta
//Retorna true or false

const every = array.every((product) => {
  return product.price > 1000
})

//----->console.log(every)

/*---------------------------------------------------------------------*/

// .map

// Cria um novo array com a condicoes que queremos e adiconar novas coisas
// Retorno é sempre um novo array com a mesma quantidade de elementos do array base

const map = array.map((product) => {
  return {
    ...product,
    subtotal: product.quantity * product.price
  }
})

//----->console.log(map)

/*---------------------------------------------------------------------*/

// .filter

// Filtra de acordo com a condicao e gera  um novo array
//

const filter = array.filter((product) => {
  return product.quantity > 1
})

//----->console.log({filter})

/*---------------------------------------------------------------------*/

// .reduce 

// recebe uma funcao com dois parametros e o valor inical
// recebe dois parametros (accumulator, product)
// accumulator é uma variavel que acumula a cada iteracao, comeca com 0

const reduce = array.reduce((accumulator, product) => {
  return accumulator + (product.price * product.quantity)
}, 0)

//----->console.log({reduce})

/*---------------------------------------------------------------------*/