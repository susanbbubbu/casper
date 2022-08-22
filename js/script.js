$(document).ready(function(){

    //pop_up
    $("#pop_up p").click(function(){
        $("#pop_up").fadeOut();
    });

    //gnb_bar
    $(".menu_ham").click(function(){
        $("#gnb").fadeIn();
    });
    $(".gnb_bar .close").click(function(){
        $("#gnb").fadeOut();
    });

    // header - 스크롤효과
    $(window).scroll(function(){
        var sTop = $(this).scrollTop();  //스크롤위치
        var m1Top = $("#section1").offset().top;  //메인탑과 브라우저 탑과의 거리
        if (sTop>m1Top-300) {
            $(".drive_car").fadeIn();
            $("#section1 h1").fadeIn();
            $("#section1 .btn").fadeIn();
            $("#quickview").fadeIn();
        } else {
            $(".drive_car").fadeOut();
            $("#section1 h1").fadeOut();
            $("#section1 .btn").fadeOut();
            $("#quickview").hide();
        };

        var m2Top = $("#section2").offset().top;
        if (sTop>m2Top-300) {
            $("#section2 li").fadeIn();
        } else {
            $("#section2 li").fadeOut();
        }

    });
  

    //slide
    var swiper = new Swiper(".swiper1", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true, //반복
        autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        }, //자동실행
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        }, //네비게이션
    });

    
    //sub_order choose
    $("#choose>ul>li>div").click(function(){
        $("#choose>ul>li>div").css("border","1px solid #ddd");
        $(this).css("border","2px solid #000");
    });
    
});