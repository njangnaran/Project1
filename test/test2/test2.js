const toggleBtn = document.querySelector(".navbar_toggleBtn");
const menu = document.querySelector(".navbar_menu");
const icons = document.querySelector(".navbar_icons");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  icons.classList.toggle("active");
});

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 5000);
}

var slideIndex1 = 0;
showSlides1();

function showSlides1() {
  var j;
  var slides1 = document.getElementsByClassName("sect3area");
  for (j = 0; j < slides1.length; j++) {
    slides1[j].style.display = "none";
  }
  slideIndex1++;
  if (slideIndex1 > slides1.length) {
    slideIndex1 = 1;
  }
  slides1[slideIndex1 - 1].style.display = "block";
  setTimeout(showSlides1, 5000);
}
