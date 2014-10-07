$(document).ready(function()	{
	var video_url = "http://www.youtube.com/embed/n6Pu2Y-heK0";
	$('#kodiyet').on('hide.bs.modal', function (e) {
		$("#kodiyetvideo").attr("src","")
	})
	$('#kodiyet').on('shown.bs.modal', function (e) {
		$("#kodiyetvideo").attr("src",video_url)
	})
});