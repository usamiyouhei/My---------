const hamburgerMenu = document.querySelector(".hamburger-button");
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
    let href = anchor.getAttribute("href");
    let target =
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

const elementToToggle = document.getElementById('elementToToggle');
const contact = document.getElementById('contact');

// スクロール時のイベントリスナーを追加
window.addEventListener('scroll', () => {
  // 要素の位置とサイズを取得
  const elementRect = elementToToggle.getBoundingClientRect();
  const contactRect = contact.getBoundingClientRect();

  // 要素がフッターに近づいたら非表示にする
  if (elementRect.bottom > contactRect.top) {
    elementToToggle.style.transition = "opacity 0.5s";
    elementToToggle.style.opacity = 0; // フェードアウト
  } else {
    elementToToggle.style.transition = "opacity 0.5s";
    elementToToggle.style.opacity = 1; // フェードイン
  }
});
// フェードイン
// スクロールイベント
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
let swipeOption = {
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 2000,
}
// new Swiper('.swiper-container', swipeOption); 

let fadeInTarget = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  for (let i = 0; i < fadeInTarget.length; i++){
    const rect = fadeInTarget[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight; // 現在のブラウザの高さ
    if (scroll > offset - windowHeight + 150) {
      fadeInTarget[i].classList.add('scroll-in');
    }
  }
});