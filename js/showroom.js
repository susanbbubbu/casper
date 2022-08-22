$(document).ready(function(){

    // Service - 탭 - 디지털쇼룸
    $(".tab_name_show li").eq(0).css("color","#111f50");
    $(".tab_name_show li").eq(0).css("background-color","#fff");
    $(".tab_content_show li").hide();
    $(".tab_content_show li").eq(0).show();

    $(".tab_name_show li").click(function(){
        $(".tab_name_show li").css("color","#fff");
        $(".tab_name_show li").css("background-color","rgba(255,255,255,0)");
        $(this).css("color","#111f50");
        $(this).css("background-color","#fff");

        var tabNum = $(this).index();
        $(".tab_content_show li").hide();
        $(".tab_content_show li").eq(tabNum).show();
    });
});