const musicContainer = document.getElementById('music-container');

const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');

const title = document.getElementById('title');
const cover = document.getElementById('cover');

// Song titles
const songs = ['Attention', 'Schism', 'Stockholm Syndrome']

//Keep track of songs
let songIndex = 0;

//Initial load of song into DOM
loadSong(songs[songIndex])

// Update song details
function loadSong(song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`
    cover.src = `images/${song}.jpg`
}

// Play Song
function playSong() {
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')

    audio.play()
}

// Pause Song
function pauseSong() {
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')
    playBtn.querySelector('i.fas').classList.add('fa-play')

    audio.pause()
}



// Event Listeners
playBtn.addEventListener('click',() => {
    const isPlaying = musicContainer.classList.contains('play')

    if(isPlaying) {
        pauseSong();
    } else {
        playSong()
    }
})

// Change Song
prevBtn.addEventListener('click', () => {
    if(songIndex === 0) {
        songIndex = songs.length - 1
    } else {
        songIndex--
    }

    loadSong(songs[songIndex])

    playSong()
})

nextBtn.addEventListener('click', () => {
    songIndex++;

    if(songIndex === songs.length) {
        songIndex = 0
    }

    loadSong(songs[songIndex])

    playSong()
})