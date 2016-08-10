$(document).scroll(function() {
        var dHeight = $(this).height()-4000;
         if (dHeight >= $(this).scrollTop()) {
             $('nav').css('background', 'rgba(62,62,62,'+ $(this).scrollTop() / dHeight + ')');
 
  }
});
      

$(document).ready(function() {
$('#num1').hide(0);
$('#num2').hide(0);
$('#num3').hide(0); 
$('#num4').hide(0);
    $(window).scroll(function(){
				var windowHeight = $(window).scrollTop();
				var an1 = $("#an1").offset();
                var an2 = $("#an2").offset();
                var an3 = $("#an3").offset();
                var an4 = $("#an4").offset();
                
				an1 = an1.top;
                an2 = an2.top;
                an3 = an3.top;
                an4 = an4.top;
                if(windowHeight > 830 && windowHeight < 1100 ){
                    $('#num1').fadeIn(300);
                }else{
					$('#num1').fadeOut(100);
				}
        	});
    $(window).scroll(function(){
       var windowHeight= $(window).scrollTop();
        	var ann1 = $("#ann1").offset();
                var ann2 = $("#ann2").offset();
                var ann3 = $("#ann3").offset();
                var ann4 = $("#ann4").offset();

				ann1 = ann1.top;
                ann2 = ann2.top;
                ann3 = ann3.top;
                ann4 = ann4.top;
        if(windowHeight >  1150 && windowHeight < 1450){
            $('#num2').fadeIn(300);
        }else{
            $('#num2').fadeOut(100);
        }
    });
    
    $(window).scroll(function(){
       var windowHeight= $(window).scrollTop();
        	var annn1 = $("#annn1").offset();
                var annn2 = $("#annn2").offset();
                var annn3 = $("#annn3").offset();
                var annn4 = $("#annn4").offset();
                var annn5 = $("#annn5").offset();
				annn1 = annn1.top;
                annn2 = annn2.top;
                annn3 = annn3.top;
                annn4 = annn4.top; 
                annn5 = annn5.top;
     
          if(windowHeight >  1450 && windowHeight < 1800){
            $('#num3').fadeIn(300);
        }else{
            $('#num3').fadeOut(100);
        }
    });
     
    $(window).scroll(function(){
       var windowHeight= $(window).scrollTop();
        	var annnn1 = $("#annnn1").offset();
                var annnn2 = $("#annnn2").offset();
                var annnn3 = $("#annnn3").offset();
                var annnn4 = $("#annnn4").offset();
                var annnn5 = $("#annnn5").offset();
                var annnn6 = $("#annnn6").offset();

				annnn1 = annnn1.top;
                annnn2 = annnn2.top;
                annnn3 = annnn3.top;
                annnn4 = annnn4.top; 
                annnn5 = annnn5.top;
                annnn6 = annnn6.top;
     
     
        if(windowHeight >  1770 && windowHeight < 2150){
            $('#num4').fadeIn(300);
        }else{
            $('#num4').fadeOut(100);
        }
    });
 



});

