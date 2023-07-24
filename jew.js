console.log('Welcome to Spotiy!');

// Declaing variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let seek = document.getElementById('bottom');
let play = document.getElementById('playBtn');
console.log(play);
let previous = document.getElementById('previous');
let next = document.getElementById('next');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Gallan Goodiyaan" ,songDuration: '02:47' , songCovers: 'covers/1.jpg' , songPlay:'songs/1.mp3'},
    {songName: "Spaceship", songDuration:'02:05', songCovers: 'covers/2.jpg', songPlay:'songs/2.mp3'},
    {songName: "Kina Chir", songDuration: '03:36', songCovers: 'covers/3.jpg' , songPlay:'songs/3.mp3'},
    {songName: "Moonroof", songDuration: '02:45', songCovers: 'covers/4.jpg' , songPlay:'songs/4.mp3'},
    {songName: "Age 19", songDuration: '03:07', songCovers: 'covers/5.jpg' , songPlay:'songs/5.mp3'},
    {songName: "Humnava" ,songDuration: '05:29', songCovers: 'covers/6.jpg' , songPlay:'songs/6.mp3'},
    {songName: "Brown Munde", songDuration: '04:27', songCovers: 'covers/7.jpg' , songPlay:'songs/7.mp3'},
    {songName: "Baaton Ko Teri", songDuration:'04:40', songCovers: 'covers/8.jpg' , songPlay:'songs/8.mp3'},
    {songName: "Tu Hi To Jannat Meri", songDuration:'04:41', songCovers: 'covers/9.jpg' , songPlay:'songs/9.mp3'},
    {songName: "Khaab", songDuration: '03:21', songCovers: 'covers/10.jpg' , songPlay:'songs/10.mp3'},
]


// songItem poori song list ke containers hain html ke andar aur humne fetch krne ke liye array isliye liya hain kyuki humme isko iterate krna hain...
songItem.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].songCovers;
    element.getElementsByClassName('song')[0].innerText = songs[i].songName;
    element.getElementsByClassName('timestamp')[0].innerHTML = songs[i].songDuration;
})

// play/pause
play.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        play.classList.remove('fa-play-circle');
        play.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else{
        play.classList.add('fa-play-circle');
        play.classList.remove('fa-pause-circle');
        audioElement.pause();
        gif.style.opacity = 0;
    }
})

// seek
audioElement.addEventListener('timeupdate',()=>{
    // updating seek
    progress = parseInt(audioElement.currentTime/audioElement.duration * 100);
    seek.value = progress; 
})

seek.addEventListener('change',()=>{
    audioElement.currentTime = audioElement.duration*seek.value/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex}.mp3`;
        document.getElementById('GifSongName').innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        play.classList.remove('fa-play-circle');
        play.classList.add('fa-pause-circle');
    })
})