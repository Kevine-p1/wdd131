// Light/Dark Mode Toggle with LocalStorage
const themeToggle = document.getElementById('theme-toggle');

themeToggle?.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const mode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', mode);
});

// Apply saved theme on load
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') document.body.classList.add('dark-mode');
});

// Contact Form Handling with localStorage
const contactForm = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');

contactForm?.addEventListener('submit', e => {
  e.preventDefault();
  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();

  if(name.length < 2 || !email.includes('@') || message.length < 10){
    feedback.textContent = 'Please fill all fields correctly.';
    return;
  }

  const submission = {id: Date.now(), name, email, message};
  const stored = JSON.parse(localStorage.getItem('contact_submissions') || '[]');
  stored.push(submission);
  localStorage.setItem('contact_submissions', JSON.stringify(stored));

  feedback.textContent = `Thanks, ${name}! Your message has been saved.`;
  contactForm.reset();
});
