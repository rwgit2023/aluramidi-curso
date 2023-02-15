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


// while(contador < listaDeTeclas.length){
// 
    // const tecla = listaDeTeclas[contador];
    // const instrumento = tecla.classList[1]; // pega o nome faltante na string
    // const idAudio = `#som_${instrumento}`;        // soma oque euu tinha com as novas
    // tecla.onclick = function(){
        // tocaSom (idAudio)
    // }
    // contador +=1
// }




// Funcao com Parametro de entrada (toca o som)
function tocaSom(idElementoAudioAudio){

    document.querySelector(idElementoAudioAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1]; // pega o nome faltante na string
    //Template String
    const idAudio = `#som_${instrumento}`;        // soma oque euu tinha com as novas
    // listaDeTeclas[contador].onclick = tocaSom;
    tecla.onclick = function(){
        tocaSom (idAudio)
    }
      
    tecla.onkeydown = function(){
        tecla.classList.add('ativa')
    }
} 


