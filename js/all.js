/*RWD選單*/
$(document).ready(function() {
	$('.showmenu').on('click', function(e) {
		e.preventDefault();
		$('body').toggleClass('menu-show');
	});
});

/*選單滑動至指定位置*/
$(function() {
  $('.menu a').click(function(e) {
    e.preventDefault();
    $('body, html').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 750);
  });
});