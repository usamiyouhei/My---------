$(function(){
  //アコーディオン
  var answer = $('.a');
  $('.q').click(function(){
    $(this).toggleClass('show');
    $(this).next(answer).slideToggle();
  });

  // ハンバーガー
  $('.h-btn').click(function(){
    $(this).toggleClass('active');
    $('header nav').fadeToggle();
  });

  // スムーススクロール
  var headerHeight = $('header').outerHeight(); //headerの高さ取得
  $('a[href^="#"]').click(function(){ //aタグの#がついてるものをクリック
    var href = $(this).attr("href"); //hrefの値を取得
    var target = $(href);
    var position = target.offset().top - headerHeight;
    $('body, html').animate({scrollTop: position}, 500);
  })
});
