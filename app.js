const openAdvertismentBtn = document.querySelector("[data-show-advertisment]")
const closeAdvertismentBtn = document.querySelector("[data-close-advertisment]")
const overlay = document.querySelector("[data-overlay]")


const showVideoBtn = document.querySelector('.button_additional_plus')
const startVideoBtn = document.querySelector('.button_additional_play')
const stopVideoBtn = document.querySelector('.button_additional_close') 
const video = document.querySelector('.video')

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
}
function openAdvertisment() {
  overlay.classList.remove("is-hidden")
  overlay.classList.add('animated')
  openAdvertismentBtn.classList.add("is-hidden")
}

function showVideo() {
  video.classList.add("is-hidden")
  // overlay.classList.remove('animated')
  // openAdvertismentBtn.classList.remove("is-hidden")
}
function startVideo() {
  // overlay.classList.add("is-hidden")
  // overlay.classList.remove('animated')
  // openAdvertismentBtn.classList.remove("is-hidden")
}
function stopVideo() {
  // overlay.classList.add("is-hidden")
  // overlay.classList.remove('animated')
  // openAdvertismentBtn.classList.remove("is-hidden")
}