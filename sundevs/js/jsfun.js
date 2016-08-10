$(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); 
 $(document).ready(function(){
      $('.slider').slider({full_width: true});
    });

$(document).scroll(function() {
        var dHeight = $(this).height()-1000;
         if (dHeight >= $(this).scrollTop()) {
             $('nav').css('background', 'rgba(62,62,62,'+ $(this).scrollTop() * dHeight + ')');
 
  }
});
      
/* Who we are */
Materialize.scrollFire(options); 
  var options = [ 
      {selector: '#credo', offset: 800, callback: function() {
          Materialize.showStaggeredList("#lista", 6500 ); } }/*
                 {selector: '.credo', offset: 200, callback: function() { Materialize.fadeInImage(".credo", 2500 ); } },
                 {selector: '#mvp', offset: 200, callback: function() { Materialize.fadeInImage("#v p"); } }*/
  ]; 
Materialize.scrollFire(options); 


/* work */
$(window).load(function(){
	$('.slider').fractionSlider({
		'fullWidth': 			true,
		'controls': 			true, 
		'pager': 				false,
		'responsive': 			true,
		'dimensions': 			"1000,400",
	    'increase': 			false,
		'pauseOnHover': 		true
	});

});
