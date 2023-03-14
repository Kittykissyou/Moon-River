const slider = document.querySelector('.corousel-container');
const sliders = slider.children;
const rBtn = document.querySelector('._right-btn');
const lBtn = document.querySelector('._left-btn');
let count = 0;
let previousSlide = slider.lastElementChild.cloneNode(true);
slider.prepend(previousSlide);
previousSlide.style.left = `-${
  parseInt(getComputedStyle(previousSlide).width) + 30
}px`;
let lastSlide = slider.firstElementChild.nextElementSibling.cloneNode(true);
lastSlide.style.left = `${parseInt(getComputedStyle(slider).width) + 30}px`;
slider.append(lastSlide);
const moveRight = () => {
  count = count + 315;
  for (let slide of sliders) {
    slide.style.transform = `translateX(${count}px)`;
  }

  let newSlide = sliders[3].cloneNode(true);
  slider.prepend(newSlide);
  let nearBlock = newSlide.nextElementSibling;
  newSlide.style.left = `${parseInt(getComputedStyle(nearBlock).left) - 315}px`;
  setTimeout(() => {
    slider.lastElementChild.remove();
  }, 1000);
};
const moveLeft = () => {
  count = count - 315;
  for (let slide of sliders) {
    slide.style.transform = `translateX(${count}px)`;
  }
  let newSlide = sliders[2].cloneNode(true);
  slider.append(newSlide);
  let nearBlock = newSlide.previousElementSibling;
  newSlide.style.left = `${parseInt(getComputedStyle(nearBlock).left) + 315}px`;
  setTimeout(() => {
    slider.firstElementChild.remove();
  }, 1000);
};
rBtn.addEventListener('click', moveRight);
lBtn.addEventListener('click', moveLeft);
