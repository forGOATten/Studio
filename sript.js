

window.addEventListener('scroll', function() {
  const slideUpText = document.querySelector('.slide-up-text');
  const triggerPoint = 0.75;  // Adjust as needed (0 to 1)
  const scrollPosition = window.scrollY;
  const elementHeight = slideUpText.offsetHeight;
  const viewportHeight = window.innerHeight;
  const elementTop = slideUpText.getBoundingClientRect().top;

  // Calculate the point when the element reaches the trigger point in the viewport
  const triggerDistance = elementHeight * triggerPoint;
  const elementInView = elementTop + triggerDistance < viewportHeight;

  if (elementInView) {
    slideUpText.style.opacity = 1;
    slideUpText.style.transform = 'translateY(0px)';
  }
})



window.addEventListener('scroll', function() {
	const delay = 0.3; // Adjust delay in seconds
  const slideUpText = document.querySelector('.slide-up-text2');
   const scrollPosition = window.scrollY;
  const elementTop = slideUpText.getBoundingClientRect().top;
  const elementHeight = slideUpText.offsetHeight;
  const viewportHeight = window.innerHeight;

  // Check if the element is visible within the viewport
  const isVisible = scrollPosition > (elementTop + elementHeight - viewportHeight);

  if (isVisible) {
    // Add a delay before showing the element
    setTimeout(function() {
      slideUpText.classList.add('in-view');
    }, delay * 1000); // Convert delay to milliseconds
  } else {
    slideUpText.classList.remove('in-view');
  }
});