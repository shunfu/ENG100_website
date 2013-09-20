(function($) {
	"use strict";
	$(function() {
	
		$(window).konami({
			cheat: function() {
				window.location.replace("secret.html");
			} // end cheat
		});
		
	});
}(jQuery));