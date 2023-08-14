var Cotas = true
var resultado = ''
var ChaveApi = ''
const cx = 'c735e8871db09406d'

const chavesApi = [
    "AIzaSyDmV2gsUbBgVuZQf4wdhZptZ6Hsfqc66A4",
    "AIzaSyCaHAb4Ekr8hCJ-NfNM6FsM3_reVZNp3J4",
    "AIzaSyA2wasPNB7czVYW3SZmhw1SH0O_mx9PctE",
    "AIzaSyAZJomfHzbr-icHe-BSqdUE8CoHDr0uPes",
    "AIzaSyD4NNoIdduPCmWetBl6DC1Y_RMutDF7b54",
    "AIzaSyBsARrhcVhd0XYlERE8MjQEwckRIvFYW4w"
];
function SelecionarChave() {
    const indiceAleatorio = Math.floor(Math.random() * chavesApi.length);
    ChecarCotas();
    ChaveApi = chavesApi[indiceAleatorio];
}
function ChecarCotas() {
    termoPesquisa = 'google'
    const quotaUrl = `https://www.googleapis.com/customsearch/v1?key=${ChaveApi}&cx=${cx}&q=${encodeURIComponent(termoPesquisa)}&fields=queries(request(totalResults))`;
    fetch(quotaUrl)
      .then(response => response.json())
      .then(data => {
        if (data.error && data.error.errors.length > 0) {
            const erro = data.error.errors[0];
            if (erro.reason === "dailyLimitExceeded" || erro.reason === "quotaExceeded") {
                Cotas = false
                selecionarChaveAPI()
            } else {
                Cotas = true
            }
        }
      })
      .catch(error => {console.error('Ocorreu um erro:', error)});
}
function GerarTermo(comprimento = 5) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[]|:;"<>,.?/~';
    let resultado = '';
    for (let i = 0; i < comprimento; i++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    resultado += caracteres.charAt(indiceAleatorio);
    }
    termoPesquisa = resultado;
    FazerPesquisa()
}
function FazerPesquisa() {
    SelecionarChave()
    if (Cotas == false) {
        alert(`COTA EXCEDIDA! , TENTE NOVAMENTE!`);
        return;
    }
    termoPesquisa = document.getElementById('termo').value 
    if (termoPesquisa == '' && termoPesquisa !== resultado) {
        alert('Por favor, digite um termo de pesquisa.');
    return;
    }
    const urlApi = `https://www.googleapis.com/customsearch/v1?key=${ChaveApi}&cx=${cx}&q=${encodeURIComponent(termoPesquisa)}`;
    fetch(urlApi)
    .then(response => response.json())
    .then(data => {
        const items = data.items;
        if (items && items.length > 0) {
            const randomIndex = Math.floor(Math.random() * items.length);
            const randomResult = items[randomIndex];
            const randomResultUrl = randomResult.link;
            window.location.href = randomResultUrl;
        } else {
            alert('Nenhum resultado encontrado.');
        }
    })
    .catch(error => {
        console.error('Erro ao buscar resultados:', error);
        alert('Ocorreu um erro ao buscar resultados.');
    });
}