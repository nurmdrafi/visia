
/// Preloader /// ==>

$(window).on('load', function () {
  $('.preloader-inner').fadeOut();
  $('#preloader').delay(600).fadeOut();
});

/// Smooth scrolling /// ==>

$('nav a').on('click', function () {
  const scrollAnchor = $(this).attr('data-scroll'),
    scrollPoint =
      $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 65;

  $('body,html').animate(
    {
      scrollTop: scrollPoint,
    },
    500
  );

  return false;
});

/// Navigation change on scroll /// ==>

$(window).scroll(function () {
  let windscroll = $(window).scrollTop();
  if (windscroll >= 0) {
    //This value must be "0" for active #Home by default//
    $('.wrapper section').each(function (i) {
      if ($(this).position().top <= windscroll + 70) {
        $('.navbar-nav a.active').removeClass('active');
        $('.navbar-nav a').eq(i).addClass('active');
      }
    });
  } else {
    $('.navbar-nav a.active').removeClass('active');
    $('.navbar-nav a:first').addClass('active');
  }
});

/// TEXT SLIDER /// ==>

const swiper = new Swiper('.text-slider', {
  direction: 'vertical',
  autoplay: {
    delay: 1800,
  },
});

/// GALLERY FILTER /// ==>

const filterContainer = document.querySelector(".gallery-filter");
const galleryItems = document.querySelectorAll(".gallery-item");

filterContainer.addEventListener("click", (event) =>{
  if(event.target.classList.contains("filter-item")){

    // deactivate existing active 'filter-item'
    filterContainer.querySelector(".active").classList.remove("active");

    // activate new 'filter-item'
    event.target.classList.add("active");

    const filterValue = event.target.getAttribute("data-filter");

    galleryItems.forEach((item) =>{

      if(item.classList.contains(filterValue) || filterValue === 'all'){
        item.classList.remove("hide");
         item.classList.add("show");
      }

      else{
        item.classList.remove("show");
        item.classList.add("hide");
      }

     });
  }
});


/// CLIENT SLIDE SHOW /// ==>

const slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName('mySlides');
  const dots = document.getElementsByClassName('dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}

/// AOS JS /// ==>

AOS.init();
