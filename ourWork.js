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

const buttons = [];
for (let i = 1; i <= 7; i++) {
  buttons.push(document.querySelector(`.content-2 .buttons #b${i}`));
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Reset all buttons
    buttons.forEach((btn) => {
      btn.style.backgroundColor = "unset";
      btn.style.color = "unset";
    });

    // Apply styles to the clicked button
    button.style.backgroundColor = "#1e2d40";
    button.style.color = "#fff";
  });
});

// Particular



const container = document.querySelector(".container");

const container2Angular = document.querySelector(
  ".content-2 .container-2 .Angular"
);

const container2AspNetCore = document.querySelector(
  ".content-2 .container-2 .AspNetCore"
);

const container2Blazor = document.querySelector(
  ".content-2 .container-2 .Blazor"
);

const container2Meteor = document.querySelector(
  ".content-2 .container-2 .Meteor"
);
const container2Mobile = document.querySelector(
  ".content-2 .container-2 .Mobile"
);
const container2ReactApp = document.querySelector(
  ".content-2 .container-2 .ReactApp"
);
const container2WebPage = document.querySelector(
  ".content-2 .container-2 .WebPage"
);

const buttons2 = document.querySelectorAll(".content-2 .buttons button");

buttons2.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("Button clicked:", btn.textContent.trim());

    // ✅ Reset all containers and states before applying new state

    container.classList.remove("display-none");
    container2Angular.classList.remove("display-flex");
    container2AspNetCore.classList.remove("display-flex");
    container2Blazor.classList.remove("display-flex");
    container2Meteor.classList.remove("display-flex");
    container2Mobile.classList.remove("display-flex");
    container2ReactApp.classList.remove("display-flex");
    container2WebPage.classList.remove("display-flex");

    if (btn.textContent.trim() === "Angular") {
      container.classList.add("display-none");
      container2Angular.classList.add("display-flex");
    
    } else if (btn.textContent.trim() === "AspNet Core") {
      container.classList.add("display-none");
      container2AspNetCore.classList.add("display-flex");
    } else if (btn.textContent.trim() === "Blazor") {
      container.classList.add("display-none");
     
      container2Blazor.classList.add("display-flex");
    }else if(btn.textContent.trim() === "Meteor"){
      container.classList.add("display-none");
      
      container2Meteor.classList.add("display-flex");
    }else if(btn.textContent.trim() === "Mobile"){
      container.classList.add("display-none");
      container2Mobile.classList.add("display-flex");
    }else if(btn.textContent.trim() === "React App"){
      container.classList.add("display-none");
      container2ReactApp.classList.add("display-flex");
    }else if(btn.textContent.trim() === "Web Page"){
      container.classList.add("display-none");
      container2WebPage.classList.add("display-flex");
    }
  });
});
