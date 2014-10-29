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

    $("#doctorSpecialitySelectLeft, #doctorMetroSelectLeft, #clinicSpecialitySelectLeft, #clinicMetroSelectLeft").chosen({
        no_results_text: 'Нет совпадений',
        allow_single_deselect: true,
        search_contains: true,
        width: '100%'
    });
});