/* ROOMS 輪播換圖 */
var pindex = 0;
var p_content = document.getElementsByClassName("public-content");
// console.log(p_content.length);
var p_title = document.getElementsByClassName("p-m-title");
// console.log(p_title);



function showTitle() {
  for (let p = 0; p < p_title.length; p++) {
    p_title[p].classList.remove("p-t-active");
  }
  p_title[pindex].classList.add("p-t-active");

};

function show_p_content() {
  for (let p = 0; p < p_content.length; p++) {
    p_content[p].classList.remove("p-c-active");
  }
  p_content[pindex].classList.add("p-c-active");
};

function clickTitle(p) {
  pindex = p;
  show_p_content();
  showTitle();
};

 for (let p = 0; p < p_title.length; p++) {
  p_title[p].onclick = function () {
    clickTitle(p);
  };
}; 



