jQuery(document).ready(function() {
	jQuery('.house').hide();
	jQuery('#nav-animals').click(function(e){
		jQuery('li').removeClass('active');
		jQuery(this).addClass('active');
		jQuery('.animals').show();
		jQuery('.house').hide();
		e.preventDefault();
	});
	jQuery('#nav-house').click(function(e){
		jQuery('li').removeClass('active');
		jQuery(this).addClass('active');
		jQuery('.animals').hide();
		jQuery('.house').show();
		e.preventDefault();
	});
});