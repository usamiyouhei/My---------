const hBtn = document.querySelector('.h-btn'); // h-btn
const header = document.querySelector('header'); // header

//h-btnをクリックしたとき
hBtn.addEventListener('click', function(){
  header.classList.toggle('active');
});
const fixMenuAnchors = document.querySelectorAll('.fix-menu a');
for(let i = 0; i < fixMenuAnchors.length; i++){
  fixMenuAnchors[i].addEventListener('click', function(){
    header.classList.remove('active');
  });
}
//swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  breakpoints:{
    750: {
      slidesPerView: 4,
      spaceBetween: 60,
    }
  },
});

// フェードイン
//スクロール時のイベント
window.addEventListener('scroll', function(){

  //すべての.itemを取得
  const item = document.querySelectorAll('.item');

  //querySelectorAll('.item')は配列になるので、for構文で取得
  //配列は0から始まるのでi = 0
  //i < item.lengthで配列の要素よりも数が小さい時　i++(インクリメント)1つずつ増加
  for(let i = 0; i < item.length; i++){

    //.itemのオフセットの高さを取得
    var targetTop = item[i].offsetTop;

    //画面のスクロール量 + 300px > .itemのオフセットの高さを取得
    if(window.scrollY + 300 > targetTop){

      //書くitemにクラスshowを追加
      item[i].classList.add('show');
    }
  }
});

//スムーススクロール
//すべてのaタグのhrefに#がついているもの
const anchors = document.querySelectorAll('a[href^="#"]');
// headerの高さを取得
const headerHeight = document.querySelector('header').offsetHeight;
//URLのアンカーを取得
const urlHash = location.href;

for(let i = 0; i < anchors.length; i++){
  //各アンカーにクリックイベント
  anchors[i].addEventListener('click', function(event){

    //デフォルトのクリックイベントを無効化
    event.preventDefault();

    //各anchorのhref属性の値を取得
    const href = anchors[i].getAttribute("href");
    
    //topに戻る以外のアンカー
    if(href !== '#top'){

      //スクロール先の要素を取得
      //アンカーのリンク先#を取り除いた名前と一致するIDの取得
      const target = document.getElementById(href.replace('#', ''));

      //スクロール先の要素の位置を取得
      //headerの高さをマイナス
      const position = window.pageYOffset + target.getBoundingClientRect().top - headerHeight;

      //スクロールアニメーション
      window.scroll({

        //スクロール先の要素の上までスクロール
        top: position,

        //スクロールアニメーション
        behavior: 'smooth'
      });

    //topに戻る
    }else{
      window.scroll({
        top: 0,
        behavior: 'smooth'
      })
    }
  })
}
