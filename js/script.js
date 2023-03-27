// первый слайдер
const slider = document.querySelector('.corousel-container');
const sliders = slider.children;
const rBtn = document.querySelector('._right-btn-sixth-cont');
const lBtn = document.querySelector('._left-btn-sixth-cont');
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

  slider.lastElementChild.remove();
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

  slider.firstElementChild.remove();
};
rBtn.addEventListener('click', moveRight);
lBtn.addEventListener('click', moveLeft);
// конец первого слайдера
// начало второго слайдера

const slider2 = document.querySelector('.what-our-student-say__quote-viewport');
const sliders2 = slider2.children;
const rBtn2 = document.querySelector('._right-btn-say-courusel');
const lBtn2 = document.querySelector('._left-btn-say-courusel');
let count2 = 0;
let stepCount = 0;
let lastSlide2 = slider2.lastElementChild.cloneNode(true);
slider2.prepend(lastSlide2);
lastSlide2.style.left = `${
  parseInt(getComputedStyle(sliders2[1]).width) + 210
}px`;
for (let i = 1; i <= sliders2.length - 1; i++) {
  sliders2[i].style.left = `${
    parseInt(getComputedStyle(sliders2[i].previousElementSibling).left) -
    parseInt(getComputedStyle(sliders2[i]).width) -
    105
  }px`;
}
const steps = document.querySelector('.what-our-student-say__step-indicator');
for (let i = 1; i <= sliders2.length - 2; i++) {
  const newStep = steps.firstElementChild.cloneNode(true);
  newStep.classList.remove('_active');
  steps.append(newStep);
}
const moveRight2 = () => {
  count2 = count2 + parseInt(getComputedStyle(sliders2[1]).width) + 105;
  for (let slide of sliders2) {
    slide.style.transform = `translateX(${count2}px)`;
  }
  stepCount++;

  const activeDot = document.querySelector('._active');
  if (stepCount == steps.children.length) {
    activeDot.classList.remove('_active');
    steps.firstChild.nextElementSibling.classList.add('_active');
    stepCount = 0;
  } else {
    activeDot.nextElementSibling.classList.add('_active');
    activeDot.classList.remove('_active');
  }
  let newSlide = slider2.firstElementChild.nextElementSibling.cloneNode(true);
  slider2.append(newSlide);
  newSlide.style.left = `${
    parseInt(slider2.lastElementChild.previousElementSibling.style.left) -
    parseInt(getComputedStyle(sliders2[1]).width) -
    105
  }px`;
  slider2.firstElementChild.remove();
};
const moveLeft2 = () => {
  count2 = count2 - parseInt(getComputedStyle(sliders2[1]).width) - 105;
  for (let slide of sliders2) {
    slide.style.transform = `translateX(${count2}px)`;
  }
  stepCount--;

  const activeDot = document.querySelector('._active');
  if (stepCount == -1) {
    steps.lastElementChild.classList.add('_active');
    activeDot.classList.remove('_active');
    stepCount = sliders2.length - 2;
  } else {
    activeDot.previousElementSibling.classList.add('_active');
    activeDot.classList.remove('_active');
  }
  let newSlide =
    slider2.lastElementChild.previousElementSibling.cloneNode(true);
  slider2.prepend(newSlide);
  newSlide.style.left = `${
    parseInt(slider2.firstElementChild.nextElementSibling.style.left) +
    parseInt(getComputedStyle(sliders2[1]).width) +
    105
  }px`;

  slider2.lastElementChild.remove();
};
rBtn2.addEventListener('click', moveRight2);
lBtn2.addEventListener('click', moveLeft2);
/*












*/
