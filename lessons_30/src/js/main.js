"use strict";

// the task 1
document.addEventListener("DOMContentLoaded", () => {
  let $box = document.querySelector(".box");
  let $text = document.querySelector(".box__text");
  let $textarea = document.querySelector(".textarea");

  document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.code == "KeyE") {
      event.preventDefault();
      $textarea.innerText = $text.textContent.replace(/\s+/g, " ");
      $box.style.visibility = "hidden";
      $textarea.style.display = "block";
    }
    if (event.ctrlKey && event.code == "KeyR") {
      event.preventDefault();
      $box.innerText = $textarea.value;
      $textarea.style.display = "none";
      $box.style.visibility = "visible";
    }
  });
});

// the task 2

document.addEventListener("DOMContentLoaded", () => {
  let $table = document.querySelector(".table");
  let getArrNumbers = ($colum) => {
    $colum = [].map.call(document.querySelectorAll(`${$colum} TD`), function (
      el
    ) {
      return el.textContent;
    });
    return $colum;
  };
  $table.addEventListener("click", function () {
    let target = event.target;
    if (target.tagName !== "TH") return;
    let $colum = target.parentNode.id;
    let columSort = getArrNumbers(`#${$colum}`).sort(function (a, b) {
      return a - b;
    });
    $colum = document.querySelectorAll(`#${$colum} TD`);
    $colum.forEach((el, id) => {
      el.innerText = columSort[id];
    });
  });
});
