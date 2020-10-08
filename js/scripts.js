jQuery('document').ready(function ($) {

  var iphone = $('.iphone'),
    otros = $('.otros'),
    phone = $('.phone'),
    page = $('.page');


  // Desktop
  if (navJS.isDesktop()) {
    page.addClass('show');
    safari.addClass('show');
  }

  // Mobile devides
  if (navJS.isMobile()) {
    page.removeClass('show');
    phone.addClass('show');
    if (navJS.isIOS()) {
      otros.removeClass('show');
      iphone.addClass('show');
    } else {
      iphone.removeClass('show');
      otros.addClass('show');
    }
  }

  ///   MENU BURGUER
  var menuBrg = $('.menu-burguer'),
    menu = $('.navigation ul');

  menuBrg.click(function () {

    if (menu.hasClass('show')) {
      menu.removeClass('show');
    } else {
      menu.addClass('show');
    }

  });


});
