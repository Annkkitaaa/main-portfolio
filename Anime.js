document.addEventListener('DOMContentLoaded', (event) => {
    anime.timeline({
      easing: 'easeOutElastic(1, .8)', // Changed easing for a more bouncy effect
      duration: 1200 // Increased duration for slower animation
    })
    .add({
      targets: '.nav__menu',
      opacity: [0, 1],
      translateY: ['-30px', '0px'],
      delay: 300
    })
    .add({
      targets: '.home__content, .home__img',
      opacity: [0, 1],
      translateY: ['30px', '0px'],
      scale: [0.9, 1], // Added scale effect
      delay: anime.stagger(300)
    }, '-=900') // Overlap with previous animation
    .add({
      targets: '.section',
      opacity: [0, 1],
      translateY: ['30px', '0px'],
      scale: [0.95, 1], // Added subtle scale effect
      delay: anime.stagger(300)
    }, '-=1000'); // Increased overlap for smoother transition
  
    // Add hover animation for buttons
    anime({
      targets: '.button',
      scale: 1.05,
      duration: 800,
      easing: 'easeOutElastic(1, .5)',
      autoplay: false
    });
  
    document.querySelectorAll('.button').forEach(button => {
      button.addEventListener('mouseenter', () => anime({
        targets: button,
        scale: 1.05,
        duration: 800,
        easing: 'easeOutElastic(1, .5)'
      }));
      button.addEventListener('mouseleave', () => anime({
        targets: button,
        scale: 1,
        duration: 600,
        easing: 'easeOutElastic(1, .5)'
      }));
    });
  });