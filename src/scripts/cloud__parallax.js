window.onload = function () {
    // **nav-menu additionall**//
    var btnHeader = document.querySelector('.navbar__btn');
    btnHeader.addEventListener('click', function () {
        var menu = document.querySelector('.nav__menuDrop');
        menu.classList.toggle('open__menu');
    });


    //**parallax-ja**//
    // var scene = document.getElementById('scene');
    // var parallax = new Parallax(scene);


};