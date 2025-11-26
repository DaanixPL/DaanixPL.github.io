// Minimalny JS: toggle motywu + (opcjonalnie) adaptacja performansu
const toggle = document.getElementById('theme-toggle');
let dark = false;
toggle.addEventListener('click', () => {
  dark = !dark;
  document.documentElement.classList.toggle('dark', dark);
  toggle.textContent = dark ? '☀️' : '🌙';
});


document.querySelector('.logo').addEventListener('click', function(e) {
  e.preventDefault(); // Zapobiega domyślnemu zachowaniu linku
  
  const heroSection = document.querySelector('#hero');
  if (heroSection) {
    heroSection.scrollIntoView({
      behavior: 'smooth' // Płynne przewinięcie
    });
  } else {
    // Jeśli sekcja hero nie istnieje, po prostu wróć na górę strony
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
});
