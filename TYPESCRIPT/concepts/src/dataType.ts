// NUMBER
// Para representar números, sejam eles inteiros ou de ponto flutuante.
const number: number  = 10

/* ---------------------------------------------------- */

// STRING
// Para representar sequências de caracteres.
const string: string = "Qualquer coisa"

/* ---------------------------------------------------- */

// BOOLEAN
// Para representar valores true ou false.
const bool: boolean = true

/* ---------------------------------------------------- */

// NULL & UNDEFINED
// Para representar valores nulos ou não definidos.
const nul: null = null
const unde: undefined = undefined

/* ---------------------------------------------------- */

// ANY
// Para representar qualquer tipo de dado.
const anyThing: any = false

/* ---------------------------------------------------- */

// VOID
// Para representar a ausência de um valor.
function vod(message: string) {
  console.log(message)
} // essa funçao retorna um void por falta do return nela.

/* ---------------------------------------------------- */

// OBJECT
// Para representar um tipo de objeto.
const obj: {type: string, model: string, year: number} = {
  type: "Toyota",
  model: "Corollla",
  year: 2009
}

/* ---------------------------------------------------- */

// ARRAY
// Para representar um array de valores de um determinado tipo.
const arr: string[] = ["Apple", "Orange"]

/* ---------------------------------------------------- */

// Tuple
// Para representar uma matriz com um número fixo de elementos, em que cada elemento pode ter um tipo diferente.
const tuple: [string, number, string] = ["Joao", 22, "joao@mail.com"]

/* ---------------------------------------------------- */

// Enum
// Para representar um conjunto de valores nomeados.
// usa a palavra reservada enum 
enum Direction {
  Up = 1,
  Down = 0,
  Left = "esquerda",
  Right = "direita" 
}

const up = Direction.Up // console.log(1)

/* ---------------------------------------------------- */

// Union Types
// Para representar um tipo que pode ter um dos vários tipos possíveis.
const maybe : string | number = 10 //ou poderia ser uma string

/* ---------------------------------------------------- */

// Intersection Types
// Para representar um tipo que é a combinação de dois ou mais tipos diferentes.

/* ---------------------------------------------------- */

// Type Aliases
// Para criar um novo nome para um tipo existente.