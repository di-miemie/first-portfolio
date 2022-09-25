$(document).ready(function () {
  //.gnb 고정
  $(window).on("scroll", function () {
    let scrnum = $(this).scrollTop();
    console.log(scrnum);

    if (scrnum >= 200) {
      $(".gnb").addClass("on");
    } else {
      $(".gnb").removeClass("on");
    }

    if (scrnum >= 950) {
      $(".sec1-1left .botText").addClass("on");
    }
  });
  // btn_menu 와 m_gnb 메뉴슬라이드
  $(".btn_menu").on("click", function () {
    $(this).toggleClass("on");
    if ($(".m_gnb").is(":visible")) {
      $(".m_gnb").stop().slideUp();
    } else {
      $(".m_gnb").stop().slideDown();
    }
  });

  $(".m_gnb > li").on("click", function () {
    $(".m_gnb > li > .sub").stop().slideUp();
    if ($(this).find(".sub").is(":visible")) {
      $(this).find(".sub").stop().slideUp();
    } else {
      $(this).find(".sub").stop().slideDown();
    }
  });

  //.gnb, .sub slideDown
  $(".gnb > li").on("mouseenter", function () {
    $(".gnb > li").find(".sub").stop().slideUp();
    $(this).find(".sub").stop().slideDown();
  });
  $(".gnb > li").on("mouseleave", function () {
    $(".gnb > li").find(".sub").stop().slideUp();
  });

  //header슬라이더
  const swiper0 = new Swiper(".swiper0", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    autoplay: true,
    debugger: true,
    slidesPerView: 1,
  });

  //sec1-1 swiper
  const swiper1 = new Swiper(".swiper1", {
    // Optional parameters
    direction: "vertical",
    loop: true,
    autoplay: true,
    speed: 600,
    debugger: true,

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //.sec2
  $(".sec2_con > ul li").on("click", function (e) {
    e.preventDefault();

    let sec2num = $(this).index();
    $(".sec2right").hide();
    $(".sec2right").eq(sec2num).show();
  });

  //.sec3-swiper2-slide
  const swiper2 = new Swiper(".swiper2", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    slidesPerView: 3,
    autoplay: true,
    debugger: true,
    spaceBetween: 20,

    breakpoints: {
      280: {
        slidesPerView: 1, //브라우저가 400보다 클 때
        spaceBetween: 40,
      },
      769: {
        slidesPerView: 2, //브라우저가 768보다 클 때
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3, //브라우저가 1024보다 클 때
        spaceBetween: 20,
      },
    },

    // pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //modal popup
  $(function () {
    if ($.cookie("popup") == "none") {
      $(".modal").hide();
    } else {
      $(".modal").show();
    }

    let $expChk = $("#expiresChk");
    $(".closeBtn").on("click", closePop);

    function closePop() {
      if ($expChk.is(":checked")) {
        $.cookie("popup", "none", { expires: 1, path: "/" });
      }
      $(".modal").fadeOut("fast");
    }
  });
}); //$(document).ready끝
