$(document).ready(function () {
  //.gnb ul show
  $(".gnb > li").on("mouseenter", function () {
    $(this).find(".sub").stop().show();
    $(this).find(".sub_left").stop().show();
    $(".sub_left > li").removeClass("on");
    $(".sub_left > li:first-child").addClass("on");
    $(".sub_right").removeClass("on");
    $(".sub_left > li:first-child").find(".sub_right").addClass("on");
  });
  $(".gnb > li").on("mouseleave", function () {
    $(".sub").stop().hide();
    $(".sub_left").stop().hide();
  });

  //.sub_left .sub_right show
  $(".sub_left > li").on("click", function () {
    $(".sub_left > li").removeClass("on");
    $(this).addClass("on");
    $(".sub_right").removeClass("on");
    $(this).find(".sub_right").addClass("on");
  });

  //.search_button
  $("nav .search_button").on("click", function () {
    $("nav input").toggleClass("on");
  });

  //모바일 .btn_menu
  $(".btn_menu").on("click", function () {
    $(this).toggleClass("on");
    if ($(".mobile_gnb").is(":visible")) {
      $(".mobile_gnb").stop().hide();
    } else {
      $(".mobile_gnb").stop().show();
      $(".mobile_sub").css("display", "none");
      $(".mobile_gnb li:first-child .mobile_sub").css("display", "block");
    }
  });
  //모바일메뉴 .mobile_gnb
  $("ul.mobile_gnb > li").on("click", function () {
    $(".mobile_sub").css("display", "none");
    $(this).find(".mobile_sub").css("display", "block");
  });

  //header slide
  const swiper1 = new Swiper(".swiper1", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    autoplay: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },
  });

  //section1 slide
  const swiper2 = new Swiper(".swiper2", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    autoplay: false,
    centeredSlides: true,
    slidesPerView: "auto",
    effect: "coverflow",
    coverflowEffect: {
      rotate: 35,
      depth: -80,
    },
  });

  //section2 slide - Laptops .swiper3
  const swiper3 = new Swiper(".swiper3", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    autoplay: false,
    slidesPerView: 2,
    spaceBetween: 20,
    observer: true,
    observeParents: true,
    breakpoints: {
      1280: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1,
      },
      280: {
        slidesPerView: 1,
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: ".productBox1 .productBox_inner .swiper-button-next",
      prevEl: ".productBox1 .productBox_inner .swiper-button-prev",
    },
  });

  //section2 slide - CONSOLE & MOBILE & LIFESTYLE
  const swiper4 = new Swiper(".swiper4", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    autoplay: false,
    effect: "fade",
    // Navigation arrows
    navigation: {
      nextEl: ".productBox2 .productBox_inner .swiper-button-next",
      prevEl: ".productBox2 .productBox_inner .swiper-button-prev",
    },
  });

  // animation
  $(window).on("scroll", function () {
    let scrollNum = $(this).scrollTop();
    //console.log(scrollNum);

    //section1
    if (scrollNum >= 250) {
      $(".sec1Box1").addClass("on");
    }
  });

  //section2-1 tabmenu slide - swiper3
  $(".cate_list1 li").on("click", function () {
    let cate1Num = $(this).index();
    $(".productBox1 .productBox_inner").hide();
    $(".productBox1 .productBox_inner").eq(cate1Num).fadeIn();
  });

  //section2-2 tabmenu slide - swiper4
  $(".cate_list2 li").on("click", function () {
    let cate2Num = $(this).index();
    $(".productBox2 .productBox_inner").hide();
    $(".productBox2 .productBox_inner").eq(cate2Num).fadeIn();
  });
}); //$(document).ready끝
