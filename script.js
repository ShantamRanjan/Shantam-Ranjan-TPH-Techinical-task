console.log("welcome to spotify");
let songindex = 0;
let audioElement = new Audio('1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let songitems = Array.from(document.getElementsByClassName('songitem'));
let songs = [
    {songname:"salam-e-ishq", filepath:"portfolio/1.mp3",coverpath:"portfolio/1.jpg"},
    {songname:"salam-e-ishq", filepath:"portfolio/1.mp3",coverpath:"portfolio/1.jpg"},
    {songname:"salam-e-ishq", filepath:"portfolio/1.mp3",coverpath:"portfolio/1.jpg"},
    {songname:"salam-e-ishq", filepath:"portfolio/1.mp3",coverpath:"portfolio/1.jpg"},
    {songname:"salam-e-ishq", filepath:"portfolio/1.mp3",coverpath:"portfolio/1.jpg"},
    {songname:"salam-e-ishq", filepath:"portfolio/1.mp3",coverpath:"portfolio/1.jpg"},
    {songname:"salam-e-ishq", filepath:"portfolio/1.mp3",coverpath:"portfolio/1.jpg"},
    {songname:"salam-e-ishq", filepath:"portfolio/1.mp3",coverpath:"portfolio/1.jpg"},
]

masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value = progress;
})
