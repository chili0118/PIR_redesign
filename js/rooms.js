/* ROOMS 輪播換圖 */
var jindex = 0;
var r_nextBtn = document.querySelector("#rooms-next");
// console.log(r_nextBtn);
var r_prevBtn = document.querySelector("#rooms-prev");
// console.log(r_prevBtn);
var r_content = document.getElementsByClassName("r-i-content");
// console.log(r_content.length);
var r_title = document.getElementsByClassName("r-m-title");
// console.log(r_title);


function showTitle() {
  for (let r = 0; r < r_title.length; r++) {
    r_title[r].classList.remove("r-t-active");
  }
  r_title[jindex].classList.add("r-t-active");

};

function show_r_content() {
  for (let r = 0; r < r_content.length; r++) {
    r_content[r].classList.remove("rooms-active");
  }
  r_content[jindex].classList.add("rooms-active");
};

function clickTitle(r) {
  jindex = r;
  show_r_content();
  showTitle();
};

/* for (let r = 0; r < r_title.length; r++) {
  r_title[r].onclick = function () {
    clickTitle(r);
  };
}; */

function r_next() {
  jindex++;
  // console.log(+index);
  if (jindex == r_content.length) jindex = 0;
  show_r_content();
  showTitle();
};

function r_prev() {
  jindex--;
  if (jindex == -1) jindex = r_content.length - 1;
  show_r_content();
  showTitle();
};

r_nextBtn.onclick = r_next;
r_prevBtn.onclick = r_prev;