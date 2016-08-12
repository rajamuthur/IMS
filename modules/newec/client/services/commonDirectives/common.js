'use strict';
materialAdmin

// =========================================================================
// INPUT FEILDS MODIFICATION
// =========================================================================

//Add blue animated border and remove with condition when focus and blur

		.directive("scroll", function ($window) {
			return function (scope, element, attrs) {
				angular.element($window).bind("scroll", function () {
					if (this.pageYOffset >= 100) {
						scope.boolChangeClass = true;
					} else {
						scope.boolChangeClass = false;
					}
					scope.$apply();
				});
			};
		});