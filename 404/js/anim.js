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
  var dHeight = $(this).height()-$(window).height();
  if (dHeight >= $(this).scrollTop()) {
    $('nav').css('background', 'rgba(80,80,80,'+ $(this).scrollTop() / dHeight + ')');
  
  }
});

$(document).ready(function() {
function getRandomSize(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
  for (var i = 0; i < 1; i++) {
    
    $('.lineash').append('<img src="../img/princing/linea_vertical.png">,<img src="../img/princing/linea_vertical.png">,<img src="../img/princing/linea_vertical.png">,<img src="../img/princing/linea_vertical.png">,<img src="../img/princing/linea_vertical.png">,<img src="../img/princing/linea_vertical.png">,<img src="../img/princing/linea_vertical.png">');
  }
});
/* Who we are */
Materialize.scrollFire(options);
  var options = [ 
      {selector: '#credo', offset: 800, callback: function() {
          Materialize.showStaggeredList("#lista", 6500 ); } },
                /* {selector: '.credo', offset: 200, callback: function() { Materialize.fadeInImage(".credo", 2500 ); } },*/
        {selector: '#mvp', offset: 200, callback: function() { Materialize.fadeInImage("#m p"); } },
                 {selector: '#mvp', offset: 200, callback: function() { Materialize.fadeInImage("#v p"); } },
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
/* Services */
Materialize.scrollFire(options);
  var options = [ 
      {selector: '.mobil', offset: 200, callback: function() {
          Materialize.growIn(".strategy",200); } },
        {selector: '.mobil', offset: 200, callback: function() { Materialize.growIn(".strategyp", 200 ); } }
  ]; 
Materialize.scrollFire(options); 