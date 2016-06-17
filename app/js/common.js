$(function() {
  $(".btn").click(function(){
    $("body").toggleClass("on");
    $(".header-page__report-info").slideToggle("normal");
    return false;
  });

  // tabs
    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
    
});