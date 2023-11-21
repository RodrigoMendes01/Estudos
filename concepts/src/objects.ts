// TYPE 
// Podemos definir quais propriedades vai ter e os tipos dessas propriedades
// Para valores opcionais pode se usar ? antes dos dois pontos
type User = {
  firsName: string
  lastname?: string
  age: number
  email: string
  password?: string
}

// UNIONS
type Author = {
  books: string[]
}

const author: Author & User = {
  books: ["1", "2", "3"],
  age: 22,
  firsName: "B",
  email: "b"
}

// INTERFACES
interface Person {
  name?: string;
  age?: number
}

function greet(person: Person) {
  return "Hello " + person.name;
}