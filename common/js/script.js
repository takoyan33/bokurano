$(function () {
  //ハンバーガーメニュー
  $(".hamburger-btn").click(function () {
    $(this).toggleClass("active");

    if ($(this).hasClass("active")) {
      $(".hamburger").addClass("active");
    } else {
      $(".hamburger").removeClass("active");
    }
  });
  $(".hamburger__list").click(function () {
    $(".hamburger,.hamburger-btn").removeClass("active");
  });

  //ヘッダー固定(SP)
  //fvを超えたらスクロールでheaderに色を付ける
  var mainPos = $(".fv").height();

  $(window).scroll(function () {
    if ($(window).scrollTop() > mainPos) {
      $(".header__inner").addClass("addColor");
    } else {
      $(".header__inner").removeClass("addColor");
    }
  });
});


$(function () {
  var loader = $('.loader-wrap');

  //ページの読み込みが完了したらアニメーションを非表示
  $(window).on('load', function () {
    loader.fadeOut();
  });

  //ページの読み込みが完了してなくても3秒後にアニメーションを非表示にする
  setTimeout(function () {
    loader.fadeOut();
  }, 3000);
});



$(function () {

  // モーダルウィンドウが開くときの処理    
  $(".modalOpen").click(function () {

    var navClass = $(this).attr("class"),
      href = $(this).attr("href");

    $(href).fadeIn();
    $(this).addClass("open");
    return false;
  });

  // モーダルウィンドウが閉じるときの処理    
  $(".modalClose").click(function () {
    $(this).parents(".modal").fadeOut();
    $(".modalOpen").removeClass("open");
    return false;
  });

});

// ウィンドウを開く
$('.js-modal-open').each(function () {
  $(this).on('click', function () {
    var target = $(this).data('target');
    var modal = document.getElementById(target);
    $(modal).fadeIn(300);
    return false;
  });
});

// ウィンドウを閉じる
$('.js-modal-close').on('click', function () {
  $('.js-modal').fadeOut(300);
  return false;
});