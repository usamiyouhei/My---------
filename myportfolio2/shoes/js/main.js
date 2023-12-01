const hBtn = document.querySelector('.h-btn');
const header = document.querySelector('header');

//h-btnクリック
hBtn.addEventListener('click', function(){
  header.classList.toggle('active');
});
const fixMenuAnchors = document.querySelectorAll('.fix-menu a');
for(let i = 0; i < fixMenuAnchors.length; i++){
  fixMenuAnchors[i].addEventListener('click',function(){
    header.classList.remove('active');
  });
}

//swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  breakpoint: {
   750:{
    slidesPerView: 4,
    spaceBetween: 60,
   }
  },
});

//フェードイン
//スクロール時のイベント
window.addEventListener('scroll', function(){

  //全ての.itemを取得
  const item = document.querySelectorAll('.item');

  //querySelectorAll('.item')は配列になるのでfor構文で取得
  //配列は０から始まるのでi=0
  //i < item,lengthで配列の要素よりも数が小さい時 i++{インクリメント}
  //１つずつ増加
  for(let i = 0; i < item.length; i++){

      //.itemのオフセットの高さを取得
      var targetTop = item[i].offsetTop;

      //画面のスクロール幅 + 300px >.itemのオフセットの高さを取得
      if(window.scrollY + 300 > targetTop){
        //書くitemにクラスshowを追加
          item[i].classList.add('show');
      }
      // console.log(window.scrollY + 300 > targetTop);
      // console.log(window.scrollY);
  }
});

//スムーススクロール
//全てのaタグのhrefに#がついているもの
const anchors = document.querySelectorAll('a[href^="#"]');

const headerheight = document.querySelector('header').offsetHeight;

//URLのアンカー取得
const urlHash = location.href;

for( let i = 0; i < anchors.length; i++){
//各アンカーにクリックイベント
  anchors[i].addEventListener('click', function(event){

    //デフォルトのクリックイベントを無効化
    event.preventDefault();

    //各アンカーのhref属性の値を取得
    const href = anchors[i].getAttribute("href");

    //topに戻る以外のアンカー
    if(href !== '#top'){

      //スクロール先の要素を取得
      //アンカーのリンク先＃を取り除いた名前と一致するIDの取得
     const target = document.getElementById(href.replace('#', ''));

     //スクロール先の要素の位置を取得
     //headerの高さをマイナス
     const position = window.pageYOffset + target.getBoundingClientRect().top - headerheight;
    
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
