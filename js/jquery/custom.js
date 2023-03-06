jQuery(document).ready(function($){


//$(".six-block-height").matchHeight();




});

jQuery(document).ready(function($){


$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})
	
	
});


var myVar;
function preloader_go() {
  myVar = setTimeout(showPage, 7000);
}
function showPage() {
  document.getElementById("loader-bg").style.display = "none";
  document.getElementById("loader").style.display = "none";
  document.getElementById("page-show").style.display = "block";
}