const indicator = document.querySelector('.nav-indicator');
const items = document.querySelectorAll('.nav-item');
const menuToggle = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

function handleIndicator(el) {
  if (!el) return;

  items.forEach(item => {
    item.classList.remove('is-active');
    item.removeAttribute('style');
  });

  if (el.offsetWidth !== undefined && el.offsetLeft !== undefined) {
    indicator.style.width = `${el.offsetWidth}px`;
    indicator.style.left = `${el.offsetLeft}px`;
    indicator.style.backgroundColor = el.getAttribute('active-color');

    el.classList.add('is-active');
    el.style.color = el.getAttribute('active-color');
  }
}

items.forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    handleIndicator(e.target);

    const targetId = e.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });

  if (item.classList.contains('is-active')) {
    handleIndicator(item);
  }
});

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

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  nav.classList.toggle('active');
});

function updateActiveNavItem() {
  const sections = document.querySelectorAll('section');
  const scrollPosition = window.scrollY;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 50;
    const sectionBottom = sectionTop + section.offsetHeight;

    const link = document.querySelector(`.nav-item[href="#${section.id}"]`);

    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      handleIndicator(link);
    }
  });
}

window.addEventListener('scroll', updateActiveNavItem);

updateActiveNavItem();

setTimeout(() => {
  const loader = document.getElementById("loader");
  loader.style.transition = "opacity 0.5s ease-out";
  loader.style.opacity = "0";
  setTimeout(() => {
    loader.style.display = "none";
  }, 500);
}, 2000);

function openModal(element) {
  document.getElementById("modalImg").src = element.src;
  document.getElementById("modal").classList.add("show");
  document.body.classList.add("no-scroll");
}

function closeModal() {
  document.getElementById("modal").classList.remove("show");
  document.body.classList.remove("no-scroll");
}

function showTooltip(event) {
  const tooltip = document.getElementById("tooltip");
  tooltip.style.display = "block";
  moveTooltip(event);
}

function moveTooltip(event) {
  const tooltip = document.getElementById("tooltip");
  let x = event.pageX + 15;
  let y = event.pageY + 10;
  tooltip.style.left = x + "px";
  tooltip.style.top = y + "px";
}

function hideTooltip() {
  document.getElementById("tooltip").style.display = "none";
}



