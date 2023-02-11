// document.querySelector('.tecla_pom') A palavra document é uma palavra reservada no JS
//   (query.) -- O . em JS significa que vamos abrir algo em JS
//   O querySelector é utilizado quando vamos buscar algo 


function tocaSomPom() {

    document.querySelector('#som_tecla_pom').play();
}



document.querySelector('.tecla_pom').onclick = tocaSomPom;

