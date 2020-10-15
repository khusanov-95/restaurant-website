
$(document).ready(function(){

//Slick slider
  $('.header-slider').slick({
      arrows: false,
      dots: true,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 3000,
      sccEase: 'linear',
      fade: true,
  });
  //Slick dots
  $('#slick-slide-control00').text("01");
  $('#slick-slide-control01').text("02");
  $('#slick-slide-control02').text("03");
  $('#slick-slide-control03').text("04");

  $('.testimonials-slider').slick({
    arrows: true,
    slidesToShow: 3,
    infinite: false,
    prevArrow:"<span class='prev-arrow'><i class='fas fa-arrow-left'></i></span>",
    nextArrow:"<span class='next-arrow'><i class='fas fa-arrow-right'></i></span>",
    responsive: [
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 665,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
});
$('#guests').styler();
//video button 
$('.video-cover__btn').click(function(){
  $('.video-cover').fadeOut("slow");
});

// Page scrolling 
  var scrollLink = $('.scroll');
  //Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000)
  })
//back to top btn
$(window).scroll(function() {
  if($(this).scrollTop() >40){
    $('.back-to-top__inner').fadeIn();
  } else {
    $('.back-to-top__inner').fadeOut();
  }
})

//preloader
$(window).on('load', function() {
  $('.preloader').delay(1000).fadeOut('slow');
})
});

//Js Light box 
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const images = document.querySelectorAll('.showcase__pic img');
images.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active');
    const img = document.createElement('img');
    img.src = image.src;
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img);
  });
});
lightbox.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return;
  lightbox.classList.remove('active');
})


