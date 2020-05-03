
  $('a#top').on('click', function(event) {
    console.log(event);
    var target = $(this.getAttribute('href'));
    
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 2000);
    }
    
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 50 ) {
            $('.scrolltop:hidden').stop(true, true).fadeIn();
        } else {
            $('.scrolltop').stop(true, true).fadeOut();
        }
    });
    $(function(){$(".scroll").click(function(){
        $("html,body").animate({scrollTop:
            $(".thetop").offset().top},"1000");return false})})

      