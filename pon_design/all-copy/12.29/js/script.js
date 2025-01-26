//ヘッダー背景色の変化
$(window).scroll(function(){
  if ($(this).scrollTop() > 100) {
    $('.header__top').css('background-color', '#21054D');
    $('.header__top').css('transition', '0.6s');
  } else {
    $('.header__top').css('background-color', 'transparent');
    $('.header__top').css('transition', '0.6s');
  }
});
if (window.innerWidth > 768) {//pc時のみ余白の調整を行う
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.header__top').css('padding', '27px 30px 19px 30px');
    } else {
      $('.header__top').css('padding', '34px 30px');
    }
  });
}


//ドロワーナビゲーションの変化
// $('.hamburger').click(function () {
//   $('.hamburger, .g-nav').toggleClass('active');
// });
function toggleHamburgerMenu() {
  $('.hamburger').click(function () {
    $('.hamburger, .g-nav').toggleClass('active');
    if ($('.g-nav').hasClass('active')) {
      $('html').css('overflow', 'hidden');
    } else {
      $('html').css('overflow', 'auto');
    }
  });
  if (!$('.g-nav').hasClass('active')) {
    document.body.style.overflow = 'auto';
  }
}
$(document).ready(function() {
  toggleHamburgerMenu();
});


//スクロールトップボタンの変化
$(function(){
  //変数にクラスをいれる
  var btn = $('.scrolltop');
  //スクロールしてページトップから100に達したらボタンを表示
  $(window).on('load scroll',function(){
    if($(this).scrollTop() > 100){
      btn.addClass('active');
      $('.scrolltop').css('transition', '0.6s');
    }else{
      btn.removeClass('active');
      $('.scrolltop').css('transition', '0.6s');
    }
  });
  //スクロールしてトップへ戻る
  btn.on('click',function(){
    $('doby,html').animate({
      scrollTop: 0
    });
  });
});


//swiper <<index__body>>
const indexPageSwiper = new Swiper(".index__body .swiper", {
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  speed: 1000, // 1000ms = 1s  loop: true, //繰り返し指定
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination", 
    type: "bullets",
    clickable: "clickable",
  },
  autoplay: {
    delay: 5000 //5秒ごとにスライダを切り替える
  },
});


//swiper <<news__body>>
const newsPageSwiper = new Swiper(".news__body .swiper",{
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  speed: 1200, // 1000ms = 1s  loop: true, //繰り返し指定
  autoHeight: true,
  noSwiping: true,
  noSwipingClass: 'noSwiping',
  pagination: {
    el: ".swiper-pagination", 
    type: "bullets",
    clickable: "clickable",
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    }
  }
});
newsPageSwiper.on('slideChange', function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});

