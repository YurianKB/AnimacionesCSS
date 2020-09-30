$(document).ready(function(){

	$('.burgerMenuButton').click(function(){

		if ($('.burgerMenu').hasClass('active')) {

			$('.burgerMenu').removeClass('active');
		}else{

			$('.burgerMenu').addClass('active');
		}
	})
});

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("carouselItem");
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active"); 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].classList.add("active");
  setTimeout(showSlides, 4000);
}