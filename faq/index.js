// faq - index.js

$(function(){
    // tab 클릭시 색상 추가
    $('.tab_menu ul li').click(function(){
        $(this).addClass('active')
    })

    // Q 클릭 시 A_BOX 열림 
    // $('.faq_list .list li .qa_box').click(function(e,num){
    //     e.preventDefault();
    //     $('.faq_list .list li .qa_box .a_box'+num).addClass('active');
    //     // $('.faq_list .list ul li .q_box a').css('color','var(--main-color');
        
    //     $('.faq_list .list .a_box').slideToggle();
    
    // })

    $('.faq_list .list li .qa_box .q_box').click(function(e){
         e.preventDefault();
         $('.faq_list .list li .qa_box .q_box a').css({'color':'#000'}); 
         $('.faq_list .list li .qa_box .q_box').siblings('.a_box').slideUp();
         $(this).siblings('.a_box').slideToggle();
         $(this).children('a').css({'color':'var(--main-color)'});
 })

})

function tabOpen(num){
// active 클래스 전체 제거 -> 해당 페이지에 클래스 추가 
$('.tab_menu li').removeClass('active');
$('.tab_menu .tab'+num).addClass('active');
$('.faq_list .list').addClass('hide');
$('.faq_list .list'+num).removeClass('hide');
}
