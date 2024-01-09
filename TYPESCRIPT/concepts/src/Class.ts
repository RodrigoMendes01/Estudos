interface IPeople {
  id: number
  name: string
  age: number
  sayMyName(): string
}

// Podemos tipar oque o constructor vai receber;
// Podemos tipar os métodos; 
// Podemos implementar interfaces nas classes;

// MODIFICADORES
/*
  PUBLIC -> Pode ser acessado tanto pela mesma classe, classes filhas e outras classes;
  PRIVATE -> Pode ser acessada somente pela própria classe;
  PROTECTED -> Pode ser acessado pela mesma classe e classes filhas, não pode ser acessado por outras classes;
  READONLY -> Pode ser acessado fora da classe, mas não é possível alterar o seu valor;
*/

class People implements IPeople {
  id: number
  name: string
  age: number

  constructor(id: number, name: string, age: number) {
    this.id = id
    this.name = name
    this.age = age
  }

  sayMyName(): string {
    return this.name
  }
}