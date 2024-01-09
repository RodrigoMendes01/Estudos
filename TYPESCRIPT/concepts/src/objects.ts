// TYPE 
// Podemos definir quais propriedades vai ter e os tipos dessas propriedades
// Para valores opcionais pode se usar ? antes dos dois pontos

/*
  1 - Permitem intersections e unions
*/

type User = {
  firsName: string
  lastname?: string
  age: number
  email: string
  password?: string
}

// Segue fielmente ao type User

const user: User = {
  firsName: 'Rodrigo',
  lastname: 'Mendes',
  age: 22,
  email: 'rodrigo@mail.com',
  password: '123123'
}

/* ---------------------------------------------------- */

// UNIONS
// Podemos usar & para unirmos dois type ou mais;
type Author = {
  books: string[]
}

const author: Author & User = {
  books: ["1", "2", "3"],
  age: 22,
  firsName: "B",
  email: "b"
}

// author vai ter todas as chaves de ambos os types -> Author e User

/* ---------------------------------------------------- */

// INTERFACES
// São bem parecidas com os types, porém possuem pequenas diferenças;

/*
  1 - Podem ser implementadas por classes
  2 - São extensíveis
  3 - Permitem declaration merging
  4 - Permite somente unions
*/

interface Person {
  name?: string;
  readonly age?: number
}

function greet(person: Person) {
  return "Hello " + person.name;
}