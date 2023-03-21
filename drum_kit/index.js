document.querySelectorAll('.drum').forEach(bt => {
    bt.addEventListener('click', () => {
        console.log(bt.innerHTML);
        playDrum(bt.innerHTML);
        animateButton(bt.innerHTML);

    });
})

document.addEventListener('keydown', (event) => {
    console.log(event.key);
    playDrum(event.key);
    animateButton(event.key);
})

function playDrum(key) {
    var input = key;

    switch (input) {
        case 'w':
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case 'a':
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case 's':
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case 'd':
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case 'j':
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case 'k':
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case 'l':
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            break;
    }
}

function animateButton(key) {
    document.querySelector("." + key).classList.add('pressed');

    setTimeout(() => { document.querySelector("." + key).classList.remove('pressed'); }, 100);
}

var tom3 = new Audio("sounds/tom-3.mp3");
var tom4 = new Audio("sounds/tom-4.mp3");
// audio.play();



