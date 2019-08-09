$(function(){
       

    $('.menu-container__mini').on('click','', function(event){
        event.preventDefault(); 

        var menu = $(this).next();
        if(menu.is(':visible')){
            menu.css({
                'display': 'none',
            });
          
           
        }
        else {
            menu.css({
                'display': 'inline-block',
              
            });
        }
    });

   

    $('.header-container__btn--mini ,.popup__close ,  .top-section__btn , .my-skills__btn , .my-project__btn ').on('click','', function(event){
        event.preventDefault();

        var popup = $('.popup');
        var email = $ ('#popup-email');
        var email_title = $ ('#popup-email__title');
        if (popup.is(':visible')){
            popup.css({
                'display': 'none',
            });
        }
        else {
            popup.css({
                'display': 'flex',

            });
            email.css({
                'display': 'block'
            });
            email_title.css({
                'display': 'block'
            });
        }

    });

    $('.header-container__btn--link, .footer__btn').on('click','', function(event){
        event.preventDefault();

        var popup = $('.popup');
        var email = $ ('#popup-email');
        var email_title = $ ('#popup-email__title');
        if (popup.is(':visible')){
            popup.css({
                'display': 'none',
            });
            email.css({
                'display': 'block'
            });
            email_title.css({
                'display': 'block'
            });
        }
        else {
            popup.css({
                'display': 'flex',

            });
            email.css({
                'display': 'none'
            });
            email_title.css({
                'display': 'none'
            });

        }

    });


$('.header-container__btn--link, .footer__btn ,.header-container__btn--mini ,.popup__close ,  .top-section__btn , .my-skills__btn , .my-project__btn ').click(function(e){
    e.preventDefault();
 
    let pagePos = $(window).scrollTop();
    $('html').addClass('is-menu-open').attr('data-scroll', pagePos);
 
    
});
 
 
$('.popup__close').click(function (e) {
    e.preventDefault();
 
    let pos = parseInt($('body').attr('data-scroll'), 10);
    $('html').removeClass('is-menu-open').removeAttr('data-scroll');
    window.scrollTo(0, pos);
});

    
});
