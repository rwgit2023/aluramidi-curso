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
function tocaSom(seletortAudio){

   const elemento =  document.querySelector(seletortAudio);

   if (elemento === null){

        alert('Element not found')
        // console.log('Element not Found')
   }

   if (elemento != null){

    if (elemento.localName === 'audio'){

         elemento.play();
     }
        
   }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1]; // pega o nome faltante na string
    //Template String
    const seletortAudio = `#som_${instrumento}`; // soma oque euu tinha com as novas
    // listaDeTeclas[contador].onclick = tocaSom;
    tecla.onclick = function(){
        tocaSom (seletortAudio)
    }
      
    tecla.onkeydown = function(evento){

       
        // console.log(evento.code == 'Space') // Mostra qual tecla esta sendo digitada
        
        if (evento.code === 'Space' || evento.code === 'Enter' || evento.code === 'NumpadEnter'){ 
            tecla.classList.add('ativa')
        }
        // coloca as cores de fundo nas teclas quando o botao aativo
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa')// retira as cores do botap quando for solto
    }
} 


