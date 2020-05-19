"use strict";

// the task 1

let playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN",
  },
  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY",
  },
  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD",
  },
  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER",
  },
  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER",
  },
  {
    author: "AC/DC",
    song: "BACK IN BLACK",
  },
  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU",
  },
  {
    author: "METALLICA",
    song: "ENTER SANDMAN",
  },
];

const showPlaylist = () => {
  let $list = document.createElement("ol");
  document.body.append($list);

  playList.forEach((el) => {
    let $listItem = document.createElement("li");
    $listItem.append(`${el.author} - ${el.song} `);
    $list.append($listItem);
  });
};

// showPlaylist();

// the task 2

const showModalWindow = () => {
  let $btnOpen = document.getElementById("btn-open");
  let $modal = document.getElementById("modal");
  let $btnClose = document.getElementById("btn-close");
  $btnOpen.onclick = () => {
    $modal.style.display = "block";
  };
  $btnClose.onclick = () => {
    $modal.style.display = "none";
  };
};

showModalWindow();

// the task 3

let changeColor = () => {
  let $trafficLight = document.querySelectorAll("#list li");
  let $button = document.getElementById("btn-click");
  $trafficLight = [...$trafficLight];
  $button.onclick = () => {
    $trafficLight[0].style.backgroundColor = "red";
    $button.onclick = () => {
      $trafficLight[1].style.backgroundColor = "yellow";
      if (($trafficLight[1].style.backgroundColor = "yellow")) {
        $trafficLight[0].style.backgroundColor = "white";
      }
      $button.onclick = () => {
        $trafficLight[2].style.backgroundColor = "green";
        if (($trafficLight[2].style.backgroundColor = "green")) {
          $trafficLight[1].style.backgroundColor = "white";
          $button.onclick = () => {
            changeColor();
            if (($trafficLight[2].style.backgroundColor = "green")) {
              $trafficLight[2].style.backgroundColor = "white";
            }
          };
        }
      };
    };
  };
};
changeColor();
