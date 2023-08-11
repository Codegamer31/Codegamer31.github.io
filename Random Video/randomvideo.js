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