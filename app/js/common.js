$(function() {
  $(".btn").click(function(){
    $("body").toggleClass("on");
    $(".header-page__report-info").slideToggle("normal");
    return false;
  });


  $('ul.features__list').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active');
  });
  
  // tabs
    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
  

  $(document).on('ready', function() {
    $(".regular").slick({
      dots: true,
     infinite: false,
     speed: 300,
     slidesToShow: 1,
     adaptiveHeight: true,
     cssEase: 'linear',
     fade: true,
     draggable: false
    });
    $(".center").slick({
      dots: true,
      infinite: true,
      centerMode: true,
      slidesToShow: 3,
      slidesToScroll: 3
    });
    $(".variable").slick({
      dots: true,
      infinite: true,
      variableWidth: true
    });
    $(".slider").css('display', 'block');
  });


  $(window).scroll(function () {
      
      if( $(window).scrollTop() > 1 && !($('.header-page__top').hasClass('sticky'))){
        $('.header-page__top').addClass('sticky');
      } else if ($(window).scrollTop() < 1){
        $('.header-page__top').removeClass('sticky');
      }
  });

  $(".scroll").click(function(event){
    event.preventDefault();
    
    var full_url = this.href;
    var parts = full_url.split("#");
    var trgt = parts[1];
    var target_offset = $("#"+trgt).offset();
    var target_top = target_offset.top

      target_top -= 65
      $('html, body').animate({scrollTop:target_top}, 500);

  });
});