const indicator = document.querySelector('.nav-indicator');
const items = document.querySelectorAll('.nav-item');
const menuToggle = document.querySelector('.hamburger');  // Atualizado para corresponder ao nome correto
const nav = document.querySelector('.nav');

// Função para animar o indicador
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

// Adicionando evento nos itens do menu
items.forEach(item => {
  item.addEventListener('click', e => handleIndicator(e.target));
  item.classList.contains('is-active') && handleIndicator(item);
});

// Animação de digitação
const typingText = document.getElementById('typing-text');
const words = ['Desenvolvedor Front-end', 'Freelancer', 'Entusiasta de Design', 'Apaixonado por Tecnologia'];
let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 40;
const pause = 1800;

function typeEffect() {
  const currentWord = words[wordIndex];
  const visibleText = isDeleting 
    ? currentWord.substring(0, letterIndex--) 
    : currentWord.substring(0, letterIndex++);

  typingText.textContent = visibleText;

  if (!isDeleting && letterIndex === currentWord.length) {
    setTimeout(() => (isDeleting = true), pause);
  } else if (isDeleting && letterIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
}

typeEffect();

// Menu responsivo
menuToggle.addEventListener('click', () => {
  // Alterna as classes active no botão e open na navegação
  menuToggle.classList.toggle('active');
  nav.classList.toggle('active');  // Corrigido de 'open' para 'active' para corresponder ao CSS
});



function openModal(element) {
  document.getElementById("modalImg").src = element.src;
  document.getElementById("modal").classList.add("show");
  document.body.classList.add("no-scroll"); // Bloqueia rolagem
}

function closeModal() {
  document.getElementById("modal").classList.remove("show");
  document.body.classList.remove("no-scroll"); // Libera rolagem
}



function showTooltip(event) {
  const tooltip = document.getElementById("tooltip");
  tooltip.style.display = "block";
  moveTooltip(event); // Garante que a posição inicial esteja certa
}

function moveTooltip(event) {
  const tooltip = document.getElementById("tooltip");
  let x = event.pageX + 15; // Posiciona ao lado do cursor
  let y = event.pageY + 10; // Ajuste vertical
  tooltip.style.left = x + "px";
  tooltip.style.top = y + "px";
}

function hideTooltip() {
  document.getElementById("tooltip").style.display = "none";
}
