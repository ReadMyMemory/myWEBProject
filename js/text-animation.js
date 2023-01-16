
$(function () {

    var $element = $("#text-animation");
    function fadeInOut(str, time) {
      $element.text(str);
      $element.css('display', 'none');
       $element.css('opacity', '');
      $element.fadeIn(time, function() {
        $element.fadeOut(time, function() {
          $element.css('display', 'block');
          $element.css('opacity', '0.00001');
        });
    
      });
       
    };
    fadeInOut("안녕하세요!", 3000);
    setTimeout(function() {
        fadeInOut("Hello!", 3000);
    }, 7000);
    setTimeout(function() {
        fadeInOut("Hola!", 3000);
    }, 14000);
    setTimeout(function() {
        fadeInOut("مرحبا!", 3000);
    }, 21000);
    setTimeout(function() {
        fadeInOut("こんにちは!", 3000);
    }, 28000);
    setTimeout(function() {
        fadeInOut("Здравствуйте!", 3000);
    }, 35000);
    setTimeout(function() {
        fadeInOut("您好!", 3000);
    }, 42000);
    setTimeout(function() {
        fadeInOut("Ciao!", 3000);
    }, 49000);
    setTimeout(function() {
        fadeInOut("Bonjour!", 3000);
    }, 56000);
    setTimeout(function() {
        fadeInOut("Hallo!", 3000);
    }, 63000);
    setTimeout(function() {
        fadeInOut("Hej!", 3000);
    }, 70000);
    setTimeout(function() {
        fadeInOut("สวัสดีครับ!", 3000);
    }, 77000);
    setTimeout(function() {
        fadeInOut("Hei!", 3000);
    }, 84000);
    setTimeout(function() {
        fadeInOut("Salut!", 3000);
    }, 91000);
    setTimeout(function() {
        fadeInOut("Buon giorno!", 3000);
    }, 98000);
    setTimeout(function() {
        fadeInOut("Apa kabar!", 3000);
    }, 105000);
   
});