document.addEventListener('DOMContentLoaded', () => {
  // ===== THEME (light/dark) =====
  const toggleBtn = document.getElementById('theme-toggle');
  const body = document.body;

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    toggleBtn.textContent = '🌙';
  } else {
    // Por defecto: modo claro
    body.classList.remove('dark-mode');
    toggleBtn.textContent = '☀️';
  }

  toggleBtn.addEventListener('click', () => {
    const isDark = body.classList.toggle('dark-mode');
    toggleBtn.textContent = isDark ? '🌙' : '☀️';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  // ===== TILT EFFECT ON CARDS =====
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 30;
      const rotateY = (centerX - x) / 30;
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
  });

  console.log('Alberto Baena\'s portfolio loaded in', 
    body.classList.contains('light-mode') ? 'light' : 'dark', 'mode');
});