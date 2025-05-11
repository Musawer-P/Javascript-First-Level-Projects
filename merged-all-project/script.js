 const cards = document.querySelectorAll('.card');
  let currentIndex = 1; // Start with center one active

  function updateCards() {
    cards.forEach((card, index) => {
      card.classList.remove('active');
      if (index === currentIndex) {
        card.classList.add('active');
      }
    });
  }

  function navigate(direction) {
    currentIndex = (currentIndex + direction + cards.length) % cards.length;
    updateCards();
  }