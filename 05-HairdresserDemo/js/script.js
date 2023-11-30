// User Scroll For Navbar
function userScroll() {
   const navbar = document.querySelector('.navbar');
 
   window.addEventListener('scroll', () => {
     if (window.scrollY > 50) {
       navbar.classList.add('border-bottom');
       navbar.classList.add('border-primary');
       navbar.classList.add('navbar-sticky');
     } else {
       navbar.classList.remove('border-bottom');
       navbar.classList.remove('border-primary');
       navbar.classList.remove('navbar-sticky');
     }
   });
 }
 
 document.addEventListener('DOMContentLoaded', userScroll);
