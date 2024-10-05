const carousels = document.querySelectorAll('.carousel');

carousels.forEach((carouselContainer, index) => {
  let currentIndex = 0; // Initialize the current index for each carousel

  // Get the prev and next buttons for this specific carousel
  const prevButton = carouselContainer.parentElement.querySelector('.prev');
  const nextButton = carouselContainer.parentElement.querySelector('.next');

  // Get the total number of images in the current carousel
  const images = carouselContainer.querySelectorAll('.climate-image');
  
  // Event listener for "next" button
  nextButton.addEventListener('click', () => {
    currentIndex = 1; // Always switch to the second image
    updateCarousel(carouselContainer, currentIndex);
  });

  // Event listener for "prev" button
  prevButton.addEventListener('click', () => {
    currentIndex = 0; // Always switch back to the first image
    updateCarousel(carouselContainer, currentIndex);
  });
});

// Function to update the carousel based on the current index
function updateCarousel(carousel, currentIndex) {
  const translateX = -currentIndex * 100; // Moves the carousel by image width
  carousel.style.transform = `translateX(${translateX}%)`;
}