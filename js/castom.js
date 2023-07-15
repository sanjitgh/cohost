// counter
$(".number").counterUp({ time: 3000 });

// carousel
$(document).ready(function () {
  $(".customer_carousel").owlCarousel({
    items: 3,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    smartSpeed: 400,
    responsive: {
      0: {
        items:1
      },
      576: {
        items:2,
      },
      992: {
        items:3,
      },
    },
  });
});

//   toggle
let menutoggle = document.querySelector(".toggle");
menutoggle.onclick = function () {
  menutoggle.classList.toggle("active");
};

// wow animation
new WOW().init();


// sticky header
$(window).scroll(function() {    
	var scroll = $(window).scrollTop();
	if (scroll >= 50) {
		$(".main_header").addClass("header_bg");
	} else {
		$(".main_header").removeClass("header_bg");
	}
 });


//  //////////

$(document).ready(function(){
  $('ul.tabs li').click(function(){
      var tab_id = $(this).attr('data-tab');
      $('ul.tabs li').removeClass('current');
      $('.tab-content').removeClass('current');
      $(this).addClass('current');
      $("#"+tab_id).addClass('current');
  })
})
