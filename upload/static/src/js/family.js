$('.list-item').click(function(){
  var index = $('.list-item').index($(this));
  $('.padding').addClass('hidden');
  $('.padding').eq(index).removeClass('hidden');
});
$('.padding').eq(0).removeClass('hidden');
            
  var nb = $('.profileImage').length;
  var half = nb/2;
  for(var i=0;i<nb;i++){
  	var firstName = $('.name').eq(i).text();
 
	  var intials = firstName.charAt(0);
	  var profileImage = $('.profileImage').eq(i).text(intials);
  }
  for(var j=half;j<nb;j++){
  	$('.profileImage').eq(j).text($('.profileImage').eq(j-half).text());
  }


  console.log(nb);
  

  $('.pull-right').click(function(){
  		window.history.back();
  });