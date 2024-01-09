// GENERICS
// Uma forma de passar tipos como paramêtros, tornando a tipagem de funções e váriavéis mais dinamicas;

function rtn<T>(value: T): T {
  return value
}

const output = rtn('olá')