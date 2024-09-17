$(document).ready(function() {
  // Smooth Scrolling
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000); // 1000ms = 1 second animation
        return false;
      }
    }
  });
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});


const typewriter = document.querySelector('.typewriter');
const texts = ["a Computer Engineer", "a Web Developer", "an Aspiring Full Stack Engineer", "a Freelancer", "a Gamer for Life"];
let textIndex = 0; 
let charIndex = 0; 
let isDeleting = false; 

const typingSpeed = 80; 
const deletingSpeed = 30; 
const pauseBetweenWords = 1500; 
const pauseBetweenLetters = 300; 

function typeEffect() {
  const currentText = texts[textIndex];
  

  if (isDeleting) {
    typewriter.textContent = currentText.substring(0, charIndex--);
  } else {
    typewriter.textContent = currentText.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentText.length) {
    setTimeout(() => isDeleting = true, pauseBetweenWords);
  }

  if (isDeleting && charIndex < 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length; 
    setTimeout(() => charIndex = 0, pauseBetweenLetters); 
  }

  const currentSpeed = isDeleting ? deletingSpeed : typingSpeed; 
  setTimeout(typeEffect, currentSpeed);
}

typeEffect(); 


