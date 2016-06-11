angular.module( 'interoApp' )
	.controller( 'tasksCtrl', function( $scope, tasksFactory, $timeout ) {

		$scope.title = 'Tasks'

		var allTasks;
		tasksFactory.getTasks().then( function( result ) {
			allTasks = result.val();
		} );

		checkTasks();

		function checkTasks( counter ) {
			if ( !allTasks ) {
				if ( !counter ) { counter = 500 }
				$timeout( function() {
					checkTasks( counter * 2 );
				}, counter )
			} else {
				$scope.tasks = allTasks;
			}
		}

		$scope.view = function(str, bolean){
			$scope.title = str;
			$scope.showTasks = bolean;
			console.log($scope.showTasks);
		}

		$scope.showTasks = true;


	} );
