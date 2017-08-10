$(function(){
	$('.togglePlus').click(function(event){
		var id=event.target.id;
		var toggleId="#toggle-"+id;
		var togglePlus=".togglePlus span i#"+id;
		
		$(toggleId).toggle('fast', function(){
			if($(this).is(':hidden')) {
				$(togglePlus).removeClass("fa-minus");
				$(togglePlus).addClass("fa-plus");
			}else{
				$(togglePlus).removeClass("fa-plus");
				$(togglePlus).addClass("fa-minus");
			}
		});
	});
});