<h2>Additional informations to study &#128218</h2>
<h3>REACT HOOKS &#128204</h3>
<div>
  <h4>O quê são HOOKS?</h4>
  <p>os hooks são apenas funções JavaScript (que sempre 
    começam com a palavra use) e a grande diferença é que estas funções nos permitem usar funcionalidades que 
    antes existiam apenas em classes - como states e lifecycles - agora também 
    em componentes funcionais
  </p>
  <hr>
  <p>
    Três características importantes que precisamos saber sobre os hooks são: 
    primeiro, que eles funcionam apenas em componentes funcionais, segundo, que 
    eles devem ser invocados sempre no escopo principal do seu componente (fora 
    de ifs e functions, por exemplo) e terceiro, que eles não podem estar atrelados a 
    nenhuma condicional para serem executados
  </p>
</div>

<div align="center">
  <strong>&#128681 useState</strong>
  <strong>&#128681 useEffect</strong>
  <strong>&#128681 useContext</strong>
  <strong>&#128681 useReducer</strong>
  <strong>&#128681 useCallback</strong>
  <strong>&#128681 useMemo</strong>
  <strong>&#128681 useRef</strong>
  <strong>&#128681 useImperativeHandle</strong>
  <strong>&#128681 useLayoutEffect</strong>
  <strong>&#128681 Custom Hooks</strong>
  <strong>&#128681 useDebugValue</strong>
</div>
<hr>
<h2>&#128308 useState</h2>
<p>A função useState recebe um parâmetro (o valor inicial do estado ou uma função 
que retorna este valor) e retorna um array com duas posições, sendo a primeira 
delas o valor do estado e a segunda uma função que será responsável por alterar 
o valor deste estado</p>

<p>
  Uma característica deste hook é que podemos, na função que atualiza o state, enviar uma função como argumento e nesta 
função, capturar o valor atual do state (prevState) e
  está funcionalidade é muito útil quando precisamos atualizar um estado baseado 
em seu valor anterior (principalmente em hooks com arrays de dependência)
</p>
<hr>
<h2>&#128308 useEffect</h2>
<p>
  O useEffect também é uma função, porém, diferente do useState, esta não 
retorna nenhum valor, precisamos apenas invocá-la no corpo do componente.
É um bom lugar para fazer requisições à APIs.
</p>
<p>
  Seu uso é muito simples: ele recebe apenas dois parâmetros: uma função de 
efeito, e um array de dependências que pode receber variáveis ou funções e 
sempre que o valor de uma dessas variáveis sofre uma alteração ou uma das 
função deste array é remontada a função de efeito (primeiro parâmetro) é 
executada novamente.
</p>
<p>
  Vale lembrar também que toda função e variável (state, prop, ou definida no corpo 
do componente) que estiver sendo usada dentro da função de efeito deve estar 
listada no array de dependências.
  Uma outra característica do useEffect é que sua função de efeito não pode ser 
uma async function, para isso, (basta criar uma função dentro do useEffect)
</p>
<hr>
