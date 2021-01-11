// open and close navigation menu
console.log("javascript working");
const openbtn = document.getElementById("open");
const closebtn = document.getElementById("close");
const menu = document.querySelector(".navbar");
openbtn.addEventListener("click", openMenu);
closebtn.addEventListener("click", closeMenu);

function openMenu() {
  // console.log('open');
  menu.classList.toggle("show");
}
function closeMenu() {
  // console.log('close');
  menu.classList.toggle("show");
}
// slider background image change

const rightBtn = document.getElementById("rightbtn");
const leftBtn = document.getElementById("leftbtn");
const frame = document.getElementById("frame");
const number = document.getElementById("dis-num");

rightBtn.addEventListener("click", toright);
leftBtn.addEventListener("click", toleft);

let bgArray = [
  "assets/bg_img.png",
  "https://images.unsplash.com/photo-1508873699372-7aeab60b44ab?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
  "https://images.unsplash.com/photo-1456324463128-7ff6903988d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1518349619113-03114f06ac3a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1488998527040-85054a85150e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
];

let bgIndex = 1;
leftBtn.classList.add("disabled");
function toright() {
  leftBtn.classList.remove("disabled");
  if (bgIndex < 6) {
    bgIndex++;

    if (bgIndex < 10) {
      number.innerText = "0" + bgIndex;
      if (bgIndex === 5) {
        rightBtn.classList.add("disabled");
      }
    } else {
      number.innerText = bgIndex;
    }
    frame.style.backgroundImage =
      "linear-gradient(3deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.017542051000087544) 100%),url(" +
      bgArray[bgIndex - 1] +
      ")";
  }
}
function toleft() {
  rightBtn.classList.remove("disabled");
  if (bgIndex > 1) {
    bgIndex--;
    if (bgIndex < 10) {
      number.innerText = "0" + bgIndex;
      if (bgIndex === 1) {
        leftBtn.classList.add("disabled");
      }
    } else {
      number.innerText = bgIndex;
    }
    frame.style.backgroundImage =
      "linear-gradient(3deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.017542051000087544) 100%),url(" +
      bgArray[bgIndex - 1] +
      ")";
  }
}
