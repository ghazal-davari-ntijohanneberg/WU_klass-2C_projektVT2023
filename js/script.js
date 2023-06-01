var slideIndex = 1;
showDivs(slideIndex);

document.getElementById("left-hover").addEventListener("click", function() {
  plusDivs(-1);
});

document.getElementById("right-hover").addEventListener("click", function() {
  plusDivs(1);
});

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  
  if (n > x.length) {
    slideIndex = 1;
  }
  
  if (n < 1) {
    slideIndex = x.length;
  }
  
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  
  x[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " w3-white";
}

const burger = document.getElementById('burger')
const linkList = document.getElementById('link_list')

function toggleMenu() {
    linkList.classList.toggle('link_list_visible')
    burger.classList.toggle('burger_in_x_form')
}

burger.addEventListener('click', toggleMenu)

var slides = document.getElementsByClassName('slide');
var currentSlide = 0;

function showSlide() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  currentSlide++;
  if (currentSlide > slides.length) {
    currentSlide = 1;
  }

  slides[currentSlide - 1].style.display = 'block';

  setTimeout(showSlide, 3000); 
}

showSlide();