document.addEventListener("DOMContentLoaded", () => {

  const articles = [...document.querySelectorAll('.project-grid article.text')];
  const dots = [...document.querySelectorAll('.progress-dot')];
  const fill = document.getElementById('progressFill');

  let activeIndex = -1;

  // Reveal animation
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.15 });

  // Active tracking
  const activeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const parent = entry.target.closest('li');
      const index = Number(parent.dataset.project);

      if (index === activeIndex) return;
      activeIndex = index;

      // Update dots
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
        dot.classList.toggle('visited', i < index);
      });

      // Update progress line
      const progress = index / (articles.length - 1) * 100;
      fill.style.height = progress + '%';
    });
  }, { threshold: 0.5 });

  // Observe all
  articles.forEach(el => {
    revealObserver.observe(el);
    activeObserver.observe(el);
  });

  // Dot click navigation
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      document.getElementById(`project-${i}`)
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });

  // Initial state
  setTimeout(() => {
    if (articles[0]) {
      articles[0].classList.add('revealed');
      dots[0].classList.add('active');
      activeIndex = 0;
    }
  }, 100);

});