// .hbg-btn
document.querySelector('.hbg-btn').addEventListener('.click', function(){
  this.classList.toggle('.active');
  document.querySelector('.slide-menu').classList.toggle('.active');
});

//スワイパー
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable:'true',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

//スムーススクロール
//aタグの#取得
// const anchors = document.querySelectorAll('a[href^="#"]');
// //headerの高さ
// const headerHeight = document.querySelector('header').offsetHeight;
// //アンカー取得
// const urlHash = location.href;
// for(let i = 0; i < anchors.length; i++){
//   anchors[i].addEventListener('click', function(event){
//     event.preventDefault();
//     const href = anchors[i].getAttribute("href");

//     // スクロース先の要素取得
//     const target = document.getElementById(href.replace('#', ''));

//     // スクロール位置
//     const position = window.scrollY + target.getBoundingClientRect().top - headerHeight;
//     window.scroll({
//       top: position,
//       behavior: 'smooth'
//     });
// });
// }
var headerHeight = $('header').outerHeight();
$('a[href^="#"]').click(function(){
  var href = $(this).attr("href");
  var target = $(href);
  var position = target.offset().top - headerHeight;
  $('body, html').animate({scrollTop: position},500);
});

