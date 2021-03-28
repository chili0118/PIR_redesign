// let today = new Date().toISOString().substr(0, 10);
// document.querySelector("#today").value = today;

// document.querySelector("#today2").valueAsDate = new Date();

$("#menu").click (function() {
    $(".navbox").fadeIn(1500);
});

$("#close").click (function() {
    $(".navbox").fadeOut();
});

var index = 0;
var nextBtn = document.querySelector(".next-btn");
// console.log(nextBtn);
var bigimg = document.getElementsByClassName("bimg");
// console.log(bigimg.length);
var smallimg = document.getElementsByClassName("simg");

var title = document.getElementsByClassName("land-title");
var p = document.getElementsByClassName("land-p");


function next() {
    index++;

    if(index == bigimg.length) index = 0;
    // console.log("編號:" + index);
    showbimg();
    showsimg();
    showtitle();
    showp();
};

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

function showtitle() { 
    for (let t = 0; t < title.length; t++) {
        title[t].classList.remove("title-active");
    }
    title[index].classList.add("title-active");
 }

 function showp() { 
     for (let tp = 0; tp < p.length; tp++) {
         p[tp].classList.remove("p-active");
     }
     p[index].classList.add("p-active");
  }

  $(".box-close").click (function () {
      $("#news-box").hide();
  })

