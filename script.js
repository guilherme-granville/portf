const indicator = document.querySelector('.nav-indicator');
const items = document.querySelectorAll('.nav-item');

function handleIndicator(el) {
  items.forEach(item => {
    item.classList.remove('is-active');
    item.removeAttribute('style');
  });

  indicator.style.width = `${el.offsetWidth}px`;
  indicator.style.left = `${el.offsetLeft}px`;
  indicator.style.backgroundColor = el.getAttribute('active-color');

  el.classList.add('is-active');
  el.style.color = el.getAttribute('active-color');
}


items.forEach((item, index) => {
  item.addEventListener('click', e => {handleIndicator(e.target);});
  item.classList.contains('is-active') && handleIndicator(item);
});



const typingText = document.getElementById('typing-text');

// Palavras que serão exibidas
const words = ['Desenvolvedor Front-end', 'Freelancer', 'Entusiasta de Design', 'Apaixonado por Tecnologia'];

let wordIndex = 0; // Índice da palavra atual
let letterIndex = 0; // Índice da letra atual
let isDeleting = false; // Controla se está apagando ou escrevendo
const typingSpeed = 100; // Velocidade de digitação (ms)
const deletingSpeed = 50; // Velocidade de apagar (ms)
const pause = 1500; // Pausa entre as palavras (ms)

function typeEffect() {
  const currentWord = words[wordIndex];
  const visibleText = isDeleting 
    ? currentWord.substring(0, letterIndex--) 
    : currentWord.substring(0, letterIndex++);

  typingText.textContent = visibleText;

  // Quando acabar de escrever/apagar a palavra
  if (!isDeleting && letterIndex === currentWord.length) {
    setTimeout(() => (isDeleting = true), pause); // Pausa antes de apagar
  } else if (isDeleting && letterIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length; // Próxima palavra
  }

  setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
}

// Inicia a animação
typeEffect();
