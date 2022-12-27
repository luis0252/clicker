var precoMadeira=1;
var madeirasAnt=parseFloat(localStorage.getItem('madeiras'));
var madeiras = madeirasAnt;
var dinheiro = parseFloat(localStorage.getItem('dinheiro'));

window.onload = function exampleFunction() {
    if (isNaN(madeirasAnt)) {
        madeirasAnt=0;
    }else{
    document.getElementById("madeiras").innerHTML = "Você tem " + madeirasAnt.toFixed(2) + " Madeiras.";
  }
    if (isNaN(dinheiro)) {
        dinheiro=0;
    }else{
    document.getElementById("dinheiro").innerHTML = "Dinheiro: $" + dinheiro.toFixed(2);
}
}

function cortar() {
    updateDisplay(madeiras=madeirasAnt+precoMadeira);
}

function melhorarMachado() {
    if(dinheiro >= 1) {
    precoMadeira=precoMadeira*1.01
    localStorage.setItem('precoDeVenda' , precoMadeira);
    updatemoney(dinheiro=dinheiro-1);
    }
}

function updateDisplay(val) {
    if (Number.isInteger(madeiras)){
        if(madeiras == 1){
            document.getElementById("madeiras").innerHTML = "Você tem " + val + " Madeira.";
          madeirasAnt=madeiras
          localStorage.setItem('madeiras' , val.toFixed(2));
        }else{
        document.getElementById("madeiras").innerHTML = "Você tem " + val.toFixed() + " Madeiras.";
          madeirasAnt=madeiras
          localStorage.setItem('madeiras' , val.toFixed(2));
    }
    }else{
    document.getElementById("madeiras").innerHTML = "Você tem " + val.toFixed(2) + " Madeiras.";
      madeirasAnt=madeiras
      localStorage.setItem('madeiras' , val.toFixed(2));
}}

function irLoja() {
    document.getElementsByClassName("loja")[0].style.display = 'block';
    document.getElementsByClassName("main")[0].style.display = 'none';
}

function voltar() {
    document.getElementsByClassName("loja")[0].style.display = 'none';
    document.getElementsByClassName("main")[0].style.display = 'block';
}

function vender1() {
    if(madeiras >= 1){
            updateDisplay(madeiras=madeiras-1);
            updatemoney(dinheiro=dinheiro+1);
    }
}

function vender10() {
    if(madeiras >= 10){
            updateDisplay(madeiras=madeiras-10);
            updatemoney(dinheiro=dinheiro+10);
    }
}

function venderTudo() {
            updatemoney(dinheiro=dinheiro+madeiras);
            updateDisplay(madeiras=madeiras-madeiras);
}

function updatemoney(val) {
    document.getElementById("dinheiro").innerHTML = "Dinheiro: $" + val.toFixed(2);
    localStorage.setItem('dinheiro' , val.toFixed(2));
}
