// DESESTRUTURACAO

// As variaveis que vao receber as propriedades devem ter o mesmo nome das propriedades
// Pegamos as propriedades de um objeto e salvamos em variaveis
// Para renomear uma variavel que esta recebendo a propriedade, basta usar : (dois pontos) EX: const {lastName: last_name} = users - somente em objetos

const users = {
  name : 'Rodrigo',
  lastName: 'Mendes',
  age: 22,
  skills: ['Back-end', 'Front-end']
}

const {name, lastName, age} = users // para objetos se usa {} chaves
const [position0, postion1] = users.skills // para arrays se usa [] colchetes

console.log(`My name is ${name}, Im ${age} years old and i work with ${position0} & ${postion1}`)