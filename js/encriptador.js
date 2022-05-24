var entrada = document.querySelector('#textoEntrada');
var saida = document.querySelector('#textoSaida');
var botaoEncriptar = document.querySelector('#encriptar');
var botaoDesencriptar = document.querySelector('#desencriptar')

entrada.addEventListener('focus', function(){
    entrada.value = " ";
})


botaoEncriptar.addEventListener('click', function(){
    var textoentrada = entrada.value
    saida.value = " ";
    var novasaida = textoentrada.replace("e","enter");
        novasaida = novasaida.replace("i","imes");
        novasaida = novasaida.replace("a","ai");
        novasaida = novasaida.replace("o","ober");
        novasaida = novasaida.replace("u","ufat");
    
    saida.value = novasaida;
    
})

botaoDesencriptar.addEventListener('click', function(){
    var textoentrada = entrada.value
    saida.value = " ";
    var novasaida = textoentrada.replace("enter","e");
        novasaida = novasaida.replace("imes","i");
        novasaida = novasaida.replace("ai","a");
        novasaida = novasaida.replace("ober","o");
        novasaida = novasaida.replace("ufat","u");
    
    saida.value = novasaida;
    
})




/*A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"*/