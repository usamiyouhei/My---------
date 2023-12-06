// .hbg-btn
// document.querySelector(".humburger").addEventListener("click", function () {
//   this.classList.toggle(".active");
//   document.querySelector(".slide-menu").classList.toggle(".active");
// });

const hamburgerMenu = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".slide-menu");
hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
});

//スワイパー
const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: "true",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
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
//     const position = window.scrollY + target.getBoundingClientRect().top - headerHeight;
//     window.scroll({
//       top: position,
//       behavior: 'smooth'
//     });
// });
// }

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

//   //スクロールに応じてヘッダーの背景色が変化
//   $(window).scroll(function () {
//     if ($(this).scrollTop() > 0) {
//       $(".header").addClass("is-active");
//     } else {
//       $(".header").removeClass("is-active");
//     }
//   });

//   //ハンバーガーメニュー
//   var btnMenu = $(".js-btn-menu");
//   var globalNav = $(".p-global-nav");

//   btnMenu.on("click", function () {
//     btnMenu.toggleClass("is-active");
//     globalNav.toggleClass("is-show");
//   });

//   //IE11対応 sitcky
//   if ($(".p-breadcrumb").length) {
//     var elements = $(".p-breadcrumb");
//     Stickyfill.add(elements);
//   }
// });

// const swiper = new Swiper(".js-swiper-container", {
//   // Optional parameters
//   autoplay: {
//     delay: 4000,
//   },
//   speed: 500,
//   loop: true,
//   effect: "fade",

//   // If we need pagination
//   pagination: {
//     el: ".swiper-pagination",
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },
// });
