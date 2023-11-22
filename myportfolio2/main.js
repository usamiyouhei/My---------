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
