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
				$scope.tasks = allTasks.splice( 1 );
			}
		}

		$scope.setToday = function(){
			$scope.title = 'TODAY';
		}
		$scope.setWeek = function(){
			$scope.title = 'This WEEK';
		}


	} );
