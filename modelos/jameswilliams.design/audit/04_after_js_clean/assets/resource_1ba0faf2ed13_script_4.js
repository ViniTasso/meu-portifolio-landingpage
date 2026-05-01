document.addEventListener('scroll', function() {
  const cards = document.querySelectorAll('.latest_case-wrapper:not(:first-child)');
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    const transitionStart = 700;
    const transitionEnd = 220;
    if (cardTop <= transitionStart && cardTop >= transitionEnd) {
      let percentage = (cardTop - transitionEnd) / (transitionStart - transitionEnd);
      let brightness = 30 + 70 * (1 - percentage);
      let grayscale = 100 * percentage;
      let scale = 1.01 - 0.01 * (1 - percentage);
      card.style.filter = `brightness(${brightness}%) grayscale(${grayscale}%)`;
      card.style.transform = `scale(${scale})`;
    } else if (cardTop < transitionEnd) {
      card.classList.add('light');
      card.classList.remove('dark');
      card.style.transform = 'scale(1)';
    } else {
      card.classList.add('dark');
      card.classList.remove('light');
      card.style.transform = 'scale(1.01)';
    }
  });
});
