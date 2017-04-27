jQuery(document).ready(function($){
    $('.tabs').pwstabs({

        // scale / slideleft / slideright / slidetop / slidedown / none
        effect: 'scale',
        // Открытая по стандарту вкладка
        defaultTab: 1,

        // Установка произвольной ширины контейнера
        // Любое значение величины (1,2,3.. / px,pt,em,%,cm..)
        containerWidth: '1113px',

        // Позиция вкладок: horizontal / vertical
        tabsPosition: 'horizontal',

        // Горизонтальная позиция вкладок: top / bottom
        horizontalPosition: 'top',

        // Вертикальная позиция вкладок: left / right
        verticalPosition: 'left',

        // Адаптивность вкладок : true / false
        responsive: true,

        // Themes available: default: '' / pws_theme_violet / pws_theme_green / pws_theme_yellow / pws_theme_gold /
        // pws_theme_orange / pws_theme_red / pws_theme_purple / pws_theme_grey
        theme: '',

        // Поддержка текстов справа налево : true/ false
        rtl: false

    });

    //**changes active class in tabs portfolio**//
    $('.pws_tabs_controll li').on('click', function(){
        $('.pws_tabs_controll li a').each(function () {
            $(this).removeClass('active-link');
        });
        $(this).find('a').addClass('active-link');
    });
});