function resultado(idElementoAudio){
    document.querySelector(idElementoAudio).play();
    
}

const listadeTeclas = document.querySelectorAll(".tecla");
let contador = 0;
while(contador <listadeTeclas.length){
    const efeito = listadeTeclas[contador].classList[1];
    const idAudio = ""+efeito;
    listadeTeclas[contador].onclick = function(){
    resultado(idAudio);
}
contador = contador + 1;
console.log(contador);
}

const aplausos = document.querySelector("#som_tecla_aplausos");
function resultado(som){
    alert(som);
}

resultado("Final da Libertadores");
let comando = "tocar";
if(comando == "tocar") {
   alert ("Fluminensa Campeão");
}
else {
    alert ("Fluminensa Campeão");
}


/** 
let idade = 18;
if (idade >= 18) {
    console.log("Você pode entrar")
}else {
    console.log("Você não pode entrar")
}

function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
    
}
const listadeTeclas = document.querySelectorAll(".tecla");
for(let contador=0; contador < listadeTeclas.length; contador++){
    const tecla = listadeTecla[contador];
    const efeito = tecla.classList[1];
    const idAudio =`#som_${efeito}`;
    teclas.onclick = function(){
        tocaSom(idAudio)
    } */     


