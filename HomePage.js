// Mobile Nav
const mobDropdown1=document.querySelector('.mob-dropdown1');
const mobDropdown2=document.querySelector('.mob-dropdown2');
const mobileNav=document.querySelector('.mobile-nav');
const menu=document.querySelector('#menu');
const close=document.querySelector('#close');
const body=document.querySelector("body");


let mobDropdown1Active = false; // Set to false initially
let mobDropdown2Active = false; // Set to false initially

function showMobDropdown1() {
    if (mobDropdown1Active) {
        mobDropdown1.style.display = 'none';
      
        mobDropdown1Active = false;
    } else {
        mobDropdown1.style.display = 'block';
        mobDropdown1Active = true;
    }
}

   
function showMobDropdown2() {
  if (mobDropdown2Active) {
      mobDropdown2.style.display = 'none';
      mobDropdown2Active = false;
  } else {
      mobDropdown2.style.display = 'block';
      mobDropdown2Active = true;
  }
}


function showMobileNav() {
    mobileNav.style.display = 'block';
    menu.style.display = 'none';
    close.style.display = 'block';
}
function closeMobileNav() {
  mobileNav.style.display = 'none';
  close.style.display = 'none';
  menu.style.display = 'block';
}





// ----------------------------------------------------------------------------





// Swipper

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

