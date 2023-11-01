$(".toggle").click(function () {
  $(".list-toggle").toggle(1000);
  $(".list-main").toggle();
});

$(".exite").click(function () {
  $(".list-toggle").toggle(1000);
  $(".list-main").toggle(1000);
});

$(window).scroll(() => {
  let wScroll = $(window).scrollTop();
  if (wScroll > 15) {
    $(".button-up").fadeIn(1000);
  } else {
    $(".button-up").fadeOut(1000);
  }
});

$(".button-up").click(function () {
  $("html,body").animate({ scrollTop: 0 }, 1000);
});

$(window).scroll(() => {
  let wScroll = $(window).scrollTop();
  if (wScroll > 10) {
    $("nav").css({
      backgroundColor: "#000000",
      transition: " all 1.5s",
    });
  } else {
    $("nav").css({ backgroundColor: "transparent" });
  }
});

$("nav ul a").click(function (e) {
  $(e.target).parent().css("border-bottom", "solid 1px #fec86a");
  $(e.target).parent().siblings().css("border-bottom", "none");
});

// chosse color

let widthh = $(".oop").innerWidth();
$(".options").css("left", `-${widthh}px`);

let color = $(".items-color");

$(color).eq(0).css("backgroundColor", "#34353b");
$(color).eq(1).css("backgroundColor", "#f19a02");
$(color).eq(2).css("backgroundColor", "black");
$(color).eq(3).css("backgroundColor", "#09c");

$(color).click(function (e) {
  let bgco = $(e.target).css("backgroundColor");
  $("body").css("backgroundColor", `${bgco}`);
});

$(".options i").click(function (e) {
  if ($(".options").css("left") == "0px") {
    $(".options").animate({ left: `-${widthh}px` }, 1000);
  } else {
    $(".options").animate({ left: "0px" }, 1000);
  }
});

// scroll smothe
$(".list-main ul li a").click(function (e) {
  let link = $(e.target).attr("href");
  let off = $(link).offset().top;
  $("html,body").animate({ scrollTop: off }, 2000);
});
