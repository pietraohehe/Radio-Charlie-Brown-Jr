import songs from "./songs.js";

const player = document.querySelector('#player');
const imageMusic = document.querySelector('#fotomusic');
const nameMusic = document.querySelector('#namemusic');
const nameAutor = document.querySelector('#autormusic');
const background = document.querySelector('.fundo')

const progressBar = document.querySelector('.progressbar')
const progress = document.querySelector('.progress');
const timeInicial = document.querySelector('.timeinicial');
const timeFinal = document.querySelector('.timefinal');

const backButton = document.querySelector('#back');
const playpauseButton = document.querySelector('#play');
const nextButton = document.querySelector('#next');

const textButtonPlay = "<i class='material-symbols-outlined'>play_arrow</i>";
const textButtonPause = "<i class='material-symbols-outlined'>pause</i>";

let index = 0;

backButton.onclick = () => prevNextMusic('prev')
nextButton.onclick = () => prevNextMusic()


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

player.ontimeupdate = () => updateTime()


const updateTime = () => {

    const MinutoAtual = Math.floor(player.currentTime / 60)
    const SegundoAtual = Math.floor(player.currentTime % 60)
    timeInicial.textContent = MinutoAtual + ":" + formatZero(SegundoAtual)

    const duracaoFormatado = isNaN(player.duration) ? 0 : player.duration
    const duracaoMinuto = Math.floor(duracaoFormatado / 60)
    const duracaoSegundo = Math.floor(duracaoFormatado % 60)
    timeFinal.textContent = duracaoMinuto + ":" + formatZero(duracaoSegundo)

    const progressWidth = duracaoFormatado ? (player.currentTime / duracaoFormatado) * 100 : 0;

    progress.style.width = progressWidth + "%"
}

const formatZero = (n) => (n < 10 ? "0" + n : n)

progressBar.onclick = (e) => {
    const newTime = (e.offsetX / progressBar.offsetWidth) * player.duration
    player.currentTime = newTime
    }

const prevNextMusic = (type = "next") =>{
    if ((type == "next" && index + 1 === songs.length) || type === "init"){
        index = 0
    }else if (type == "prev" && index === 0){
        index = songs.length - 1
    }else {
        index = type == "prev" && index ? index - 1 : index + 1
    }

    player.src = songs[index].src
    nameMusic.innerHTML = songs[index].namemusic
    nameAutor.innerHTML = songs[index].autormusic
    imageMusic.src = songs[index].albumimg
    background.style.backgroundImage = `linear-gradient(to bottom, rgba(255, 255, 255, 0), black), url(${songs[index].albumimg})`;

    if (type !== "init") {
        player.play();
        playpauseButton.innerHTML = textButtonPause;
    }

    updateTime()
}   

prevNextMusic("init")