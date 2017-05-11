//THANKS:http://stackoverflow.com/questions/4006991/build-url-from-form-fields-with-javascript-or-jquery
$('#ghpagesForm').change(function() {
	var newURL = "https://acamica.typeform.com/to/wTx543?entrega_id=99999999&email_estudiante=" + $('#userName').val() + "&name=" + $('#repoName').val();
	$('#contactURL span').empty();
	$('#contactURL span').append('<a target="_blank" href="' + newURL + '">' + newURL + '</a>');
});