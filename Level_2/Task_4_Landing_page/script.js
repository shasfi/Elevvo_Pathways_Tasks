// Example JS for future interaction
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.card .btn');

  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Feature details will be added soon!');
    });
  });
});
const darkBtn = document.getElementById("theme-toggle");

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    darkBtn.textContent = document.body.classList.contains("dark") ? "Light Mode" : "Dark Mode";
});

// Fade-up animation on scroll
const faders = document.querySelectorAll('.feature-card, .testimonial-card, .pricing-card');

const appearOptions = {
    threshold: 0.2
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});