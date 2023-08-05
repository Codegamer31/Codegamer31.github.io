    // Função para buscar e reproduzir um vídeo aleatório
    function buscarVideoAleatorio() {
        const chaveAPI = "AIzaSyDmV2gsUbBgVuZQf4wdhZptZ6Hsfqc66A4"; // Substitua "SUA_CHAVE_DE_API" pela sua chave de API do YouTube
        const termoPesquisa = document.getElementById("termo").value.trim();
        const maxResultado = 50; // Número máximo de vídeos relacionados a serem retornados
  
        if (termoPesquisa === "") {
          alert("Por favor, digite um termo de pesquisa.");
          return;
        }
  
        // Construir a URL para a busca de vídeos relacionados ao termo pesquisado
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(termoPesquisa)}&key=${chaveAPI}&maxResults=${maxResultado}`;
  
        // Realizar a requisição à API do YouTube
        fetch(url)
          .then(response => response.json())
          .then(data => {
            if (data.items.length === 0) {
              alert("Nenhum vídeo encontrado para o termo de pesquisa.");
              return;
            }
  
            // Escolher aleatoriamente um dos vídeos retornados
            const totalVideos = data.items.length;
            const indiceAleatorio = Math.floor(Math.random() * totalVideos);
            const videoID = data.items[indiceAleatorio].id.videoId;
  
            // Redirecionar para o vídeo escolhido
            window.location.href = `https://www.youtube.com/watch?v=${videoID}`;
          })
          .catch(error => console.log(error));
      }