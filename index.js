var SetaParaDireita = window.document.getElementById("seta-direita")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var SetaParaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
    leonardo.style ="display:none"
    bruna.style ="display:flex"
    SetaParaDireita.style ="display:none"
    SetaParaEsquerda.style ="display:flex; margin-top:117px"


 }
 function RolarParaEsquerda(){
    leonardo.style ="display:flex"
    bruna.style ="dispaly:none"
    SetaParaDireita.style ="display:flex"
    SetaParaEsquerda.style ="display:none"
 }

