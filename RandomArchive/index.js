function START() {   
    document.getElementById('geral').style.display = 'flex'
    document.getElementById('strikers').style.display = 'none'
    document.getElementById('specials').style.display = 'none'
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
        }
    }

    // Obter o valor do cookie "dados"
    var valorDados = null;
    if (cookieDados) {
        valorDados = decodeURIComponent(cookieDados.split('=')[1]);
    }

    // Converter a string JSON de volta para um objeto
    var dadosUsuario = JSON.parse(valorDados);
    st_del = [dadosUsuario.st.split(",")]
    sp_del = [dadosUsuario.sp.split(",")]
    st_del = st_del[0]
    sp_del = sp_del[0]
}
var st_del = [0]
var sp_del = [0]

var st1 = document.getElementById("st1") ; var st1_img = 0
var st2 = document.getElementById("st2") ; var st2_img = 0
var st3 = document.getElementById("st3") ; var st3_img = 0
var st4 = document.getElementById("st4") ; var st4_img = 0

var sp1 = document.getElementById("sp1") ; var sp1_img = 0
var sp2 = document.getElementById("sp2") ; var sp2_img = 0

var strikerdiv = 0
var specialdiv = 0

function call_striker() {return Math.floor(Math.random()*(105-0)+0)} ; function call_special() {return Math.floor(Math.random()*(50-0)+0)}

st1.src = "striker/" + st1_img + ".webp"
st2.src = "striker/" + st2_img + ".webp"
st3.src = "striker/" + st3_img + ".webp"
st4.src = "striker/" + st4_img + ".webp"

sp1.src = "special/" + sp1_img + ".webp"
sp2.src = "special/" + sp2_img + ".webp"


function call_st1() {
    st1_img = call_striker()
    for (let i = 0; i < st_del.length; i++) {
        if (st1_img == st_del[i]) {
            st1_img = call_striker()
            i = 0    
        }
    }
    if (st1_img == 0) {
        st1.src = "striker/" + st1_img + ".webp"
    } else {
        if (st1_img !== st2_img) {
            if (st1_img !== st3_img) {
                if (st1_img !== st4_img) {
                    st1.src = "striker/" + st1_img + ".webp"    
                }
            }
        }
    }
}
function call_st2() {
    st2_img = call_striker()
    for (let i = 0; i < st_del.length; i++) {
        if (st2_img == st_del[i]) {
            st2_img = call_striker()
            i = 0
        }
    }
    if (st2_img == 0) {
        st2.src = "striker/" + st2_img + ".webp"
    } else {
        if (st2_img !== st1_img) {
            if (st2_img !== st3_img) {
                if (st2_img !== st4_img) {
                    st2.src = "striker/" + st2_img + ".webp"    
                }
            }
        }
    }
}
function call_st3() {
    st3_img = call_striker()
    for (let i = 0; i < st_del.length; i++) {
        if (st3_img == st_del[i]) {
            st3_img = call_striker()
            i = 0
        }
    }
    if (st3_img == 0) {
        st3.src = "striker/" + st3_img + ".webp"
    } else {
        if (st3_img !== st1_img) {
            if (st3_img !== st2_img) {
                if (st3_img !== st4_img) {
                    st3.src = "striker/" + st3_img + ".webp"    
                }
            }
        }
    }
}
function call_st4() {
    st4_img = call_striker()
    for (let i = 0; i < st_del.length; i++) {
        if (st4_img == st_del[i]) {
            st4_img = call_striker()
            i = 0
        }
    }
    if (st4_img == 0) {
        st4.src = "striker/" + st4_img + ".webp"
    } else {
        if (st4_img !== st1_img) {
            if (st4_img !== st2_img) {
                if (st4_img !== st3_img) {
                    st4.src = "striker/" + st4_img + ".webp"    
                }
            }
        }
    }
}
function call_sp1() {
    sp1_img = call_special()
    for (let i = 0; i < sp_del.length; i++) {
        if (sp1_img == sp_del[i]) {
            sp1_img = call_special()
            i = 0
        }
    }
    if (sp1_img == 0) {
        sp1.src = "special/" + sp1_img + ".webp"
    } else {
        if (sp1_img !== sp2_img) {
            sp1.src = "special/" + sp1_img + ".webp"    
        }
    }
}
function call_sp2() {
    sp2_img = call_special()
    for (let i = 0; i < sp_del.length; i++) {
        if (sp2_img == sp_del[i]) {
            sp2_img = call_special()
            i = 0
        }
    }
    if (sp2_img == 0) {
        sp2.src = "special/" + sp2_img + ".webp"
    } else {
        if (sp2_img !== sp1_img) {
            sp2.src = "special/" + sp2_img + ".webp"    
        }
    }
}
function call_all() {
    st1.src = "striker/" + 0 + ".webp" ; call_st1()
    st2.src = "striker/" + 0 + ".webp" ; call_st2()
    st3.src = "striker/" + 0 + ".webp" ; call_st3()
    st4.src = "striker/" + 0 + ".webp" ; call_st4()

    sp1.src = "special/" + 0 + ".webp" ; call_sp1()
    sp2.src = "special/" + 0 + ".webp" ; call_sp2()
}

call_st1()
call_st2()
call_st3()
call_st4()

call_sp1()
call_sp2()

var imgst = 0
var imgsp = 0

function imgstriker() {
    striker()
    const icons1 = document.createElement("div")
    var divPai = document.getElementById("strikers")
    var divAbaixo = document.getElementById("formation1")
    icons1.id = "icons1"
    divPai.insertBefore(icons1,divAbaixo)
    while (imgst < 105) {
        imgst += 1
        const img = document.createElement("img");
        img.src = "striker/" + imgst + ".webp"
        img.className = "icons1"
        img.id = imgst
        img.draggable = false
        for (let i = 0; i < st_del.length; i++) {
            if (imgst == st_del[i]) {
                img.style.filter = "grayscale(1)"
                img.style.borderColor = "black"
            }    
        }
        icons1.appendChild(img);
    }
    strikerdiv = 1
    imgst = 0
    var el = document.getElementById('icons1');
    el.addEventListener('click', function(e) {
        if (e.target.id !== "icons1") {
            el = document.getElementById(e.target.id)
            if (el.style.filter == "grayscale(1)") {
                el.style.filter = "grayscale(0)"  
                el.style.borderColor = "white"
                for (let i = 0; i < st_del.length; i++) {
                    if (e.target.id == st_del[i]) {
                        st_del.splice(i,1)
                        var cookieData = st_del.join(',');
                        st_del = cookieData.split(',');
                        if (document.cookie.length == 1) {
                            document.cookie = [0]
                        } else {
                            document.cookie = sp_del
                        }
                        var dados = {
                            st:`${st_del}`,
                            sp:`${sp_del}`,
                        }
                        var dadosJSON = JSON.stringify(dados);
                        document.cookie = "dados=" + encodeURIComponent(dadosJSON);
                        break
                    }
                }
            } else {
                el.style.filter = "grayscale(1)"
                el.style.borderColor = "black"
                st_del.push(e.target.id)
                var dados = {
                    st:`${st_del}`,
                    sp:`${sp_del}`,
                }
                var dadosJSON = JSON.stringify(dados);
                document.cookie = "dados=" + encodeURIComponent(dadosJSON);
            }
            
        }
        
    });
}
function imgspecial() {
    special()
    const icons2 = document.createElement("div")
    var divPai = document.getElementById("specials")
    var divAbaixo = document.getElementById("formation2")
    icons2.id = "icons2"
    divPai.insertBefore(icons2,divAbaixo)
    while (imgsp < 50) {
        imgsp += 1
        const img = document.createElement("img");
        img.src = "special/" + imgsp + ".webp"
        img.className = "icons2"
        img.id = imgsp
        img.draggable = false
        for (let i = 0; i < sp_del.length; i++) {
            if (imgsp == sp_del[i]) {
                img.style.filter = "grayscale(1)"
                img.style.borderColor = "black"
            }    
        }
        icons2.appendChild(img);
    }
    specialdiv = 1
    imgsp = 0
    var el = document.getElementById('icons2');
    el.addEventListener('click', function(e) {
        if (e.target.id !== "icons2") {
            el = document.getElementById(e.target.id)
            if (el.style.filter == "grayscale(1)") {
                el.style.filter = "grayscale(0)"  
                el.style.borderColor = "white"
                for (let i = 0; i < sp_del.length; i++) {
                    if (e.target.id == sp_del[i]) {
                        sp_del.splice(i,1)
                        var cookieData = sp_del.join(',');
                        sp_del = cookieData.split(',');
                        if (document.cookie.length == 1) {
                            document.cookie = [0]
                        } else {
                            document.cookie = st_del
                        }
                        var dados = {
                            st:`${st_del}`,
                            sp:`${sp_del}`,
                        }
                        var dadosJSON = JSON.stringify(dados);
                        document.cookie = "dados=" + encodeURIComponent(dadosJSON);
                        break
                    }
                }
            } else {
                el.style.filter = "grayscale(1)"
                el.style.borderColor = "black"
                sp_del.push(e.target.id)
                var dados = {
                    st:`${st_del}`,
                    sp:`${sp_del}`,
                }
                var dadosJSON = JSON.stringify(dados);
                document.cookie = "dados=" + encodeURIComponent(dadosJSON);
            }
            
        }
        
    });
}

function formation() {
    if (strikerdiv == 1) {
        document.getElementById("icons1").remove()
        strikerdiv = 0
    }
    if (specialdiv == 1) {
        document.getElementById("icons2").remove()
        specialdiv = 0
    }
    document.getElementById('geral').style.display = 'flex'
    document.getElementById('strikers').style.display = 'none'
    document.getElementById('specials').style.display = 'none'
}
function striker() {
    if (specialdiv == 1) {
        document.getElementById("icons2").remove()
        specialdiv = 0
    }
    document.getElementById('geral').style.display = 'none'
    document.getElementById('strikers').style.display = 'flex'
    document.getElementById('specials').style.display = 'none'
}
function special() {
    if (strikerdiv == 1) {
        document.getElementById("icons1").remove()
        strikerdiv = 0
    }
    document.getElementById('geral').style.display = 'none'
    document.getElementById('strikers').style.display = 'none'
    document.getElementById('specials').style.display = 'flex'
}
