"use strict";

let $cardList = document.querySelector(".card__list");
let $cardListChild = document.querySelector(".card__list").children;
let $cardStarWrapper = document.querySelector(".card__star-wrapper");
let $cardStar = $cardStarWrapper.querySelectorAll(".card__star-icon");
let $cardContent = document.querySelector(".card__content");
console.log($cardStar);

$cardList.addEventListener("click", function (event) {
  let target = event.target;
  if (target.className !== "card__item" && target.className !== "card__title")
    return;
  console.log(target);
  if (target.className == "card__item") {
    target.classList.add("card__item-active");
  } else {
    target.parentNode.classList.add("card__item-active");
  }

  if (target == $cardListChild[0] || target == $cardListChild[0].children[1]) {
    $cardListChild[1].classList.remove("card__item-active");
    $cardListChild[2].classList.remove("card__item-active");
    $cardContent.style.display = "block";
  }
  if (target == $cardListChild[1] || target == $cardListChild[1].children[1]) {
    $cardListChild[0].classList.remove("card__item-active");
    $cardListChild[2].classList.remove("card__item-active");
    $cardContent.style.display = "none";
  }
  if (target == $cardListChild[2] || target == $cardListChild[2].children[1]) {
    $cardListChild[0].classList.remove("card__item-active");
    $cardListChild[1].classList.remove("card__item-active");
    $cardContent.style.display = "none";
  }
});

$cardStarWrapper.addEventListener("click", function (event) {
  let target = event.target;
  if (target.tagName !== "use") return;
  console.log(target);
  target.parentNode.classList.toggle("card__star-active");
  console.log($cardStar);
});
