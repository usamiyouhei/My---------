// .hbg-btn
document.querySelector('.hbg-btn').addEventListener('.click', function(){
  this.classList.toggle('.active');
  document.querySelector('.menu').classList.toggle('.active');
})