var app = angular.module('myApp', []);

app.directive("scrollChangeLink", function($window, $location) {
	return function(scope, element, attrs) {
		angular.element($window).bind("scroll", function() {
			var scrollPos = angular.element(document).scrollTop();
			if (scrollPos % 50 == 0) {
				var menu = element.find('ul li a');
				angular.element(menu).each(function() {
					var currLink = angular.element(this);
					var refElement = angular.element(currLink.attr("href"));
					if (refElement.prop('offsetTop')) {
						if (refElement.prop('offsetTop') <= scrollPos && refElement.prop('offsetTop') + refElement.height() > scrollPos) {
							element.find('ul li').removeClass("active");
							currLink.parent().addClass("active");
							$window.location.hash = currLink.attr("href");
						} else {
							currLink.parent().removeClass("active");
						}
					}
				});				
			}
		});
	};
});

app.controller('Scrollspy', function($scope) {

});