// let today = new Date().toISOString().substr(0, 10);
// document.querySelector("#today").value = today;

// document.querySelector("#today2").valueAsDate = new Date();
$(".navbox").hide();

$("#menu").click(function () {
    $(".navbox").show();
});

$("#close").click(function () {
    $(".navbox").fadeOut();
});

var index = 0;
var prevBtn = document.querySelector(".prev-btn")
// console.log(prevBtn);
var nextBtn = document.querySelector(".next-btn");
// console.log(nextBtn);
var bigimg = document.getElementsByClassName("bimg");
// console.log(bigimg.length);
var smallimg = document.getElementsByClassName("simg");

var textarea = document.getElementsByClassName("land-text");


function prev() {
    index--;
    if (index == -1) index = bigimg.length -1;
    showbimg();
    showsimg();
    showtext();
}


function next() {
    index++;

    if (index == bigimg.length) index = 0;
    // console.log("編號:" + index);
    showbimg();
    showsimg();
    showtext();
};

prevBtn.onclick = prev;
nextBtn.onclick = next;

function showbimg() {
    for (let i = 0; i < bigimg.length; i++) {
        bigimg[i].classList.remove("bimg-active");
    }
    bigimg[index].classList.add("bimg-active");
};

function showsimg() {
    for (let s = 0; s < smallimg.length; s++) {
        smallimg[s].classList.remove("simg-active");
    }
    smallimg[index].classList.add("simg-active");
}

function showtext() {
    for (let t = 0; t < textarea.length; t++) {
        textarea[t].classList.remove("text-active");
    }
    textarea[index].classList.add("text-active");
}


$(".box-close").click(function () {
    $("#news-box").hide();
});


// 往下捲動

(function() {
    'use strict';
  
    var btnScrollDown = document.querySelector('#scroll_down');
  
    function scrollDown() {
      var windowCoords = document.documentElement.clientHeight;
      (function scroll() {
        if (window.pageYOffset < windowCoords) {
          window.scrollBy(0, 10);
          setTimeout(scroll, 0);
        }
        if (window.pageYOffset > windowCoords) {
          window.scrollTo(0, windowCoords);
        }
      })();
    }
  
    btnScrollDown.addEventListener('click', scrollDown);
  })();


