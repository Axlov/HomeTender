"use strict";

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////BACK/////////////////////////////////////////////
////////////////////////////EXPRESS REQUIRE////////////////////////////////////

// const express = require("express");
// const https = require("https");
// const bodyParser = require("body-parser");

// const urlRandom = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

// const app = express();

// app.get("/index.html", function (req, res) {
//   res.sendFile(__dirname + "/index.html");
// });

// app.get("/sign.html", function (req, res) {
//   res.send("Server is up and running");
// });

// app.get("/today.html", function (req, res) {
//   https.get(urlRandom, function (response) {
//     const data = [];

//     response
//       .on("data", (d) => {
//         // paso tods los datos (d) al array vacio data
//         data.push(d);
//       })
//       .on("end", function () {
//         //at this point data is an array of Buffers,so Buffer.concat() can make us a new Buffer of all of them together
//         const buffer = Buffer.concat(data);
//         // ahora puedo pasar el buffer a string y finalmente hacer el parseJSON
//         const obj = JSON.parse(buffer.toString());
//         const drink = obj.drinks[0];

//         drinkName = drink.strDrink;
//         const drinkPreparation = drink.strInstructions;
//         console.log(drinkName, drinkPreparation);
//       });

//     res.sendFile(__dirname + "/today.html");
//   });
// });

// app.get("/public/styles.css", function (req, res) {
//   res.sendFile(__dirname + "/public/styles.css");
// });

// app.listen(5500, function () {
//   console.log("Server is running on port 5500");
// });

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////FRONT///////////////////////////////////////

if (typeof window !== "undefined") {
  // const nextBtn = document.getElementsByClassName("next")[0];
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");
  const slides = document.querySelectorAll(".carousel-image");
  const container = document.querySelector(".carousel");
  const dots = [...document.querySelectorAll(".dot")];

  const dotOne = dots[0];
  const dotTwo = dots[1];
  const dotThree = dots[2];

  console.log(nextBtn, prevBtn, slides, container, dots);
  // let curSlide = 0;

  ///////////////////// Carousel Function ////////////////////////////////

  // slides vars
  let curSlide = 2;
  const maxSlide = slides.length - 1;

  ///////Function Active Dots///////////////////

  function activeDot(curSlide) {
    dots.forEach((dot, index) => {
      if (index === curSlide) {
        dot.classList.toggle("active-dot");
      } else {
        dot.classList.remove("active-dot");
      }
    });
  }

  // //////Function that moves carousel/////////

  function moveCarousel(curSlide) {
    slides.forEach((slide, index) => {
      // loop on the array of slides and moovef

      slide.style.transform = `translateX(${(index - curSlide) * 100}%)`;

      //(index-curSlide) to always show slide at translateX(0%)
    });
    activeDot(curSlide);
  }

  // /////////////////AutoMove Carousel///////////////////////////////

  // moves carousel auto every 3 s

  setInterval(() => {
    curSlide === maxSlide ? (curSlide = 0) : curSlide++;
    moveCarousel(curSlide);
  }, 3000);

  // Buttons Functionality
  nextBtn.addEventListener("click", function () {
    // if the current slide is the maxSlide return to slide0 else current slide+1
    curSlide === maxSlide ? (curSlide = 0) : curSlide++;
    moveCarousel(curSlide);
  });

  prevBtn.addEventListener("click", function () {
    // same as with maxSlide
    curSlide === 0 ? (curSlide = maxSlide) : curSlide--;
    moveCarousel(curSlide);
  });

  dotOne.addEventListener("click", function () {
    //
    curSlide = 0;
    moveCarousel(curSlide);
  });

  dotTwo.addEventListener("click", function () {
    curSlide = 1;
    moveCarousel(curSlide);
  });

  dotThree.addEventListener("click", function () {
    curSlide = 2;
    moveCarousel(curSlide);
  });
}
