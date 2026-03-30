import songs from "./songs.js";

const player = document.querySelector('#player');
const imageMusic = document.querySelector('#fotomusic');
const nameMusic = document.querySelector('#namemusic');
const nameAutor = document.querySelector('#autormusic');

const progress = document.querySelector('.progress');
const timeInicial = document.querySelector('.timeinicial');
const timeFinal = document.querySelector('.timefinal');

const backButton = document.querySelector('#back');
const playpauseButton = document.querySelector('#play');
const nextButton = document.querySelector('#next');

const textButtonPlay = "<i class='material-symbols-outlined'>play_arrow</i>";
const textButtonPause = "<i class='material-symbols-outlined'>pause</i>";

let index = 0;

playpauseButton.onclick = () => playPauseMusic();

function playPauseMusic() {
    if(player.paused) {
        player.play();
        playpauseButton.innerHTML = textButtonPause;        
    } else {
        player.pause();
        playpauseButton.innerHTML = textButtonPlay;        
    }
}

