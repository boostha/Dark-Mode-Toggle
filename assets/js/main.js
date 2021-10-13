const button = document.querySelector('.button');
const heroSection = document.querySelector('.hero');
const otherSection = document.querySelector('.other');
const angryCat = document.querySelector('.angry');
const happyCat = document.querySelector('.happy');
const happyCatText = document.querySelector('.cat-happy-text')
const catText = document.querySelector('.cat-text')

button.addEventListener('click', function() {

  heroSection.classList.toggle('hero-night');

  button.classList.toggle('button-night');
  
  catText.classList.toggle('visible-false');
  angryCat.classList.toggle('visible-false');
  happyCat.classList.toggle('visible-true');
  happyCatText.classList.toggle('visible-true');

  happyCatText.classList.toggle('shadow');
  document.querySelector('h1').classList.toggle('shadow');

  otherSection.classList.toggle('other-night')
})