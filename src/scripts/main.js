$(document).ready(function(){
	//**animation fixed top navbar**//
    $(function () {
        $(document).scroll(function () {
            var $nav = $(".navbar-fixed-top");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
            if ($(document).scrollTop() > $nav.height()) {
                $('.navbarBlack').addClass('navbarWhite').removeClass('navbarBlack');
                $('.navbarBlack__right').addClass('navbarBlack__rightWhite').removeClass('navbarBlack__right');
                $('#logo').hide();
                $('#logoHidden').show();
            }else  {
                $('.navbarWhite').addClass('navbarBlack').removeClass('navbarWhite');
                $('.navbarBlack__rightWhite').addClass('navbarBlack__right').removeClass('navbarBlack__rightWhite');
                 $('#logo').show();
                 $('#logoHidden').hide();
            }
        });
    });

    //**button scroll to top**//
    $(window).scroll(function() {
        if ( $(window).scrollTop() > 300 ) {
            $('a.back-to-top').fadeIn('slow');
        } else {
            $('a.back-to-top').fadeOut('slow');
        }
    });



    $('a.back-to-top').click(function() {
	    $('html,body').animate({
	        scrollTop: 0
	    }, 1000);
    		return false;
	});

    //**button scroll to botton**//
    $('#mouse').click(function(){
        $('html, body').animate({scrollTop:$(document).height()}, 2000);
        return false;
    });


    //**sent form**//
    $('#application').submit(function() {
        $.ajax({
            type: "POST",
            url: "https://business2online.com/wp-content/themes/b2-onlineThemes/form.php",
            data: $(this).serialize()
        }).done(function() {
            toastr.success('Дякуємо за Ваше повідомлення \n Ми з Вами звяжемось як тільки це буде можливо!');
            $("#application").get(0).reset();
        });
        return false;
    });

    // **sent form develop**//
    $('#applicationDevelop').submit(function() {
        $.ajax({
            type: "POST",
            url: "https://business2online.com/wp-content/themes/b2-onlineThemes/formDevelop.php",
            data: $(this).serialize()
        }).done(function() {
            toastr.success('Дякуємо за Ваше повідомлення \n Ми з Вами звяжемось як тільки це буде можливо!');
            $("#applicationDevelop").get(0).reset();
        });
        return false;
    });
    //**sent form marketing page**//
    $('#form--marketing').submit(function() {
        $.ajax({
            type: "POST",
            url: "https://business2online.com/wp-content/themes/b2-onlineThemes/sentformcallback.php",
            data: $(this).serialize()
        }).done(function() {
            toastr.success('Дякуємо за Ваше повідомлення \n Ми з Вами звяжемось як тільки це буде можливо!');
            $("#form--marketing").get(0).reset();
        });
        return false;
    });

    // **form validation**//
    (function( $ ){
        $(function() {
            $('#application').each(function(){
                //oбявлення перемінної(форма і кнопка відправки)
                var form = $(this),
                    btn = form.find('#btn');
                //додаємо кожному полю котре перевіряємо, вказуємо що поле пусте
                form.find('.rfield').addClass('empty_field');
                //функція провірки полів форми
                function checkInput(){
                    form.find('.rfield').each(function(){
                        if($(this).val() != ''){
                            //якщо поле не пусте то видаляємо клас-указание
                            $(this).removeClass('empty_field');
                        } else {
                            // якщо поле пусте додаємо класс-указание
                            $(this).addClass('empty_field');
                        }
                    });
                }

                // функція підсвідки незаповнених полів
                function lightEmpty(){
                    form.find('.empty_field').css({'border-color':'#d8512d'});
                    // через півсекунди видаляємо підсвідку
                    setTimeout(function(){
                        form.find('.empty_field').removeAttr('style');
                    },500);
                }

                // перевірка в режимі реального часу
                setInterval(function(){
                    //запускаємо функцію перевірки полів на заповненість
                    checkInput();
                    //рахуємо кількість незаповнених полів
                    var sizeEmpty = form.find('.empty_field').size();
                    // Вешаем условие-тригер на кнопку отправки формы
                    if(sizeEmpty > 0){
                        if(btn.hasClass('disabled')){
                            return false
                        } else {
                            btn.addClass('disabled')
                        }
                    } else {
                        btn.removeClass('disabled')
                    }
                },500);

                // Событие клика по кнопке отправить
                btn.click(function(){
                    if($(this).hasClass('disabled')){
                        // подсвечиваем незаполненные поля и форму не отправляем, если есть незаполненные поля
                        lightEmpty();
                        return false
                     }
                });
            });
        });

    })( jQuery );

    //**transition download page**//
    $("body").css("display", "none");
    $("body").fadeIn(2000);
    $("a.transition").click(function(event){
        event.preventDefault();
        //linkLocation = this.href;
        $("body").fadeOut(1000, redirectPage);
    });
    function redirectPage() {
        window.location = linkLocation;
    }
    //**download page transition end**//



    //**slider clients on page aboute us**//
    $('.btn-next').on('click',function(){ $('#slick').slick('slickNext'); });
    $('.btn-prev').on('click',function(){ $('#slick').slick('slickPrev'); });
    $('.multiple-items').slick({
        slickPrev: true,
        centerMode: false,
        infinite: true,
        //dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows:false,
        draggable:true,
        easing:true,
        responsive:true,
        variableWidth: true,
        pauseOnHover: true,
        focusOnSelect: true,
        lazyLoad: 'ondemand'
    });
    //**Cooperate slider in page aboute us**//
    $('.Cooperate').slick({
        slickPrev: true,
        centerMode: true,
        centerPadding: '50px',
        infinite: true,
        //dots: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        arrows:false,
        draggable:true,
        easing:true,
        responsive:true,
        variableWidth: true,
        pauseOnHover: true,
        focusOnSelect: true,
        //lazyLoad: 'ondemand',
        //fade: true,
        //cssEase: 'linear',
        //speed: 100
    });



    //**portfolio tabs***//
    // jQuery('.tabs .tab-links a').on('click', function(e)  {
    //     var currentAttrValue = jQuery(this).attr('href');
    //
    //     // Show/Hide Tabs
    //     jQuery('.tabs ' + currentAttrValue).show().siblings().hide();
    //
    //     // Change/remove current tab to active
    //     jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
    //
    //     e.preventDefault();
    // });



    //**slider our clients**//
    jQuery(function ($) {
        var slider = $('.mis-stage').miSlider({
            //  The speed of the slide transition
            //  in milliseconds. Options: positive integer.
            speed: 700,
            //  slide pause time between transitions
            //  in milliseconds. Options: false, positive integer.
            //  false = Autoplay off.
            pause: 4000,
            //  The number of slides to increment with
            //  Autoplay and Nav Buttons.
            //  Options: positive or negative integer.
            //  Positive integer = Slide left.
            //  Negative integer = Slide right.
            increment: 1,
            //  The height of the stage in px.
            //  Options: false or positive integer.
            //  false = height is calculated using
            //  maximum slide heights.
            stageHeight: 280,
            //  Number of slides visible at one time.
            //  Options: false or positive integer.
            //  false = Fit as many as possible.
            slidesOnStage: false,
            //  Continuous motion - Boolean.
            //  true = slides loop in one direction if possible.
            slidesContinuous: true,
            //  The location of the current slide on the stage.
            //  Options: 'left', 'right', 'center'.
            slidePosition: 'center',
            //  The slide to start on.
            //  Options: 'beg', 'mid', 'end'
            //  or slide number starting at 1 - '1','2', etc.
            slideStart: 'mid',
            //  The width of the current slide in px.
            //  Options: false or positive integer.
            //  false = width is the maximum of
            //  the existing slide widths.
            slideWidth: 200,
            //  The relative percentage scaling factor
            //  of the current slide
            //  other slides are scaled down.
            //  Options: positive number 100 or higher.
            //  100 = No scaling.
            slideScaling: false,
            //  The vertical offset of the slide center
            //  as a percentage of slide height.
            //  Options:  positive or negative number.
            //  Neg value = up. Pos value = down.
            //  0 = No offset.
            offsetV: -5,
            //  Center slide contents vertically
            //  Boolean.
            centerV: true,
            // Transition to clicked slide instead of visting URL
            // Boolean.
            slideClickable: true,
            //  Enable numbered list navigation
            //  Boolean.
            navList: true,
            //  Enable prev and next button navigation
            //  Boolean.
            navButtons: true,
            //  Always show prev and next button navigation
            //  except when transitioning - Boolean.
            navButtonsShow: false,
            //  Opacity of the prev and next
            //  button navigation when not transitioning.
            //  Options: Number between 0 and 1.
            //  0 (transparent) - 1 (opaque).
            navButtonsOpacity: 0.5,
            //  Randomize the order of the slides
            //  Boolean.
            randomize: false,
            //  The slides loaded call back function
            //  called when slides have loaded.
            slidesLoaded: true,
            //  The slide transition before
            //  call back function - called before
            //  the slide transition.
            beforeTrans: false,
            //  The slide transition complete
            //  call back function - called at the end
            //  of a slide transition.
            afterTrans: false,
            //  The CSS class that will be applied
            //  to the stage element.
            classStage: 'mis-stage',
            //  The CSS class that will be
            //  applied to the slider element.
            classSlider: 'mis-slider',
            //  The CSS class that will be
            //  applied to each slide element.
            classSlide: 'mis-slide',
            //  The CSS class that will be
            //  applied to the parent of the
            //  prev and next button navigation elements.
            classNavButtons: 'mis-nav-buttons',
            //  The CSS class that will be
            //  applied to the parent of the
            //  numbered list navigation elements
            classNavList: 'mis-nav-list',
            //  The selector used to select
            //  the slider element
            //  Descendant of the stage
            selectorSlider: 'ul',
            //  The selector used to select
            //  each slide element
            //  Descendant of the slider
            selectorSlide: 'li'
        });
    });

    //**bxSlider to section what we do**//
    jQuery(function ($) {
        slider = $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            auto: true,
            speed: 800,
            pause: 4000,
            easing: 'jswing',
            tickerHover: true,
            adaptiveHeightSpeed: true,
            controls: true,
            startSlide: 0,
            infiniteLoop: true,
            responsive: true,
            useCSS: false,
            preloadImages:'all',
            touchEnabled: true,
            autoStart: true,
            autoHover: true
        });
        // slider.reloadSlider();
    });


   //** question menu**//



    jQuery(function ($) {
        function toggleChevron(e) {
            $el = $(e.target)
                .prev('.panel-heading')
                .find("i")
                .toggleClass('down fa fa-minus fa fa-plus rotate');
            setTimeout(function(){
                $el.toggleClass(' rotate down');
            },300);
        }
        $('#accordion').on('hidden.bs.collapse', toggleChevron);
        $('#accordion').on('shown.bs.collapse', toggleChevron);
        $('#accordion1').on('hidden.bs.collapse1', toggleChevron);
        $('#accordion1').on('shown.bs.collapse1', toggleChevron);

    });


    //**slider bootstrap**//
    $(function(){
        var count=0;
        setInterval(function(){
            count++;
            if(count % 2 == 1) {
                $('#Carousel').carousel('next');
            } else {
                $('#Carousel').carousel('prev');
            }
        },5000);
    });

    //**disable focus on map iframe**//
    $(document).ready(function(){
        $('.overlay').click(function() {
            $(this).remove();
        });
    });



});





