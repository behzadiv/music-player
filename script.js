let musics = [
    {
        name:"Set fire to rain",
        cover: "./imgs/set-fire.jpg",
        audio: new Audio("./musics/set-fire.mp3")
    },
    {
        name:"Lose-yourself",
        cover: "./imgs/lose-yourself.jpg",
        audio: new Audio("./musics/lose-yourself.mp3")
    },
    {
        name:"Ready for it",
        cover: "./imgs/ready-for-it.jpg",
        audio: new Audio("./musics/ready-for-it.mp3")
    }
]

let currentMusic = 0

let musicName = musics[currentMusic].name
let musicCover = musics[currentMusic].cover
let audio = musics[currentMusic].audio
document.querySelector("#music-title").innerHTML = musicName
document.querySelector("#music-cover").src = musicCover
