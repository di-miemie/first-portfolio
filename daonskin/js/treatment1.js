$(document).ready(function(){
  
  //.gnb 고정
  $(window).on('scroll', function(){
    let scrnum = $(this).scrollTop();
    //console.log(scrnum);

    if(scrnum >= 200){
      $('.gnb').addClass('on');
    }else{
      $('.gnb').removeClass('on');
    }
  });

  // btn_menu 와 m_gnb 메뉴슬라이드
  $('.btn_menu').on('click', function(){
    $(this).toggleClass('on');

      if($('.m_gnb').is(':visible')){
        $('.m_gnb').stop().slideUp();
      }else{
        $('.m_gnb').stop().slideDown();
      }
  });

  $('.m_gnb > li').on('click', function(){
    $('.m_gnb > li .sub').stop().slideUp();
    if($(this).find('.sub').is(':visible')){
      $(this).find('.sub').stop().slideUp();
    }else{
      $(this).find('.sub').stop().slideDown();
    }
  });


  //.gnb, .sub slideDown
  $('.gnb > li').on('mouseenter', function(){
    $('.gnb > li').find('.sub').stop().slideUp();
    $(this).find('.sub').stop().slideDown();
  });
  $('.gnb > li').on('mouseleave', function(){
    $('.gnb > li').find('.sub').stop().slideUp();
  });

  //media (max-width: 767px) 까지 m_sec1-menu slideDown
  $('.m_sec1-menuCon2').on('click', function(){
    if($('.m_sec1-menu').is(':visible')){
      $('.m_sec1-menu').hide();
    }else{
      $('.m_sec1-menu').show();
    }
  });
  
  $('.m_sec1-menu').on('mouseleave', function(){
    $('.m_sec1-menu').hide();
  });



});