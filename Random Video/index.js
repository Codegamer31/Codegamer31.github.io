var Cotas = false
var ChaveApi = ''

const chavesApi = [
    "AIzaSyDmV2gsUbBgVuZQf4wdhZptZ6Hsfqc66A4",
    "AIzaSyCaHAb4Ekr8hCJ-NfNM6FsM3_reVZNp3J4",
    "AIzaSyA2wasPNB7czVYW3SZmhw1SH0O_mx9PctE",
    "AIzaSyAZJomfHzbr-icHe-BSqdUE8CoHDr0uPes",
    "AIzaSyD4NNoIdduPCmWetBl6DC1Y_RMutDF7b54"
];
window.onload = function() {
    SelecionarChave();
}
function SelecionarChave() {
    const indiceAleatorio = Math.floor(Math.random() * chavesApi.length);
    ChecarCotas();
    ChaveApi = chavesApi[indiceAleatorio];
}
function  PegarCX() {
    var select = document.getElementById("Sites");
    var opcaoSelecionada = select.options[select.selectedIndex].value;
    cx = opcaoSelecionada;    
}
function ChecarCotas() {
    termoPesquisa = 'google'
    const quotaUrl = `https://www.googleapis.com/customsearch/v1?key=${ChaveApi}&cx=678bb9bcf15d64a87&q=${encodeURIComponent(termoPesquisa)}&fields=queries(request(totalResults))`;
    fetch(quotaUrl)
      .then(response => response.json())
      .then(data => {
        if (data.queries && data.queries.request && data.queries.request[0].totalResults > 0) {
            Cotas = true
        } else {
            Cotas = false
            SelecionarChave()
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
    PegarCX()
    if (Cotas == false) {
        alert('COTAS EXCEDIDAS! , TENTE NOVAMENTE!');
        return;
    }
    if (cx == ' ') {
        alert('Escolha Um Site Para Pesquisar!');
        return;
    }
    const termoPesquisa = document.getElementById('termoPesquisa').value;
    if (!termoPesquisa) {
        alert('Por favor, digite um termo de pesquisa.');
    return;
    }
    const urlApi = `https://www.googleapis.com/customsearch/v1?key=${ChaveApi}&cx=${cx}&q=${encodeURIComponent(termoPesquisa)}`;
    window.location.href = urlApi;       
}