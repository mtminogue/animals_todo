jQuery(document).ready(function() {
	jQuery('.house').hide();
	jQuery('#nav-animals').click(function(){
		jQuery('.animals').show();
		jQuery('.house').hide();
	});
	jQuery('#nav-house').click(function(){
		jQuery('.animals').hide();
		jQuery('.house').show();
	});
});