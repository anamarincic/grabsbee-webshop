//slide

var slideIndex = 0;
showSlides(slideIndex);


function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("hero-slider-item");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length-1) {slideIndex = 0}    
    if (n < 0) {slideIndex = slides.length-1}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" dots", "");
    }
    slides[slideIndex].style.display = "block";  
    dots[slideIndex].className += " dots";
  }
