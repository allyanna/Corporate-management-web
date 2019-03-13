
/*slideshow function*/
$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
  .fadeOut(1000)
  .next()
  .fadeIn(1000)
  .end()
  .appendTo('#slideshow');
}, 3000);

/*slideshow function*/
$("#slideshow2 > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow2 > div:first')
  .fadeOut(1000)
  .next()
  .fadeIn(1000)
  .end()
  .appendTo('#slideshow2');
}, 3000);

$(function() {
  $(window).scroll(function() {
      ($(document).scrollTop() + $(window).height()) / $(document).height() > 0.98 ? $('footer').fadeIn() : $('footer').fadeOut();
  });
})