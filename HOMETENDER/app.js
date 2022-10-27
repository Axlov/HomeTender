"use strict";

const nextBtn = document.getElementsByClassName("next");
const prevBtn = document.getElementsByClassName("prev");
const slides = document.getElementsByClassName("carousel-image");
const mega = document.getElementsByClassName("carousel");

console.log(nextBtn, prevBtn, slides, mega);

// let curSlide = 0;

nextBtn.addEventListener("click", function () {
  console.log(`qewqe`);
  curSlide++;

  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
  );
});
