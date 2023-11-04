document.querySelector('.h-btn').addEventListener('click', function(){
  this.classList.toggle('active');
  document.querySelector('.slide-menu').classList.toggle('active');
});

// //スムーススクロール
// //aタグの#取得
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
//     const position = window.pageYOffset + target.getBoundingClientRect().top - headerHeight;
//     window.scroll({
//       top: position,
//       behavior: 'smooth'
//     });
//   });
// }
// フェードイン
//スクロールイベント
window.addEventListener('scroll', function(){
  //すべての.fadeを取得
  const fade = document.querySelectorAll('.fade');

  for(let i = 0; i < fade.length; i++){
    //fadeの高さ取得
    var targetTop = fade[i].offsetTop;

    //画面のスクロール量 + 300px > .fadeのoffsetの高さ
    if(window.scrollY + 300 > targetTop){
      fade[i].classList.add('show');
    }
  }
});