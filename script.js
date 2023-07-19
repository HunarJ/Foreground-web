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

//Lihgtbox for video
const openLightboxLink = document.getElementById('openLightbox');
    const lightboxContainer = document.getElementById('lightboxContainer');
    const closeButton = document.getElementById('closeButton');
    const videoPlayer = document.getElementById('videoPlayer');
    openLightboxLink.addEventListener('click', function (event) {
      event.preventDefault();
      lightboxContainer.style.display = 'block';
      videoPlayer.play();
    });
    closeButton.addEventListener('click', function () {
      lightboxContainer.style.display = 'none';
      videoPlayer.pause(); // Pause the video when closing the lightbox
    });
    lightboxContainer.addEventListener('click', function (event) {
      if (event.target === lightboxContainer) {
        lightboxContainer.style.display = 'none';
        videoPlayer.pause(); // Pause the video when clicking outside the video
      }
    });

//Change navbar on scroll
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  const scrolled = window.scrollY > 0;
  // Add or remove the 'navbar-scrolled' class based on the scroll position
  if (scrolled) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
});

