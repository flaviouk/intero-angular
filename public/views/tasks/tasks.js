angular.module( 'interoApp' )
	.controller( 'tasksCtrl', function( $scope, authFactory, $firebaseArray ) {

		$scope.tasks = $firebaseArray( authFactory.currentUserTasks );

		$scope.title = 'All Tasks';

		$scope.view = function( str, bolean ) {
			$scope.title = str;
			$scope.showTasks = bolean;
		}

		$scope.filters = {};

		$scope.setFilter = function (obj) {
			$scope.filters = obj;
		}

		$scope.showTasks = true;

	} );
