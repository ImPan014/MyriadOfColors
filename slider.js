let sliderIndex = 0;
const sliderImages = document.querySelectorAll("#slider img");
const sliderInterval = setInterval(changeSlider, 5000);

function changeSlider() {
  sliderImages[sliderIndex].style.opacity = 0;
  sliderIndex = (sliderIndex + 1) % sliderImages.length;
  sliderImages[sliderIndex].style.opacity = 1;
}