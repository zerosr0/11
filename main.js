$(function () {
  // Case 1 (클릭시 클릭한 놈에 대한 넓이의 변화)
  /*$(".grp-item a").on("click", function () {
    var idx = $(this).parent().index()
    
    $(".grp-wrap > *").removeClass("active");
    $(".grp-wrap > *").eq(idx).addClass("active");
  });*/

  // Case 2 (클릭시 항목에 변화에 따른 케이스)
  $(".grp-item a").on("click", function () {
    var idx = $(this).parent().index()

    $(this).parent().remove();
    $(".grp-wrap > *").eq(idx).remove();

    $(".grp-wrap > *").css({
      width: 100 / $(".grp-wrap > *").length + "%"
    })
  });
})
