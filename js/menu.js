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



    
});