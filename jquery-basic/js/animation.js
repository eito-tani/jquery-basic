$(function (){
  // // id属性がfadeOutの要素がクリックされたら
  // $('#fadeOut').on('click', function() {
  //   // フェードアウトする
  //   $('.box').fadeOut();

    // $('.box').fadeOut(3000, function() {
    //   alert('fadOOut完了')
    // });
  // });

  //   // id属性がfadeInの要素がクリックされたら
  // $('#fadeIn').on('click', function() {
  //   // フェードインする
  //   $('.box').fadeIn();
  // });

  // // id属性がfadeToggleの要素がクリックされたら
  // $('#fadeToggle').on('click', function() {
  //   // フェードイン or フェードアウトする
  //   $('.box').fadeToggle();
  // });

  $('#fadeOut').on('click', function () {
    // 不透明度を0にする（フェードアウトする）
    $('.box').css('opacity', 0);
  });
  $('#fadeIn').on('click', function () {
    // 不透明度を1にする（フェードインする）
    $('.box').css('opacity', 1);
  });

  $('#slideUp').on('click', function() {
  // $('.box').slideUp();
    // 高さを0にする（スライドアップする）
    $('.box').css('height', 0);
  });
  $('#slideDown').on('click', function() {
    // $('.box').slideDown();
    // 高さを200にする（スライドダウンする）
    $('.box').css('height', 200);
  });
  // $('#slideToggle').on('click', function() {
  //   $('.box').slideToggle();
  // });
});