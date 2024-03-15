let termoPesquisa = "";
let chaveSelecionada = "";
let indiceAleatorio = 0
let cotaerro = 0
let conf = 0

function option() {
  if(conf == 0){
    document.getElementById('body').style.display = 'flex'
    document.getElementById('option').style.display = 'none'
    conf = 1
  }
  else{
    document.getElementById('body').style.display = 'none'
    document.getElementById('option').style.display = 'flex'
    conf = 0
  }
}

const chavesAPI = [
  "AIzaSyC4scb9jAYAlrhau_6RtKeBsdJC3kFFZJ0", //prototipo01109@gmail.com               (protegido)
  "AIzaSyCxB8ed_wAzRlJhod9PreCKERNGCPXx458", //codegamer313229@gmail.com              (protegido)
  "AIzaSyAtm3DYJI0hsWFeNxg2VUNWluedEjNybvw", //isabellaalvescitadin01@gmail.com       (protegido)
  "AIzaSyA6awW-hM6Bqahmpjq-Z-ZI4utUB62-p54", //codegamer264@gmail.com                 (protegido)
  "AIzaSyCV8VGd9vfQ8QP4eZpl_1bbPUTryVOx_UU", //                                       (exposto)
  "AIzaSyATUS8Zu56dmo4elwAt3uSGRlv0_8RbHpU", //                                       (exposto)
  "AIzaSyBS287UdWkyR1Sav88i399YW8GDV3_TuNc", //                                       (exposto)
  "AIzaSyCrljlvssTIPsdp4yfWV3nMAhgq6qIEq1M", //                                       (exposto)
  "AIzaSyD3VUN73mfx0_ZcJM35wz7G_EkOzMAmf-w", //isabellaalvescitadin07@gmail.com       (Protegido)
];
let limite = (chavesAPI.length - 1)

function selecionarChaveAPI() {
  if(cotaerro == 1){
    indiceAleatorio += 1
    cotaerro = 0
  }
  if(indiceAleatorio <= limite){
    chaveSelecionada = chavesAPI[indiceAleatorio];
    Aleatorio()
  }
  if(indiceAleatorio > limite){
    alert('COTAS ENCERRADAS')
    indiceAleatorio = 0    
  }
};

function Aleatorio() {
  const caracteres = document.getElementById("typetermo").value.trim();
  const comprimentoTermo = Math.floor(Math.random() * document.getElementById("sizetermo").value.trim()) + 1;
  let termoGerado = "";

  for (let i = 0; i < comprimentoTermo; i++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    termoGerado += caracteres.charAt(indiceAleatorio);
  }
  termoPesquisa = termoGerado
  Pesquisar()
};
function FazerPesquisa() {
  
  selecionarChaveAPI()

}
function Pesquisar() {
  const chaveAPI = chaveSelecionada;
  console.log(chaveAPI);
  const url = `https://www.googleapis.com/youtube/v3/search?key=${chaveAPI}&q=${termoPesquisa}&maxResults=50`;
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.error && data.error.errors.length > 0) {
        const erro = data.error.errors[0];
        if (erro.reason === "forbidden" || erro.reason === "quotaExceeded") {
          cotaerro = 1;
          selecionarChaveAPI();
        }
      } else {
        if (data.items.length == 0) {
          alert("Nenhum Vídeo Encontrado Para o Termo Aleatório.");
          return;
        }
        const totalVideos = data.items.length;
        const indiceAleatorio = Math.floor(Math.random() * totalVideos);
        const videoID = data.items[indiceAleatorio].id.videoId;
        if (videoID === "") {
          Pesquisar()
        } else {
          var iframe = document.getElementById("iframe");
          iframe.width = "800";
          iframe.height = "400";
          iframe.src = "https://www.youtube.com/embed/" + videoID + "?autoplay=1";
          iframe.frameborder = "0";
          iframe.allowfullscreen = true;
          
          const URLID = document.getElementById("urlID");
          URLID.textContent = "https://www.youtube.com/watch?v=" + videoID;
          URLID.href = "https://www.youtube.com/watch?v=" + videoID;          
        }

      }
    })
    .catch(error => console.log(error));
}