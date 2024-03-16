var st1 = document.getElementById("st1") ; var st1_img = 0
var st2 = document.getElementById("st2") ; var st2_img = 0
var st3 = document.getElementById("st3") ; var st3_img = 0
var st4 = document.getElementById("st4") ; var st4_img = 0

var sp1 = document.getElementById("sp1") ; var sp1_img = 0
var sp2 = document.getElementById("sp2") ; var sp2_img = 0

function call_striker() {return Math.floor(Math.random()*(105-0)+0)} ; function call_special() {return Math.floor(Math.random()*(50-0)+0)}

st1.src = "striker/" + st1_img + ".webp"
st2.src = "striker/" + st2_img + ".webp"
st3.src = "striker/" + st3_img + ".webp"
st4.src = "striker/" + st4_img + ".webp"

sp1.src = "special/" + sp1_img + ".webp"
sp2.src = "special/" + sp2_img + ".webp"


function call_st1() {
    st1_img = call_striker()
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