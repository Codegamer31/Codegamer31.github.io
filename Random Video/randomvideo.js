let termoPesquisa = "";
let chaveSelecionada = "";

window.onload = function() {
  selecionarChaveAPI();
};
const chavesAPI = [
  "AIzaSyDmV2gsUbBgVuZQf4wdhZptZ6Hsfqc66A4",
  "AIzaSyCaHAb4Ekr8hCJ-NfNM6FsM3_reVZNp3J4",
  "AIzaSyA2wasPNB7czVYW3SZmhw1SH0O_mx9PctE",
  "AIzaSyAZJomfHzbr-icHe-BSqdUE8CoHDr0uPes",
  "AIzaSyD4NNoIdduPCmWetBl6DC1Y_RMutDF7b54"
];
function selecionarChaveAPI() {
  const indiceAleatorio = Math.floor(Math.random() * chavesAPI.length);
  chaveSelecionada = chavesAPI[indiceAleatorio];
  verificarCotasDisponiveis()
};
function verificarCotasDisponiveis() {
  const chaveAPI = chaveSelecionada;
  const url = `https://www.googleapis.com/youtube/v3/search?key=${chaveAPI}&part=id&maxResults=1`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.error && data.error.errors.length > 0) {
        const erro = data.error.errors[0];
        if (erro.reason === "dailyLimitExceeded" || erro.reason === "quotaExceeded") {
          document.getElementById('body').style.resize = 0
          selecionarChaveAPI()
        }
        else{
          document.getElementById('body').style.resize = 1
        }
      }
    })
    .catch(error => console.log(error));
};
function gerarTermoAleatorio() {
  const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ";
  const comprimentoTermo = Math.floor(Math.random() * 5) + 1;
  let termoGerado = "";

  for (let i = 0; i < comprimentoTermo; i++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    termoGerado += caracteres.charAt(indiceAleatorio);
  }
  termoPesquisa = termoGerado;
  buscarVideoAleatorio();
};
function buscarVideoAleatorio() {
  const chaveAPI = chaveSelecionada;
  if (termoPesquisa == '') {
    termoPesquisa = document.getElementById("termo").value.trim();    
  }
  const maxResultado = 10000;
  if (document.getElementById("body").style.resize != 0) {
    alert('COTAS EXCEDIDAS! , TENTE NOVAMENTE!');
    document.getElementById("termo").value = '';
    selecionarChaveAPI()
    return;
  }
  if (termoPesquisa == "") {
    alert("Por favor, digite um termo de pesquisa.");
    return;
  }
  const url = `https://www.googleapis.com/customsearch/v1?q=${randomNumber}&key=YOUR_API_KEY&cx=${searchEngineId}`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.items.length === 0) {
        if (termoPesquisa == '') {
          gerarTermoAleatorio()
        } else {
          alert("Nenhum vídeo encontrado para o termo de pesquisa.");          
        }

        return;
      }
      const totalVideos = data.items.length;
      const indiceAleatorio = Math.floor(Math.random() * totalVideos);
      const videoID = data.items[indiceAleatorio].id.videoId;

      window.location.href = `https://www.youtube.com/watch?v=${videoID}`;
    })
    .catch(error => console.log(error));
};