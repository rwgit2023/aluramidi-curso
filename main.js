// document.querySelector('.tecla_pom') A palavra document é uma palavra reservada no JS
//   (query.) -- O . em JS significa que vamos abrir algo em JS
//   O querySelector é utilizado quando vamos buscar algo 


// function tocaSomPom() {
// 
    // document.querySelector('#som_tecla_pom').play();
// }
// 

// document.querySelector('.tecla_pom').onclick = tocaSomPom;       pega apenas 1 tecla


// const listaDeTeclas = document.querySelectorAll('.tecla');  // pega todas as classes (botoes)


// for(let i = 0; i < listaDeTeclas.length; i++){
// 
    // listaDeTeclas[i].onclick = tocaSomPom
    // console.log(i)
// }
// 
// 


// Funcao com Parametro de entrada (toca o som)
function tocaSom(idElementoAudioAudio){

    document.querySelector(idElementoAudioAudio).play();
}



const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;


while(contador < listaDeTeclas.length){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1]; // pega o nome faltante na string

    //Template String
    const idAudio = `#som_${instrumento}`;        // soma oque euu tinha com as novas

    // console.log(idAudio);
    
    // listaDeTeclas[contador].onclick = tocaSom;
    tecla.onclick = function(){
        tocaSom (idAudio)
    }
    contador +=1

    // console.log(contador);
}
