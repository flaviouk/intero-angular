angular.module( 'interoApp' )
	.controller( 'homeCtrl', function( $scope, authFactory ) {
		$scope.login = function(){
			authFactory.login();
		}
	} );
