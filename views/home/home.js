angular.module( 'interoApp' )
	.controller( 'homeCtrl', function( $scope, authFactory, firebaseFactory ) {
		$scope.login = function(){
			authFactory.login();
		}

		$scope.logout = function () {
			authFactory.logout();
		}
	} );
