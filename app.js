const openAdvertismentBtn = document.querySelector("[data-show-advertisment]")
const closeAdvertismentBtn = document.querySelector("[data-close-advertisment]")
const overlay = document.querySelector("[data-overlay]")
const backdrop = document.querySelector('.backdrop')

const showVideoBtn = document.querySelector('.button_additional_show')
const startVideoBtn = document.querySelector('.button_additional_play')
const stopVideoBtn = document.querySelector('.button_additional_close') 
const video = document.querySelector('video')

setTimeout(() => {
    openAdvertisment()
  }, 1000);

openAdvertismentBtn.addEventListener('click', openAdvertisment)
closeAdvertismentBtn.addEventListener('click', closeAdvertisment)

showVideoBtn.addEventListener('click', showVideo)
startVideoBtn.addEventListener('click', startVideo)
stopVideoBtn.addEventListener('click', stopVideo)

function closeAdvertisment() {
  overlay.classList.add("is-hidden")
  overlay.classList.remove('animated')
  openAdvertismentBtn.classList.remove("is-hidden")
  showVideoBtn.classList.remove("showed")
  showVideoBtn.classList.remove("showed-again")
  video.classList.remove("opened")
  startVideoBtn.classList.remove("showed")
  startVideoBtn.classList.remove("hidden")
  stopVideoBtn.classList.remove("showed")
  backdrop.classList.remove("showed")
}
function openAdvertisment() {
  overlay.classList.remove("is-hidden")
  overlay.classList.add('animated')
  openAdvertismentBtn.classList.add("is-hidden")
  showVideoBtn.classList.add("showed")
}

function showVideo() {
  stopVideoBtn.classList.remove("showed")
  video.classList.add("opened")
  startVideoBtn.classList.add("showed")
  showVideoBtn.classList.remove("showed")
  showVideoBtn.classList.remove("showed-again")
  stopVideoBtn.classList.add("showed")
  backdrop.classList.add("showed")
}
function startVideo() {   
  if (video.paused) {
    startVideoBtn.classList.add("hidden")
    video.play()    
  } else {
    video.pause()
    startVideoBtn.classList.remove("hidden")
    // video.load()
  }
}
function stopVideo() {
  video.classList.remove("opened")
  startVideoBtn.classList.remove("showed")
  stopVideoBtn.classList.remove("showed")
  showVideoBtn.classList.add("showed-again")
  startVideoBtn.classList.remove("hidden")
  // video.pause()
  video.load()
  backdrop.classList.remove("showed")
}