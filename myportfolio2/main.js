const hamburgerMenu = document.querySelector(".hbg-btn");
const navMenu = document.querySelector(".slide-menu");
hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
});


// スムーススクロール
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    let speed = 300;
    var href = anchor.getAttribute("href");
    var target =
      href === "#" || href === ""
        ? document.documentElement
        : document.querySelector(href);
    var position = target.offsetTop;
    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
    return false;
  });
});

let pageTop = document.querySelector(".page-top");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    pageTop.style.display = "block";
  } else {
    pageTop.style.display = "none";
  }
});

pageTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return false;
});

// フェードイン
//スクロールイベント
window.addEventListener('scroll', function(){
  //すべての.fadeを取得
  const fade = document.querySelectorAll('.fade');

  for(let i = 0; i < fade.length; i++){
    //fadeの高さ取得
    var targetTop = fade[i].offsetTop;

    //画面のスクロール量 + 300px > .fadeのoffsetの高さ
    if(window.scrollY + 100 > targetTop){
      fade[i].classList.add('show');
    }
  }
});
//scroll_effect
// $(window).scroll(function () {
//   var scrollAnimationElm = document.querySelectorAll('.scroll_up');
//   var scrollAnimationFunc = function () {
//     for (var i = 0; i < scrollAnimationElm.length; i++) {
//       var triggerMargin = 100;
//       if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
//         scrollAnimationElm[i].classList.add('on');
//       }
//     }
//   }
//   window.addEventListener('load', scrollAnimationFunc);
//   window.addEventListener('scroll', scrollAnimationFunc);
// });

// 要素とフッターの取得
const elementToToggle = document.getElementById('elementToToggle');
const footer = document.getElementById('footer');

// スクロール時のイベントリスナーを追加
window.addEventListener('scroll', () => {
  // 要素の位置とサイズを取得
  const elementRect = elementToToggle.getBoundingClientRect();
  const footerRect = footer.getBoundingClientRect();

  // 要素がフッターに近づいたら非表示にする
  if (elementRect.bottom > footerRect.top) {
    elementToToggle.style.opacity = 0; // フェードアウト
  } else {
    elementToToggle.style.opacity = 1; // フェードイン
  }
});
// // 要素の取得
// const fadeElement = document.getElementById('fadeElement');

// // スクロール時のイベントリスナーを追加
// window.addEventListener('scroll', () => {
//   // 要素の位置とサイズを取得
//   const elementRect = fadeElement.getBoundingClientRect();

//   // 要素が画面内に入ったらフェードイン
//   if (elementRect.top < window.innerHeight) {
//     fadeElement.style.opacity = 1;
//   }
// });