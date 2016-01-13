angular.module("portfolio")
	.directive("menu", function ($state) {

		return {
			restrict: "E",
			templateUrl: "features/menu/menu.html",
			controller: function ($scope, $location) {
				$scope.url = $location.url();

				$scope.showHome = function () {
					if ($scope.url === "/home") {
						return false;
					} else {
						return true;
					}
				};	
			}
		};
	});