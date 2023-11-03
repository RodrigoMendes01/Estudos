// PROMISES

//Usada para coisas que vao levar mais tempo para serem resolvidas (CALLSTACK NODE)
//Query no banco de dados, chamadas de API
// Possui 3 estados (PENDING, FULFILLED, REJECT)

const apiCall = new Promise((resolve, reject) => {
  setTimeout(() => {
    //----->resolve('Sucesso!')

    reject('ERROR!')
  }, 2000)
})

//Pode ter duas formas de capturar as respostas : then/catch

// apiCall
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error))

/*---------------------------------------------------------------------*/

// ASYNC & AWAIT

async function run () {
  try {
    const response = await apiCall
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

run()

// Pode ser usado com try / catch ----> Tente pegar
// Se a promise retornar a resposta/dado o try pega e para a execucao, mas se retornar um erro o catch pega.

// A diferenca do .then/.catch e async/await é a questao de que o .then nao para o codigo, oque estiver depois do .then vai ser executado ate que a promise devolva uma reposta