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

  // $(".tabs__caption").animated("fadeInRight");
  $('.report-head__title').addClass('animated zoomIn');
  // $('.header-page__top').addClass('animated fadeInDown');
  $('.report-head__year').addClass('animated bounceInRight');
  $('.header-page__wrap-info').addClass("animated bounceInUp");
  $('.sl-item img').addClass("animated");
  $('.retail__r img').addClass("animated");
  $('.section-title--bg').animated("fadeIn");
  $('.section-page__wrap-description').animated("fadeIn");
  $('.retail__l, .fade--l, .section-info__left, .interbank-row--l').animated("fadeInLeft");
  $('.retail__r, .fade--r, .section-info__right, .interbank-row--r').animated("fadeInRight");
/*  $('.col-tr').animated("flipInY");
  $('.columns__col').animated("flipInY");
  $('.charts').animated("fadeIn");
  $('.charts-col--l, .charts__col').animated("bounceIn");
  $('.charts-col--r').animated("bounceIn");
  $('.chart-bar').animated("bounceIn");*/
  


  $('img.animated').hover(
     function() {
      $(this).addClass('tada'); // Добавляем класс bounce
     },
     function() {
      $(this).removeClass('tada'); // Убираем класс
     }
  )

   $(".section-page--our-bank").waypoint(function() {
      $(".features__items").each(function(index) {
        var ths = $(this);
        setInterval(function() {
          ths.addClass("on");
        }, 200*index);
      });
    }, {
      offset : "70%"
    });

   $(".section-page--our-bank").waypoint(function() {
      $(".features__items").each(function(index) {
        var ths = $(this);
        setInterval(function() {
          ths.addClass("on");
        }, 200*index);
      });
    }, {
      offset : "70%"
    });



});