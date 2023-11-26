// Replace Text In Header
const checkReplace = document.querySelector('.replace-me');

if (checkReplace !== null) {
  const replace = new ReplaceMe(checkReplace, {
    animation: 'animated fadeIn',
    speed: 2000,
    separator: ',',
    loopCount: 'infinite',
    autoRun: true,
  });
}

// User Scroll For Navbar
function userScroll() {
   const navbar = document.querySelector('.navbar');
 
   window.addEventListener('scroll', () => {
     if (window.scrollY > 50) {
       navbar.classList.add('bg-dark');
       navbar.classList.add('border-bottom');
       navbar.classList.add('border-secondary');
       navbar.classList.add('navbar-sticky');
     } else {
       navbar.classList.remove('bg-dark');
       navbar.classList.remove('border-bottom');
       navbar.classList.remove('border-secondary');
       navbar.classList.remove('navbar-sticky');
     }
   });
 }
 
 document.addEventListener('DOMContentLoaded', userScroll);

 // Video Modal
const videoPlayBtn = document.querySelector('.video-btn');
const videoModal = document.querySelector('#videoModal');
const videoIFrame = document.querySelector('#video');
let videoSrc;

if (videoPlayBtn !== null) {
  videoPlayBtn.addEventListener('click', () => {
    videoSrc = videoPlayBtn.getAttribute('data-bs-src');
  });
}

if (videoModal !== null) {
  videoModal.addEventListener('shown.bs.modal', () => { // custom bootstrap event
    videoIFrame.setAttribute(
      'src',
      videoSrc + '?autoplay=1;modestbranding=1;showInfo=0'
    );
  });

  videoModal.addEventListener('hide.bs.modal', () => {
    videoIFrame.setAttribute('src', videoSrc);
  });
}
