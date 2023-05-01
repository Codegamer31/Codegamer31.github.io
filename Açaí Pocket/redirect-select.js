function redirecionar() 
{
    var select = document.getElementById("opcoes");
    var opcaoSelecionada = select.options[select.selectedIndex].value;
    if (opcaoSelecionada != "") {window.location.href = opcaoSelecionada;}
}