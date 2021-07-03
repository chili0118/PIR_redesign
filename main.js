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


// 公告關閉按鈕設定
$(".box-close").click(function () {
    $("#news-box").hide();
});


// 首頁按鈕設定
var index = 0;
var prevBtn = document.querySelector(".prev-btn");
// console.log(prevBtn);
var nextBtn = document.querySelector(".next-btn");
// console.log(nextBtn);
var bigimg = document.getElementsByClassName("bimg");
// console.log(bigimg.length);
var smallimg = document.getElementsByClassName("simg");

var textarea = document.getElementsByClassName("land-text");


var r_nextBtn = document.querySelector("#rooms-next");
// console.log(r_nextBtn);
var r_prevBtn = document.querySelector("#rooms-prev");
// console.log(r_prevBtn);
var r_content = document.getElementsByClassName("r-i-content");
// console.log(r_content.length);
var r_title = document.getElementsByClassName("r-m-title");
// console.log(r_title);



// 首頁按鈕設定
function prev() {
    index--;
    if (index == -1) index = bigimg.length -1;
    showbimg();
    showsimg();
    showtext();
};


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
};

function showtext() {
    for (let t = 0; t < textarea.length; t++) {
        textarea[t].classList.remove("text-active");
    }
    textarea[index].classList.add("text-active");
};

function showTitle() {
    for (let r = 0; r < r_title.length; r++) {
        r_title[r].classList.remove("r-t-active");
    }
    r_title[index].classList.add("r-t-active");

};

function clickTitle(r) {
    index = r;
    show_r_content();
    showTitle();
};

for (let r = 0; r < r_title.length; r++) {
    r_title[r].onclick = function() {
        clickTitle(r);
    };
};

function r_next() {
    index++;
    // console.log(+index);
    if (index == r_content.length) index = 0;
    show_r_content();
    showTitle();
};

function r_prev() {
    index--;
    if (index == -1) index = r_content.length -1;
    show_r_content();
    showTitle();
};

function show_r_content() {
    for (let r = 0; r < r_content.length; r++) {
        r_content[r].classList.remove("rooms-active");
    }
    r_content[index].classList.add("rooms-active");
};

r_nextBtn.onclick = r_next;
r_prevBtn.onclick = r_prev;










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


