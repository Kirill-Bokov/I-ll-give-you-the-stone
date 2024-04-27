const carouselList = document.querySelector(".order-active");
const prevButton = document.querySelector(".orders-nav-left");
const nextButton = document.querySelector(".orders-nav-right");

let currentPosition = 0;

prevButton.addEventListener("click", () => {
  if (currentPosition > 0) {
    currentPosition--;
    carouselList.style.transform = `translateX(${currentPosition * -183.5}px)`;
  }
});

nextButton.addEventListener("click", () => {
  if (currentPosition < carouselList.children.length - 6) {
    currentPosition++;
    carouselList.style.transform = `translateX(${currentPosition * -183.5}px)`;
  } else {
  }
});

const carouselListArchive = document.querySelector(".order-archive");
const prevButtonArchive = document.querySelector(".archive-nav-left");
const nextButtonArchive = document.querySelector(".archive-nav-right");

let currentPositionArchive = 0;

prevButtonArchive.addEventListener("click", () => {
  if (currentPositionArchive > 0) {
    currentPositionArchive--;
    carouselListArchive.style.transform = `translateX(${
      currentPositionArchive * -184
    }px)`;
  }
});

nextButtonArchive.addEventListener("click", () => {
  if (currentPositionArchive < carouselListArchive.children.length - 6) {
    currentPositionArchive++;
    carouselListArchive.style.transform = `translateX(${
      currentPositionArchive * -184
    }px)`;
  } else {
  }
});
