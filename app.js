const openAdvertismentBtn = document.querySelector("[data-show-advertisment]")
const closeAdvertismentBtn = document.querySelector("[data-close-advertisment]")
const overlay = document.querySelector("[data-overlay]")

setTimeout(() => {
    openAdvertisment()
    console.log("opened");
  }, 2000);
console.log(closeAdvertismentBtn)
console.log(overlay)

openAdvertismentBtn.addEventListener('click', openAdvertisment)
closeAdvertismentBtn.addEventListener('click', closeAdvertisment)

function closeAdvertisment() {
  console.log('close click')
  overlay.classList.add("is-hidden")
  overlay.classList.remove('animated')
}
function openAdvertisment() {
  console.log('open click')
  overlay.classList.remove("is-hidden")
  overlay.classList.add('animated')

  // Main functionality of advertisment:
  setTimeout(() => {
    console.log("hallo again");
  }, 0);
}