function EXIT() {
    window.close()
}
function LOAD() {
    // Obter todas as cookies como uma string
var cookies = document.cookie;

// Dividir a string de cookies em pares chave=valor
var arrayCookies = cookies.split(';');

// Procurar o cookie desejado ("dados" neste caso)
var cookieDados = null;
for (var i = 0; i < arrayCookies.length; i++) {
    var cookie = arrayCookies[i].trim();
    if (cookie.indexOf('dados=') === 0) {
        cookieDados = cookie;
        break;
    } else {
        alert('ERRO TERMINAL')
    }
}

// Obter o valor do cookie "dados"
var valorDados = null;
if (cookieDados) {
    valorDados = decodeURIComponent(cookieDados.split('=')[1]);
}

// Converter a string JSON de volta para um objeto
var dadosUsuario = JSON.parse(valorDados);
nome = dadosUsuario.nome
nivel = dadosUsuario.nivel
hpx = dadosUsuario.hpx
hppmin = dadosUsuario.hppmin
atk = dadosUsuario.atk
atkp = dadosUsuario.atkp
defe = dadosUsuario.defe
crit = dadosUsuario.crit
deva = dadosUsuario.deva
GAME()
}
function START(){
    document.getElementById('start').style.display = 'block'
    document.getElementById('load').style.display = 'none'
    document.getElementById('menu').style.display = 'none'
    document.getElementById('game').style.display = 'none'
    NAME()
}

function NAME() {
    const textElement = document.querySelector('.text');
    var textToType = "Qual Sera Seu Nome? :";
    let currentIndex = 0;

    function typeText() {
        document.getElementById('NOME').style.animation = ''
        document.getElementById('NOME').style.opacity = '0'
        if (currentIndex < textToType.length) {
            textElement.textContent += textToType[currentIndex];
            currentIndex++;
            setTimeout(typeText, Math.floor(Math.random() * 100));
        } else {
            Tecla = false
            currentIndex = 0;
            document.getElementById('NOME').style.opacity = '1'
            document.getElementById('NOME').style.animation = 'pisc 2s'
        }
    }

    typeText();
    document.addEventListener("keydown", onKeyDown);
    function onKeyDown(event) {
        const keyCode = event.keyCode;
        if (keyCode == 13 && !Tecla) {
            if (document.getElementById('NOME').value == '') {
                Tecla = true
                textElement.textContent = ''
                textToType = 'Escreva Um Nome! :'
                typeText()
            } else {
                textElement.textContent = ''
                nome = document.getElementById('NOME').value
                nivel = 1
                hpx = Math.floor(Math.random()*(150-50)+50)
                hppmin = hpx
                atk = Math.floor(Math.random()*(30-10)+10)
                atkp = Math.floor(Math.random()*(90-30)+30)
                defe = Math.floor(Math.random()*(60-30)+30)
                crit = Math.floor(Math.random()*(60-30)+30)
                deva = Math.floor(Math.random()*(10-0)+0)
                var dados = {
                    nivel:`${nivel}`,
                    nome:`${nome}`,
                    hpx:`${hpx}`,
                    hppmin:`${hppmin}`,
                    atk:`${atk}`,
                    atkp:`${atkp}`,
                    defe:`${defe}`,
                    crit:`${crit}`,
                    deva:`${deva}`
                }
                var dadosJSON = JSON.stringify(dados);
                document.cookie = "dados=" + encodeURIComponent(dadosJSON);
             
                GAME()
            }
        }
    }
}

function GAME() {
    document.getElementById('start').style.display = 'none'
    document.getElementById('load').style.display = 'none'
    document.getElementById('menu').style.display = 'none'
    document.getElementById('game').style.display = 'block'
    
    const textElement = document.getElementById('text3');
    hpp = hppmin/hpx*100
    var textToType =`
                    ${nome}
                    NIVEL = ${nivel}
                    ======================================
                    HPX = ${hppmin} / ${hpx} =   ${hpp}%
                    ATK = ${atk}
                    DEF = ${defe}
                    CRT = ${crit}%
                    ATS = ${atkp}%
                    DVI = ${deva}%`

    let currentIndex = 0;


    function typeText() {
        if (currentIndex < textToType.length) {
            textElement.textContent += textToType[currentIndex];
            currentIndex++;
            setTimeout(typeText, Math.floor(Math.random() * 20));
        } else {
            currentIndex = 0;
            document.getElementById('options').style.display = 'flex'
            document.getElementById('options').style.animation = 'pisc 2s'
            document.getElementById('options').style.opacity = '1'
        }
    }
    typeText()

    
    var palavraDestaque = document.querySelector('#text3');
    var janelaPopUp = document.getElementById('janela-pop-up');

    palavraDestaque.addEventListener('mouseover', function() {
    janelaPopUp.style.display = 'block';
    });

    palavraDestaque.addEventListener('mouseout', function() {
    janelaPopUp.style.display = 'none';
    });
}