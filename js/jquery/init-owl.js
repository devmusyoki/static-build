jQuery(document).ready(function($){
   $('.blurbslider').owlCarousel({ loop:true,margin:5, responsive:{
        0:{ items:1 },
        600:{items:3},
        1000:{ items:4} }
	});
   
     $('.teamslider').owlCarousel({ loop:true,margin:5, responsive:{
        0:{ items:1 },
        600:{items:3},
        1000:{ items:4} }
	});
	 
	  $('.testimonialslider').owlCarousel({ loop:true,margin:5, responsive:{
        0:{ items:1 },
        600:{items:3},
        1000:{ items:4} }
	});
	  
	$('.tilt-simple-slider').owlCarousel({ loop:true,margin:5, responsive:{
        0:{ items:1 },
        600:{items:3},
        1000:{ items:4} }
	});
	
});
 jQuery(window).on('et_fb_module_did_update_et_pb_blurb', function(props, prevProps) {	
		 if (! props.loading) { 
		   if( jQuery('body').find('.blurbslider').length > 0 ){
				   $('.blurbslider').owlCarousel({ loop:true,margin:5, responsive:{
					0:{ items:1 },
					600:{items:3},
					1000:{ items:4} }
				});
		   }
		   if( jQuery('body').find('.tilt-simple-slider').length > 0 ){
				   $('.tilt-simple-slider').owlCarousel({ loop:true,margin:5, responsive:{
					0:{ items:1 },
					600:{items:3},
					1000:{ items:4} }
				});
		   }
		 }
	});
	 jQuery(window).on('et_fb_module_did_update_et_pb_team_member', function(props, prevProps) {	
		 if (! props.loading) {
		    if( jQuery('body').find('.teamslider').length > 0 ){
			   $('.teamslider').owlCarousel({ loop:true,margin:5, responsive:{
					0:{ items:1 },
					600:{items:3},
					1000:{ items:4} }
				});
			}
		 }
	});
	 jQuery(window).on('et_fb_module_did_update_et_pb_testimonial', function(props, prevProps) {	
		 if (! props.loading) {
		    if( jQuery('body').find('.testimonialslider').length > 0 ){	
			   $('.testimonialslider').owlCarousel({ loop:true,margin:5, responsive:{
					0:{ items:1 },
					600:{items:3},
					1000:{ items:4} }
				});
			}
		 }
	});