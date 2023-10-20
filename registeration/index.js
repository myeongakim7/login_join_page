// index.js

// confirm hidden > block 

$(function(){


// 아이디 중복확인
$('#e-mail_submit_btn').click(function(e){
    e.preventDefault();
    alert('사용할 수 있는 아이디입니다.')
})

    // 인증번호 받기
    $('#number_receive_btn').on('click',function(e){ 
        e.preventDefault();
       $(this).css({background:"#fff",color:'#00000033',border:"1px solid var(--border-line)",cursor:'default'})
       $('.number_confirm').css({display:'block',display:'flex'})
    })
    // 인증번호 확인 + 경고창
    $('.number_confirm').click(function(e){
        e.preventDefault();
        $(this).css({display:'block',display:'flex'});
        alert('인증되었습니다');
    })

    $('.complete #complete_btn').click(function(){
        $('.pop_up').bPopup({  
            modalClose: false,
            opacity: 0.6,
            positionStyle: 'fixed'});
    })
})

console.log('hello')
