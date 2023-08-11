function gerarTermoAleatorio() {
  const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789     ";
  const comprimentoTermo = Math.floor(Math.random() * 20) + 1;
  let termoGerado = "";

  for (let i = 0; i < comprimentoTermo; i++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    termoGerado += caracteres.charAt(indiceAleatorio);
  }
  document.getElementById("termo").value = termoGerado;
  buscarVideoAleatorio();
}

function buscarVideoAleatorio() {
  const chaveAPI = "AIzaSyDmV2gsUbBgVuZQf4wdhZptZ6Hsfqc66A4";
  const termoPesquisa = document.getElementById("termo").value.trim();
  const maxResultado = 10000;
  if (termoPesquisa === "") {
    alert("Por favor, digite um termo de pesquisa.");
    return;
  }

  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(termoPesquisa)}&key=${chaveAPI}&maxResults=${maxResultado}`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.items.length === 0) {
        alert("Nenhum vídeo encontrado para o termo de pesquisa.");
        return;
      }
      const totalVideos = data.items.length;
      const indiceAleatorio = Math.floor(Math.random() * totalVideos);
      const videoID = data.items[indiceAleatorio].id.videoId;

      window.location.href = `https://www.youtube.com/watch?v=${videoID}`;
    })
    .catch(error => console.log(alert(TypeError(403))));
}
window.onload = function() {
  verificarCotasDisponiveis();
};
function verificarCotasDisponiveis() {
  const chaveAPI = "AIzaSyDmV2gsUbBgVuZQf4wdhZptZ6Hsfqc66A4"; // Sua chave de API
  const url = `https://www.googleapis.com/youtube/v3/search?key=${chaveAPI}&part=id&maxResults=1`;

  // Realizar a requisição à API do YouTube
  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.error && data.error.errors.length > 0) {
        const erro = data.error.errors[0];
        if (erro.reason === "dailyLimitExceeded" || erro.reason === "quotaExceeded") {
          // Desabilitar o botão de busca
          document.getElementById("buscarButton1").disabled = true;
          document.getElementById("buscarButton2").disabled = true;
        }
      }
    })
    .catch(error => console.log(error));
}