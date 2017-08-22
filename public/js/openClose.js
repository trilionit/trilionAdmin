$(function(){
	$('.togglePlus').click(function(event){
		event.preventDefault();
		var id=$(this).attr('id');
		var toggleId="#toggle-"+id;
		var togglePlus=".togglePlus span i#plus-"+id;
		$(toggleId).toggle('fast', function(){
			if($(toggleId).is(':hidden')) {
				$(togglePlus).removeClass("fa-minus");
				$(togglePlus).addClass("fa-plus");
			}else{
				$(togglePlus).removeClass("fa-plus");
				$(togglePlus).addClass("fa-minus");
			}
		});
	});
});