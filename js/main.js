$(document).ready(()=>{
    console.log("hello world")
    $("#logIn").click(()=>{
        console.log("login")
        $("#login_dialog").modal("show")
    });
    $(".nav-link").hover(function(){
        console.log(1)
        $(this).next().css("display","block");
    },function(){
        console.log(2)
        $(this).next().css("display","none");
    });
    $(document).ready(function() {
        var images = ["img/1eafd6f3db604c5396a384370ed32d40.jpg", "img/3bb", "url3"]; // 替换为你的图片URL
        var index = 0;

        function changeImage() {
            var imageUrl = images[index];
            $('.carousel-item').animate({
                'margin-left': '-=' + $('.carousel-item').width()
            }, 1000, function() {
                $('.carousel-item').css('margin-left', 0);
                $('.carousel-item').first().appendTo('#carousel');
            });
            index = (index + 1) % images.length; // 循环播放图片
        }

        setInterval(changeImage, 3000); // 每3秒更换一次图片
    });
})
