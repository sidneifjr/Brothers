// botões de eventos
$(function(){
		$('.evento-buttonid').on('click', function(){
			var buttonId = $(this).attr('data-button');
			$('.'+buttonId).toggle(200);
	});
});