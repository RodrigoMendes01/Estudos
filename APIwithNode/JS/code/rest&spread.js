// REST OPERATOR (resto)

// Se usa ... e o nome da variavel que voce deseja armazenar o 'resto' 
// Deve ser a ultima variavel na desestruturacao

const users = {
  name : 'Rodrigo',
  lastName: 'Mendes',
  age: 22,
  skills: ['Back-end', 'Front-end']
}

const {name, ...rest} = users

//----->console.log(name, rest)

/*---------------------------------------------------------------------*/

// SPREAD OPERATOR (espalhar)

//Usado para imutabilidade -> (nunca mexer em um dado original e sim em uma copia dele)
//Não precisa ser posicionado no final como o rest operator

const data = {
  name : 'Rodrigo',
  lastName: 'Mendes',
  age: 22,
  skills: ['Back-end', 'Front-end'],
  active: false
}

//----->console.log(data)

const newData = {
  ...data, // copia do data
  active: true // ultima propriedade active que prevaleceu
}

// Em objetos, se tiver duas propriedades de nomes iguais, a ultima propriedade que vai prevalecer

//----->console.log(newData)

/*---------------------------------------------------------------------*/