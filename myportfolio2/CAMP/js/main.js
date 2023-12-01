//ハンバーガー
document.querySelector('.h-btn').addEventListener('click',function(){
  this.classList.toggle('active');
  document.querySelector('.menu').classList.toggle('active');
});

//モーダル
//モーダルオープン.list div格納
const modalOpen = document.querySelectorAll('.list div');

//モーダルをforeachで取得し、コールバック関数の引数をbuttonに設定
modalOpen.forEach(function(button){

  //buttonをクリックしたとき
  button.onclick = function(){

    //data-modalの値を取得
    var modal = button.getAttribute('data-modal');

    //data-modalの値と同じIDのモーダルを表示
    document.getElementById(modal).style.display = "block";
  }
});
//モーダルクローズ
//.closeを変数に格納
const modalClose = document.querySelectorAll('.close');

//.closeをforeachで取得し、コールバック関数の引数をbuttonに設定
modalClose.forEach(function(button){

  //closeをクリックしたとき
  button.onclick = function(){

//祖先の要素.modalを取得
var modal = button.closest('.modal');

//モーダル非表示
modal.style.display = "none";
  }

});
//swiper
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 1,
    spaceBetween: 10,
    loop:true,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    }
  });
  //スムーススクロール
  //aタグの取得
  const anchors = document.querySelectorAll('a[href^="#"]');

  //headerの高さ
  const headerHeight = document.querySelector('header').offsetHeight;

  //アンカー取得
  const urlhash = location.href;
  for(let i = 0; i < anchors.length; i++){
    anchors[i].addEventListener('click',function(event){
      event.preventDefault();
      const href = anchors[i].getAttribute("href");

      //スクロール先要素取得
      const target = document.getElementById(href.replace('#', ''));

      //スクロール位置
      const position = window.pageYOffset + target.getBoundingClientRect().top - headerHeight;
      window.scroll({
        top: position,
        behavior: 'smooth'
      });
    });
  }
//フェードイン
//スクロールイベント
window.addEventListener('scroll', function(){
  //全ての.fade取得
  const fade = this.document.querySelectorAll('.fade');

  for(let i = 0; i < fade.length; i++){
    //fadeの高さ取得
    var targetTop = fade[i].offsetTop;

    //画面スクロール量　＋ 300px > .fadeのoffsetの高さ
    if(this.window.scrollY + 300 > targetTop){
      fade[i].classList.add('show');
    }

  }
})