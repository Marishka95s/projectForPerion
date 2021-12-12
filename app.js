const openAdvertismentBtn = document.querySelector("[data-show-advertisment]")
const closeAdvertismentBtn = document.querySelector("[data-close-advertisment]")
const overlay = document.querySelector("[data-overlay]")
const openBtn = document.querySelector(".button_main_show")

setTimeout(() => {
    openAdvertisment()
    console.log("opened");
  }, 1000);
console.log(closeAdvertismentBtn)
console.log(overlay)

openAdvertismentBtn.addEventListener('click', openAdvertisment)
closeAdvertismentBtn.addEventListener('click', closeAdvertisment)

function closeAdvertisment() {
  console.log('close click')
  overlay.classList.add("is-hidden")
  overlay.classList.remove('animated')
  openBtn.classList.remove("is-hidden")
}
function openAdvertisment() {
  console.log('open click')
  overlay.classList.remove("is-hidden")
  overlay.classList.add('animated')
  openBtn.classList.add("is-hidden")

  // Main functionality of advertisment:
  setTimeout(() => {
    console.log("hallo again");
  }, 0);
}