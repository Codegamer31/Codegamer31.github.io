let termoPesquisa = "";
let chaveSelecionada = "";
let indiceAleatorio = 0
let cotaerro = 0


const chavesAPI = [
  "AIzaSyC4scb9jAYAlrhau_6RtKeBsdJC3kFFZJ0",
  "AIzaSyCxB8ed_wAzRlJhod9PreCKERNGCPXx458",
  "AIzaSyAtm3DYJI0hsWFeNxg2VUNWluedEjNybvw",
  "AIzaSyA6awW-hM6Bqahmpjq-Z-ZI4utUB62-p54",
  "AIzaSyCV8VGd9vfQ8QP4eZpl_1bbPUTryVOx_UU",
  "AIzaSyATUS8Zu56dmo4elwAt3uSGRlv0_8RbHpU",
  "AIzaSyBS287UdWkyR1Sav88i399YW8GDV3_TuNc",
  "AIzaSyAsq7HG4y0ciBcKi0qS7RHoTnYI6iuQzd4",
];
let limite = (chavesAPI.length - 1)

function selecionarChaveAPI() {
  if(cotaerro == 1){
    indiceAleatorio+=1
    cotaerro = 0
  }
  if(indiceAleatorio >= limite){
    alert('COTAS ENCERRADAS')
    indiceAleatorio = 0
  }
  chaveSelecionada = chavesAPI[indiceAleatorio];
  verificarCotasDisponiveis()
};
function verificarCotasDisponiveis() {

  const chaveAPI = chaveSelecionada;
  console.log(chaveAPI)  
  const url = `https://www.googleapis.com/youtube/v3/search?key=${chaveAPI}&part=id&maxResults=1`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.error && data.error.errors.length > 0) {
        const erro = data.error.errors[0];
        if (erro.reason === "dailyLimitExceeded" || erro.reason === "quotaExceeded") {
          cotaerro = 1
          FazerPesquisa()
        }
      }
    })
    .catch(error => console.log(error));
};
function GerarTermo() {
  const caracteres = document.getElementById("typetermo").value.trim();
  const comprimentoTermo = Math.floor(Math.random() * document.getElementById("sizetermo").value.trim()) + 1;
  let termoGerado = "";

  for (let i = 0; i < comprimentoTermo; i++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    termoGerado += caracteres.charAt(indiceAleatorio);
  }
  document.getElementById("termo").value = termoGerado;
};
function FazerPesquisa() {
  
  selecionarChaveAPI()
  termoPesquisa = document.getElementById("termo").value.trim();
  if (termoPesquisa == "") {
    alert("Por favor, digite um termo de pesquisa.");
    return;
  }
  Pesquisar()
}
function Pesquisar() {
  const chaveAPI = chaveSelecionada;
  const maxResultado = 10000;
  const url = `https://www.googleapis.com/youtube/v3/search?key=${chaveAPI}&q=${termoPesquisa}&maxResults=${maxResultado}`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.items.length == 0) {
          alert("Nenhum vídeo encontrado para o termo de pesquisa.");
          return;
        }
      const totalVideos = data.items.length;
      const indiceAleatorio = Math.floor(Math.random() * totalVideos);
      const videoID = data.items[indiceAleatorio].id.videoId;
      window.open(`https://www.youtube.com/watch?v=${videoID}`,'_blank') ;
    })
    .catch(error => console.log(error))
  };
