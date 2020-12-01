$(document).ready(() => {
  //文字編輯器的slide效果

  $("#reply-comment").on( "click", () =>
    $(".editor").slideToggle()
  );

  $("#cancel-reply").on( "click", () =>
    $(".editor").slideToggle()
  );

  //左邊navbar連結的active效果
  const currentURL = window.location.pathname;

  $(".nav-bar-link a").each( function(){
    const aHref = $(this).attr('href');
    $(this).toggleClass("active", aHref === currentURL.split("/")[1]);
  })

  //Admin Modal 顯示按鈕
  $("#admin-modal-btn").on( "click", () => 
    $(".admin-modal-btn-list").slideToggle()
  );
});