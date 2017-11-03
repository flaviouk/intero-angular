angular.module( 'interoApp' )

.directive( 'navbar', function() {
	return {
		templateUrl: './directives/navbar/navbar.html',
		controller: function ($scope, authFactory) {
			$scope.logout = function () {
				authFactory.logout();
			}
		}
	};
} );