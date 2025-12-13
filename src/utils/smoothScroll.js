/**
 * Custom smooth scroll function using requestAnimationFrame
 * This provides consistent smooth scrolling across all browsers
 */
export const smoothScrollTo = (targetId, offset = 120) => {
  const element = document.getElementById(targetId);
  if (!element) return;

  // Calculate the maximum scrollable position
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  
  // Calculate target position with offset
  let targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
  
  // If target is near the bottom, scroll to the maximum position instead
  // This ensures the contact section scrolls fully into view
  if (targetPosition > maxScroll) {
    targetPosition = maxScroll;
  }
  
  // Ensure we don't scroll to negative values
  targetPosition = Math.max(0, targetPosition);
  
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 800; // Duration in milliseconds
  let startTime = null;

  // Easing function for smooth deceleration
  const easeInOutCubic = (t) => {
    return t < 0.5 
      ? 4 * t * t * t 
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutCubic(progress);
    
    window.scrollTo(0, startPosition + distance * ease);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

