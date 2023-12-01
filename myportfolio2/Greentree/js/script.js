$(function(){
  // あコーディオン
  var answer = $('.a');
  $('.q').click(function(){
    $(this).toggleClass('show');
    $(this).next(answer).slideToggle()
  });

  // ハンバーガー
 $('.h-btn').click(function(){
  $(this).toggleClass('active');
  $('header nav').fadeToggle();
 });

//  スムーススクロール
var headerHeight = $('header').outerHeight();
$('a[href^="#"]').click(function(){
  var href = $(this).attr("href");
  var target = $(href);
  var position = target.offset().top - headerHeight;
  $('body, html').animate({scrollTop: position},500);
})
});