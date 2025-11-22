export const smoothScrollTo = (targetId, duration = 2000) => {
  const target = document.querySelector(targetId);
  if (!target) return;

  // Account for fixed navbar height (approximately 70-80px)
  const navbarHeight = 80;
  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;
  let animationId = null;
  let isScrolling = true;

  // Stop animation if user manually scrolls
  const stopAnimation = () => {
    isScrolling = false;
    cancelAnimationFrame(animationId);
    window.removeEventListener('wheel', stopAnimation);
    window.removeEventListener('touchmove', stopAnimation);
    window.removeEventListener('keydown', stopAnimation);
  };

  // Listen for user scroll events
  window.addEventListener('wheel', stopAnimation, { passive: true });
  window.addEventListener('touchmove', stopAnimation, { passive: true });
  window.addEventListener('keydown', stopAnimation);

  function animation(currentTime) {
    if (!isScrolling) return;
    
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);

    if (timeElapsed < duration) {
      animationId = requestAnimationFrame(animation);
    } else {
      // Clean up listeners when animation completes
      window.removeEventListener('wheel', stopAnimation);
      window.removeEventListener('touchmove', stopAnimation);
      window.removeEventListener('keydown', stopAnimation);
    }
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  animationId = requestAnimationFrame(animation);
};
