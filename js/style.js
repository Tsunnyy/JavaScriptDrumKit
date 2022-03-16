function playingSound(e) {
    // console.log(e.keyCode); For keyCodes
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0  //Reset the time
    audio.play(); //FOr playing sound on button press
    key.classList.add("playing"); //for transition effect
}

const keys = document.querySelectorAll(".keys");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}
window.addEventListener("keydown", playingSound)
// console.log(audio);