$(document).ready(function(){

    // 스크롤효과
    $(window).scroll(function(){
        var sTop = $(this).scrollTop();  //스크롤위치
        var s5Top = $("#light_onoff").offset().top;  //메인탑과 브라우저 탑과의 거리
        if (sTop>s5Top+900) {
            $(".light_on").show();
            $(".light_off").hide();            
            $(".sub_s5 h2").show();            
        } else {
            $(".light_off").show();
            $(".light_on").hide();            
            $(".sub_s5 h2").hide();            
        };

        var s7Top = $("#ex_color").offset().top;  //메인탑과 브라우저 탑과의 거리
        if (sTop>s7Top-300) {
            $(".sub_s7 ul").fadeIn();            
        } else {
            $(".sub_s7 ul").fadeOut();           
        };
    });
  

    //slide    
    var swiper = new Swiper(".swiper2", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true, //반복
        autoplay: {
        delay: 4000,
        disableOnInteraction: true,
        }, //자동실행
    });

    // Service - 탭0 - 현대스마트센스
    $(".tab_name_safe li").eq(0).css("color","#fff");
    $(".tab_content_safe li").hide();
    $(".tab_content_safe li").eq(0).show();

    $(".tab_name_safe li").click(function(){
        $(".tab_name_safe li").css("color","#fff");
        $(this).css("color","#fff");
        $(this).css("font-weight","600");

        var tabNum = $(this).index();
        $(".tab_content_safe li").hide();
        $(".tab_content_safe li").eq(tabNum).show();
    });

    // Service - 탭1 - 타이어
    $(".tab_name li").eq(0).css("color","#a32b1a");
    $(".tab_content li").hide();
    $(".tab_content li").eq(0).show();

    $(".tab_name li").click(function(){
        $(".tab_name li").css("color","#333");
        $(this).css("color","#a32b1a");

        var tabNum = $(this).index();
        $(".tab_content li").hide();
        $(".tab_content li").eq(tabNum).show();
    });

    // Service - 탭2 - 인테리어
    $(".tab_content9 li").hide();
    $(".tab_content9 li").eq(0).show();
    $(".tab_name9 li").hide();
    $(".tab_name9 li").eq(0).show();

    $(".tab_name9 li").click(function(){        
        var tabNum9 = $(this).index();
        $(".tab_content9 li").hide();
        $(".tab_content9 li").eq(tabNum9).show();
        $(".tab_name9 li").hide();
        $(".tab_name9 li").eq(tabNum9).show();
    });


    // 컬러선택
    
    $(".car_color li").click(function(){        
        var tabNum = $(this).index();
        $(".exterior_color div").hide();
        $(".exterior_color div").eq(tabNum).fadeIn();
        $(".touch_bar").hide();

        if (tabNum==4) {
            $(".close_wh").hide();
            $(".close_bl").fadeIn();
        } else {
            $(".close_wh").fadeIn();
            $(".close_bl").hide();
        }
        
    });
    $(".exterior_color p").click(function(){
        $(".exterior_color div").fadeOut();
        $(".close_wh").fadeOut();
        $(".close_bl").fadeOut();
        $(".touch_bar").fadeIn();
    });

    // FAQ - 아코디언
    $(".safe_explain").hide();
    $(".tab_name_safe li").click(function(){
        $(this).children(".safe_explain").slideToggle();
        $(".tab_name_safe li").not(this).children(".safe_explain").slideUp();
    });

    
});