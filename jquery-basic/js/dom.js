$(function() {
  // // 要素内のテキストを取得・変更する
  // const p = $('p').text();
  // console.log(p);
  // $('p').text('jQueryを勉強しよう');

  // // HTML要素を追加する
  // let num = 0;
  //   // id属性がappendの要素がクリックされたら要素を追加
  //   $('#append').on('click', function(){
  //     // numを1ずつ増やす
  //     num++;
  //     $('ul').append('<li>appendで追加' + num + '</li>');
  //   });

  // // HTML要素を削除する
  //   // id属性がappendの要素がクリックされたら要素を追加
  //   $('#remove').on('click', function() {
  //     num--;
  //     $('li:last').remove();

  //     // 要素がなくなったら変数を0にする
  //     if(num < 0){
  //       num = 0;
  //     }
  //   });

  // HTML要素を表示・非表示にする
     // id属性がshowの要素がクリックされたら要素を表示
     $('#show').on('click', function() {
      $('ul').show();
     });

     // id属性がhideの要素がクリックされたら要素を非表示
     $('#hide').on('click', function() {
      $('ul').hide();
     });

});