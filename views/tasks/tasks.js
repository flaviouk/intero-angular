angular.module( 'interoApp' )
	.controller( 'tasksCtrl', function( $scope, tasksFactory, $timeout ) {
		
		$scope.tasks;
		$scope.title = 'Tasks';
		tasksFactory.getTasks().then( function( result ) {
			return result.val();
		} ).then( function( result ) {
			$scope.tasks = result;
			// tasksFactory.bindTasks();
			console.log( $scope.tasks );
		} );

		$scope.view = function( str, bolean ) {
			$scope.title = str;
			$scope.showTasks = bolean;
			console.log( $scope.showTasks );
		}

		$scope.showTasks = true;


	} );
