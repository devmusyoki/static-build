if(window.jQuery) {
	jQuery(window).load(function() { 
		setTimeout(function() {
			jQuery('#divi-preloader').fadeOut();
			setTimeout(function() {
				jQuery('#divi-preloader').remove();
			}, 500);
		}, 1000);
	});

	jQuery('.display-for').click(function() {
		if(this.value == 'custom') jQuery('.page-checkbox').attr('disabled', false);
		else jQuery('.page-checkbox').attr('disabled', true);
	});

	jQuery('#dlpreloader-preview').click(function(){
		var xy = jQuery('#dlpl-dimension').val().replace(/\s/g, '').toLowerCase().split('x');
		jQuery('body').addClass('no-scroll');

		if(xy.length > 1) jQuery('#divi-preloader-preview img').css({'width':xy[0], 'height':xy[1]});
		else jQuery('#divi-preloader-preview img').css({'width':64, 'height':64});

		jQuery('#divi-preloader-preview img').attr('src', jQuery('#dlpl-wrap .input-url').val());
		jQuery('#divi-preloader-preview p').html(jQuery('#dlpl-wrap textarea').val());

		var bgcolor = '#'+jQuery('#dlpl-bg-color').val();
		bgcolor = 'rgba(' + parseInt(bgcolor.slice(-6,-4),16) + ',' + 
					  parseInt(bgcolor.slice(-4,-2),16) + ',' + 
					  parseInt(bgcolor.slice(-2),16) + ',' + 
					  jQuery('#dlpl-bg-transparency').val() + ')';

		jQuery('#divi-preloader-preview').css({
			'display': 'table', 
			'background': bgcolor
		});

		var msgcolor = '#'+jQuery('#dlpl-message-color').val();
		jQuery('#divi-preloader-preview p').css({
			'color':msgcolor, 
			'font-size':jQuery('#dlpl-message-font').val()+'px'
		});

		jQuery('#divi-preloader-preview').fadeIn('slow');
		setTimeout(function() {
			jQuery('body').removeClass('no-scroll');
			jQuery('#divi-preloader-preview').hide();
		}, 5000);
	});

	jQuery('#dlpl-preview-close').click(function(){
		jQuery('body').removeClass('no-scroll');
		jQuery('#divi-preloader-preview').hide();
	});
}