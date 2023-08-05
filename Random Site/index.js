document.getElementById('searchForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const searchTerm = document.getElementById('searchTerm').value;
    const apiKey = 'AIzaSyA2wasPNB7czVYW3SZmhw1SH0O_mx9PctE'; // Substitua 'SUA_CHAVE_DA_API' pela sua chave de API do Google Custom Search
    const cx = '641075e4fc6ff42ab'; // Substitua 'SEU_CX' pelo ID do seu mecanismo de pesquisa personalizado (CX)
    const apiUrl = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(searchTerm)}&key=${apiKey}&cx=${cx}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const items = data.items;
            if (items && items.length > 0) {
                const randomItem = items[Math.floor(Math.random() * items.length)];
                const randomLink = randomItem.link;
                window.location.href = randomLink;
            } else {
                alert('Nenhum resultado encontrado.');
            }
        })
        .catch(error => console.error('Erro ao obter resultados da API:', error));
});