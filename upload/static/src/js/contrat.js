function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
setCookie('index',false);
setCookie('select','0');
setInterval(function(){
    $('.left').click(function(){
        location.href = '/formulaire/map';

    });
    var d = parseInt($('#contract_id').text());
    $('#family').attr('href','/formulaire/family/'+d);
},100);
console.log('king');


$('.card-header').click(function(){
    var index = $('.card-header').index($(this));
    var id = parseInt($('.id').eq(index).text());
    console.log(id);
    location.href = '/formulaire/bs/'+id;

});
$('.nav-link').on('mouseenter',function(){
    $(this).css('background-color','#6d5cae');
    $(this).find('.nav-text').css('color','white');
});
$('.nav-link').on('mouseleave',function(){
    $(this).css('background-color','');
});

 // $('.tr').on('mouseover',function(){
 //    $('.tr').css('background','');
 //    $(this).css('background','lightyellow');

 // });
 // $('.tr').on('mouseleave',function(){
 //    $(this).css('background','');
 // });
 // var width = $(window).width();
 // if(width>370){
 //    console.log('bigger');
 // }
 // else{
 //    $('.table-responsive').find('th').eq(2).hide();
 //    $('.table-responsive').find('th').eq(3).hide();
 //    $('.table-responsive').find('th').eq(4).hide();
 //    for(var i=$('.tr').length;i>-1;i--){
 //        $('.tr').eq(i).find('td').eq(2).hide();
 //        $('.tr').eq(i).find('td').eq(3).hide();
 //        $('.tr').eq(i).find('td').eq(4).hide();

 //    }
 // }