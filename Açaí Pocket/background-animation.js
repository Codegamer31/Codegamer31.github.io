// seleciona o corpo (body)
const body = document.querySelector('body');

// gera um número aleatório entre -100 e 100 para a posição de fundo x e y
const x = Math.floor(Math.random() * 201) - 100;
const y = Math.floor(Math.random() * 201) - 100;

// define a nova posição de fundo usando o número aleatório gerado
const novaPosicaoFundo = `${x}% ${y}%`;

// define a propriedade 'background-position' do corpo com a nova posição de fundo
body.style.backgroundPosition = novaPosicaoFundo;
