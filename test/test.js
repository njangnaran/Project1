const toggleBtn = document.querySelector(".navbar_toggleBtn");
const menu = document.querySelector(".navbar_menu");
const icons = document.querySelector(".navbar_icons");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  icons.classList.toggle("active");
});

var ani1 = false;
var ani2 = false;
$(".page").on("mousewheel", function (e) {
  var wheel = e.originalEvent.wheelDelta;
  if (wheel > 0) {
    //스크롤 올릴때
  } else {
    //스크롤  내릴때
    if (ani1 == false) {
      ani1 = true;
      $(".page1 .title").addClass("ani");
      $(".page1 .sect1img").addClass("ani");
    } else if (ani2 == false) {
      ani2 = true;
      $(".page1 .con").addClass("ani");
    } else {
      $(".sectmain").css("overflow", "auto");
    }
  }
});
