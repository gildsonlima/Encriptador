var botaocopiar = document.querySelector('#copiar');

botaocopiar.addEventListener('click', function(){
    var copiado = document.querySelector('#textoSaida');
    copiado.select();
    copiado.setSelectionRange(0, 99999);
    document.execCommand('copy');
    console.log(copiado)
})