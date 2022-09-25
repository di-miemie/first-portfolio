$(document).ready(function(){

  $('.gnb > li').on('mouseenter', function(){
    $('.gnb > li').find('.sub').stop().slideUp();
    $(this).find('.sub').stop().slideDown();
  });
  $('.gnb > li').on('mouseleave', function(){
    $(this).find('.sub').stop().slideUp();
  });

  $('header button').on('click', function(){
    $('html, body').animate({
      scrollTop: $('.sec1').offset().top},'slow');
  });

  $('.visual').slick({
    swipe:true,
    autoplay:true,
    autoplaySpeed:2500,
    speed:1000,
    pauseOnHover:false,
    vertical:false,
    fade:false,
    arrows:true,
    dots:false,
    slidesToShow:5,
    slidesToScroll:1
  });

  $('.sec1-2List > li').on('click', function(e){
    e.preventDefault();

    let path = $(this).find('>a').attr("href");
    $('.sec1-2Img').attr({src:path});

    let tg = $(this);
    let i = tg.index();
    let relText = $('.sec1-2box1 .sec1-2boxtext').eq(i);
    $('.sec1-2box1 .sec1-2boxtext').css({display:'none'});
    relText.css({display:'block'});
  });

  
  $(window).on('scroll', function(){

    let num = $(this).scrollTop();
    //console.log(num);

    if( num >= 1000){
      $('.sec1-inner .sec1-2box2').addClass('on');
    }

    if( num >= 1800){
      $('.sec2box1').addClass('on');
      $('.sec2box2').addClass('on');
      $('.sec2box3').addClass('on');
      $('.sec2box4').addClass('on');
    }
  });


  //sec3-2 tabMenu
  $('.sec3-2 .tabCon .tab:gt(0)').hide();
  //첫번째 tab ul빼고 숨기기
  $('.sec3-2 .tabMenu > li').on('click', function(e){
    e.preventDefault();

    $('.sec3-2 .tabMenu > li').removeClass('on');
    $(this).addClass('on');
    //tabMenu 기존on클래스 제거후 클릭한 li에 on클래스적용
    let tabnum = $(this).index();
    //console.log(tabnum);
    $('.tabCon .tab').hide();
    $('.tabCon .tab').eq(tabnum).show();
  });



});//$(document).ready끝

