const menuToggle = document.querySelector(".menu-toggle");
const navList = document.querySelector(".nav-list");
menuToggle.addEventListener("click", function () {
  this.classList.toggle("active");
  navList.classList.toggle("active");
});

//Loading number function
let valueDisplays = document.querySelectorAll(".loading_number");
let interval = 1500;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

//Change color of navbar with on hover on nav-link
const navbar = document.getElementById("navbar");
const navbarLinks = document.getElementsByClassName("navbar-link");
for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("mouseover", function () {
    navbar.classList.add('navbar-hover');

  });
  navbarLinks[i].addEventListener("mouseout", function () {
    navbar.classList.remove('navbar-hover');
  });
}


//Fadeup effect
const observerOptions = {
  root: null,
  threshold: 0,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
      }
  });
}, observerOptions);

window.addEventListener('DOMContentLoaded', (event) => {

const sections = Array.from(document.getElementsByClassName('fadeup'));

for (let section of sections) {
observer.observe(section);
}

});
