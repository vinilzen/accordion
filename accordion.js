$(function(){

	$('#accordion .panel-collapse')
		.on('show.bs.collapse', function(e){
			if ($(e.target).hasClass('lvl1')) {
				$(e.target).closest('.panel').addClass('open');
			}
		})
		.on('hide.bs.collapse', function(e){
			if ($(e.target).hasClass('lvl1')) {
				$(e.target).closest('.panel').removeClass('open');
			}
		});


	$('#accordion select').styler({
		selectSearch:true,
		// selectVisibleOptions:5
	});

});