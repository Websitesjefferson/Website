
let time = 5000,
    posição = 0,
    imagem = document.querySelectorAll('#banner img')
    max = imagem.length;



function banner(){

    imagem[posição].classList.remove('res')

    posição++

    

    if(posição >= max)
     posição = 0

     imagem[posição].classList.add('res')

}
function start() {
    setInterval(() => {
       
        banner()

    },time) 

    }
    window.addEventListener("load", start)

    ScrollReveal({
        origin: 'righ',
        distance: '50%',
        duration: 3000,
    }).reveal('.teste6');
    
    ScrollReveal({
        origin: '',
        distance: '',
        duration: 3000,
    }).reveal('#close, .teste3, .teste4, .imagem00, #close, form');
   

    window.addEventListener('scroll', onscrol)

 function onscrol(){

        if(scrollY > 500){
            backtopbutton.classList.add('show')
        }else{
            backtopbutton.classList.remove('show')
        }

}

