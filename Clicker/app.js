var precoMadeira=1.2;
var madeirasAnt=parseFloat(localStorage.getItem('madeiras'));
var madeiras = 0;

window.onload = function exampleFunction() {
    if (isNaN(madeirasAnt)) {
        madeirasAnt=0;
    }else{
    document.getElementById("madeiras").innerHTML = "Você tem " + madeirasAnt.toFixed(2) + " Madeiras.";
  }
}

function cortar() {
    updateDisplay(madeiras=madeirasAnt+precoMadeira);
}

function melhorarMachado() {
    precoMadeira=precoMadeira*1.01
    localStorage.setItem('precoDeVenda' , precoMadeira);
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

