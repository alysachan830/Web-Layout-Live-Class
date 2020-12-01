"use strict";

$(document).ready(function () {
  //文字編輯器的slide效果
  $("#reply-comment").on("click", function () {
    return $(".editor").slideToggle();
  });
  $("#cancel-reply").on("click", function () {
    return $(".editor").slideToggle();
  }); //左邊navbar連結的active效果

  var currentURL = window.location.pathname;
  $(".nav-bar-link a").each(function () {
    var aHref = $(this).attr('href');
    $(this).toggleClass("active", aHref === currentURL.split("/")[1]);
  }); //Admin Modal 顯示按鈕

  $("#admin-modal-btn").on("click", function () {
    return $(".admin-modal-btn-list").slideToggle();
  });
});
//# sourceMappingURL=all.js.map
