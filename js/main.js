
// Botões de eventos

$(function(){

		$('.evento-buttonid').on('click', function(){

			var buttonId = $(this).attr('data-button');

			$('.'+buttonId).toggle(200);

	});

});

$('.box-exterior').hover(

	function(){

		$(this).find('.caption').fadeToggle(300);

});

$('.box-exterior-2').hover(

	function(){

		$(this).find('.caption').fadeToggle(300);

});

// Validação de formulários

function isEmail(email) {

	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	return regex.test(email);

}

$("#submit").click(function(){

	var error = "";

	var missing = "";

	if ($("#nome").val() == "") {

		missing += "<br> Nome";

	}

	if ($("#assunto").val() == ""){

		missing += "<br> Assunto";

	}

	if ($("#email").val() == "") {

		missing += "<br> Email";

	}

	if ($("#mensagem").val() == "") {

		missing += "<br> Mensagem vazia!";

	}

	if (missing != "") {

		error += "<p> Os campos seguintes estão vazios: </p>" + missing;

	}

	if (isEmail($("#email").val()) == false) {

		error += "<p> Seu email é inválido </p>";

	}

	if (error != "") {

		$(".alert-danger").html(error);

	} else {

		$(".alert-success").show();
		$(".alert-danger").hide();

	}

});