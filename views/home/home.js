angular.module( 'interoApp' )
	.controller( 'homeCtrl', function( $scope, authFactory, firebaseFactory ) {
		$scope.login = function(){
			authFactory.login();
		}
	} );
