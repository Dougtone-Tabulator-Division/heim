document.addEventListener('DOMContentLoaded', () => {
  // Add chemical drop animation
  const hero = document.querySelector('.hero-animation');
  
  function createDrop() {
    const drop = document.createElement('div');
    drop.classList.add('chemical-drops');
    drop.style.left = Math.random() * 100 + '%';
    hero.appendChild(drop);
    
    drop.addEventListener('animationend', () => {
      drop.remove();
    });
  }

  setInterval(createDrop, 500);
});