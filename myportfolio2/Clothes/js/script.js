// ハンバーガーメニュー
$(function(){
  $(".h-btn").click(function(){
    $(this).toggleClass("active");
    $(".menu").toggleClass("active");
  });
  $('#menu a').click(function(){
    $('.active').removeClass('active');
  });
});
// スライダー
var swiper = new Swiper(".my-swiper", {
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 2500,
  }
});
// スムーススクロール
var menuheight = $("#menu").outerHeight();
var hBtnHeight = $(".h-btn").outerHeight();
var windowWidth = $(window).width();
$('a[href^="#"]').click(function(){
  var href = $(this).attr("href");
  var target = $(href);
  if(windowWidth >= 750){
    var position = target.offset().top - menuHeight;
    $("body, html").animate({scrollTop:position}, 500)
  }else {
    var position = target.offset().top - hBtnHeight;
    $('body, html').animate({scroll: position}, 500);
  }
})
ハンバーガーメニュー
