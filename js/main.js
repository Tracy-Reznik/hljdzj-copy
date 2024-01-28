$(document).ready(() => {
    console.log("hello world")
    $("#logIn").click(() => {
        console.log("login")
        $("#login_dialog").modal("show")
    });
    $(".nav-link").hover(function () {
        console.log(1)
        $(this).next().css("display", "block");
    }, function () {
        console.log(2)
        $(this).next().css("display", "none");
    });
    $(".topNews-list-box-tab").hover(function () {
        $(".topNews-list-box-tab").removeClass("topNews-list-active")
        $(this).addClass("topNews-list-active");
    }, ()=>{})
})
$(document).ready(function () {
    var $slides = $('#carousel .slide');
    var currentSlide = 0;

    function goToSlide(n) {
        $slides.css('transform', 'translateX(' + (-n * 100) + '%)');
        currentSlide = n;
    }

    $('#prevSlide').click(function () {
        goToSlide((currentSlide - 1 + $slides.length) % $slides.length);
    });

    $('#nextSlide').click(function () {
        goToSlide((currentSlide + 1) % $slides.length);
    });

    // Optional: Auto-play slides
    setInterval(function () {
        goToSlide((currentSlide + 1) % $slides.length);
    }, 3000); // Change slide every 3 seconds
});
