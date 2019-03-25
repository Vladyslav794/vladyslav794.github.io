(function($) {
$(function() {
	$('ul.tabs').delegate('li:not(.current)', 'click', function() {
		$(this).addClass('current').siblings().removeClass('current')
			.parents('div.content').find('div.text').hide().eq($(this).index()).fadeIn(150);
	})
})
$(function() {
	$('ul.tabs_hor').delegate('li:not(.current_hor)', 'click', function() {
		$(this).addClass('current_hor').siblings().removeClass('current_hor')
			.parents('div.content_hor').find('div.text_hor').hide().eq($(this).index()).fadeIn(150);
	})
})
})(jQuery)