$(document).ready(function(){
  for (var i = 0; i <= 100; i++){
      HWdimentions = Math.floor(Math.random() * 11) + 'px';
   div = $('<div/>').css({
    'width': HWdimentions,
    'height':  HWdimentions,
    'left': Math.floor(Math.random() * 100) + '%',
    'animation-duration': (Math.random() * 20) + 5 + 's',
    'animation-delay': (Math.random() * 10) + 's',

   })
   
   .addClass('snowflake');

   $('body').append(div);
  }
});

let musica = document.querySelector('audio');

document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

function tocarMusica(){
  musica.play();
  document.querySelector('.botao-pause').style.display = 'block';
  document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
  musica.pause();
  document.querySelector('.botao-pause').style.display = 'none';
  document.querySelector('.botao-play').style.display = 'block';
}
