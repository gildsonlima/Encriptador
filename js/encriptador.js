var entrada = document.querySelector('#textoEntrada');
var saida = document.querySelector('#textoSaida');
var botaoEncriptar = document.querySelector('#encriptar');
var botaoDesencriptar = document.querySelector('#desencriptar')

saida.classList.add('vazio');

entrada.addEventListener('focus', function(){
    entrada.value = "";
    saida.value = "";
    saida.classList.add('vazio');
})




botaoEncriptar.addEventListener('click', function(){
    var textoentrada = entrada.value
    saida.value = "";
    var novasaida = textoentrada.replace(/e/g,"enter");
        novasaida = novasaida.replace(/i/g,"imes");
        novasaida = novasaida.replace(/a/g,"ai");
        novasaida = novasaida.replace(/o/g,"ober");
        novasaida = novasaida.replace(/u/g,"ufat");
    
    saida.value = novasaida;
    if(saida.value==""){
        saida.classList.add('vazio');
    }else{
        saida.classList.remove('vazio');
    }
    
})

botaoDesencriptar.addEventListener('click', function(){
    var textoentrada = entrada.value
    saida.value = "";
    var novasaida = textoentrada.replace(/enter/g,"e");
        novasaida = novasaida.replace(/imes/g,"i");
        novasaida = novasaida.replace(/ai/g,"a");
        novasaida = novasaida.replace(/ober/g,"o");
        novasaida = novasaida.replace(/ufat/g,"u");
    
    saida.value = novasaida;
    if(saida.value==""){
        saida.classList.add('vazio');
    }else{
        saida.classList.remove('vazio');
    }
    
})




/*A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"*/