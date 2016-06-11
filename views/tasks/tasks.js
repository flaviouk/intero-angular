angular.module( 'interoApp' )
	.controller( 'tasksCtrl', function( $scope, authFactory, $firebaseArray, $timeout ) {

		$scope.tasks = $firebaseArray( authFactory.currentUserTasks );

		$scope.title = 'All Tasks';

		$scope.view = function( str, bolean ) {
			$scope.title = str;
			$scope.showTasks = bolean;
		}

		$scope.showTasks = true;

	} );
