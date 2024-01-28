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
})
