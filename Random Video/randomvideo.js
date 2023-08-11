    function gerarTermoAleatorio() {
      const termosAleatorios = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','!','#','&',' '];
      const termoGerado = [];
      const numTermos = Math.floor(Math.random() * 10) + 1;
      for (let i = 0; i < numTermos; i++) {
        const indiceAleatorio = Math.floor(Math.random() * termosAleatorios.length);
        termoGerado.push(termosAleatorios[indiceAleatorio]);
      }
      document.getElementById("termo").value = termoGerado.join("");
      if (document.getElementById("termo").value != ' ') {
        buscarVideoAleatorio()
      }
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
        .catch(error => console.log(error));
    }