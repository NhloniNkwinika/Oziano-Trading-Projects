const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    
    nav.classList.toggle('nav-active');
    
    
    burger.classList.toggle('toggle');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
    });
});

///


 


  document.addEventListener('DOMContentLoaded', function() {
    const content = document.querySelector('.content-to-animate');

    
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      );
    }

    
    function handleScroll() {
      if (isElementInViewport(content)) {
        content.classList.add('content-visible');
        window.removeEventListener('scroll', handleScroll);
      }
    }
    window.addEventListener('scroll', handleScroll);
    handleScroll();
  });





  
  








  






 

 

 