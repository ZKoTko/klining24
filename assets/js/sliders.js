$('.main-slider-wrapper').on('init', function(event, slick){
    var buttonTexts = ['Комната', 'Кухня', 'Ванная', 'Прихожая'];
  
    $('.slick-dots li button').each(function(index){
      $(this).text(buttonTexts[index]); // Присваиваем текст кнопкам
    });
  });

$(document).ready(function(){
    $('.main-slider-wrapper').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});

$(document).ready(function(){
    $('.sales-slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });
});

$(document).ready(function(){
    $('.reviews-slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });
});