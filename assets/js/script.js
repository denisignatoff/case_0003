let count = document.querySelectorAll('.recommendation__item').length;
let values = document.querySelectorAll('.recommendation__speciality .value')
let ratings = document.querySelectorAll('.recommendation__rating')

for (let i = 0; i < count; i++) {
  if (values[i].children.length === 3) {
    ratings[i].style.marginTop = '13px';
  } else if (values[i].children.length === 1) {
    ratings[i].style.marginTop = '47px';
  }
}

let menuicon = document.querySelector('.extraNav')
let images = ['cross.png', 'menu.png'];
let display = ['block', 'none'];
let counter = 0;

menuicon.onclick = function () {
  document.querySelector('.extraNav img').src = 'assets/img/' + images[counter];
  document.querySelector('.extraNav ul').style.display = display[counter];
  counter++;
  if (counter >= images.length) counter = 0;
}

let interval = setInterval(() => {
  let els = document.querySelectorAll('.our-work__img')
  for (let el of els) {
    if (el.getBoundingClientRect().bottom < innerHeight) {
      el.classList.add('animation')
      if (el === els[els.length - 1]) {
        clearInterval(interval)
      }
    }
  }
}, 100)

// popup

let login = document.getElementById('login__btn')
let reg = document.getElementById('reg__btn')
let regPopup = document.querySelector('.registration')
let loginPopup = document.querySelector('.authorization')
let blackBackground = document.querySelector('.black-background')
let popups = document.querySelector('.popups')
let closeBtn = document.querySelectorAll('.closePopup')

login.onclick = function() {
  blackBackground.style.display = 'block';
  popups.style.display = 'flex';
  loginPopup.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

reg.onclick = function() {
  blackBackground.style.display = 'block';
  popups.style.display = 'flex';
  regPopup.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

for (let btn of closeBtn) {
  btn.onclick = close;
}

function close() {
  blackBackground.style.display = 'none';
  popups.style.display = 'none';
  loginPopup.style.display = 'none';
  regPopup.style.display = 'none';
  document.body.style.overflow = 'auto';
}